from __future__ import division
import math
import random
import sqlalchemy
import time
from datetime import date, timedelta
from ytrends.db import *
from ytrends.transform import *

class Stats(object):
    '''
    Manage queries against our database (perhaps these methods should be on the models?)
    '''
    
    def __init__(self, engine, days=0):
        '''
        Initialize.
        :param engine: sqlalchemy database engine
        :param days=0: number of most recent days to include or 0 for all days
        '''
        # init the connection to the database
        self.engine = engine
        Session = sqlalchemy.orm.sessionmaker(bind=self.engine)
        self.session = Session()
        self.days = int(days)
    
    def __del__(self):
        # Explicitly close session
        # https://groups.google.com/forum/#!topic/sqlalchemy/qAMe78TV0M0
        self.session.close()
    
    def clean_loc(self, loc):
        if loc == '--':
            return u'usa'
        return loc
    
    def get_dates(self):
        if self.days == 0:
            return []
        # Query most recent dates
        dates = self.session.query(sqlalchemy.sql.func.distinct(Rank.date)).\
            order_by(Rank.date.desc()).\
            limit(self.days)
        dates = [date[0].strftime('%Y-%m-%d') for date in dates]
        return dates
    
    def get_viewable(self):
        '''
        Returns a dictionary that maps video_id to boolean indicating if it is viewable or not
        '''
        try:
            return self.viewable
        except AttributeError:
            pass
        # Query ranks for all videos
        rows = self.session.query(Rank.video_id, Video.viewable).\
            filter(sqlalchemy.not_(Rank.loc.like('%all_%'))).\
            filter_by(source='view').\
            outerjoin(Video)
        self.viewable = {}
        for row in rows:
            self.viewable[row[0]] = row[1]
        return self.viewable
    
    def get_day_count_by_country(self):
        '''
        Returns a dictionary that maps location to number of days we have ranks about
        '''
        try:
            return self.day_count_by_country
        except AttributeError:
            pass
        # Query ranks per country
        country_days = self.session.query(Rank.loc, sqlalchemy.sql.func.count(sqlalchemy.sql.func.distinct(Rank.date))).\
            filter(sqlalchemy.not_(Rank.loc.like('%all_%'))).\
            filter_by(source='view').\
            group_by(Rank.loc)
        # Add date filter
        if self.days > 0:
            country_days = country_days.filter(Rank.date.in_(self.get_dates()))
        self.day_count_by_country = {}
        for country_day in country_days:
            s = self.clean_loc(country_day[0])
            self.day_count_by_country[s] = country_day[1]
        return self.day_count_by_country
    
    def get_count_by_loc(self):
        '''
        Returns a dictionary that maps location to a map of video_id to number of rankings (ie. days)
        '''
        try:
            return self.count_by_loc
        except AttributeError:
            pass
        # Query ranks for all videos
        ranks = self.session.query(Rank.video_id, Rank.loc, sqlalchemy.sql.func.count('*').label('entries')).\
            filter(sqlalchemy.not_(Rank.loc.like('%all_%'))).\
            filter_by(source='view').\
            group_by(Rank.video_id, Rank.loc)
        # Filter by dates
        if self.days > 0:
            ranks = ranks.filter(Rank.date.in_(self.get_dates()))
        self.count_by_loc = self._query_to_count_by_loc(ranks)
        return self.count_by_loc
    
    def _query_to_count_by_loc(self, query):
        '''
        Given a query result, create a dictionary mapping location to video id to count.
        '''
        # Create dict with counts (location -> video id -> count)
        count_by_loc = {}
        for rank in query:
            videos = count_by_loc.get(self.clean_loc(rank[1]), {})
            videos[rank[0]] = rank[2]
            count_by_loc[self.clean_loc(rank[1])] = videos
        return count_by_loc

    def get_videos(self):
        '''
        A set of all the videos we care about
        '''
        try:
            return self.videos
        except AttributeError:
            pass
        return set(video_id for by_vid in self.get_count_by_loc().values() for video_id in by_vid.keys())
    
    def get_locs(self):
        '''
        A set of all the locations we care about
        '''
        try:
            return self.locs
        except AttributeError:
            pass
        locs = self.session.query(sqlalchemy.sql.func.distinct(Rank.loc)).\
            filter(sqlalchemy.not_(Rank.loc.like('%all_%'))).\
            filter_by(source='view')
        self.locs = []
        for loc in locs:
            self.locs.append(self.clean_loc(loc[0]))
        return self.locs
    
    def get_idf(self):
        '''
        Return dict mapping countries to their inverse document frequency (with countries for "documents")
        '''
        try:
            return self.idf
        except AttributeError:
            pass
        count_by_loc = self.get_count_by_loc()
        videos = self.get_videos()
        locs = self.get_locs()
        self.idf = dict((video_id, math.log(len(locs) / sum([1 for l in locs if count_by_loc[l].get(video_id, 0) > 0]))) for video_id in videos)
        return self.idf

    def get_video_popularity(self, video_id):
        '''
        Returns a dictionary for this specific video mapping country to number of days on top list
        '''
        ranks = self.session.query(Rank.loc, sqlalchemy.sql.func.count('*').label('entries')).\
            filter(sqlalchemy.not_(Rank.loc.like('%all_%'))).\
            filter_by(video_id=video_id).\
            filter_by(source='view').\
            group_by(Rank.loc)
        # Filter by dates
        if self.days > 0:
            ranks = ranks.filter(Rank.date.in_(self.get_dates()))
        count_by_loc = {}
        for rank in ranks:
            count_by_loc[rank[0]] = rank[1]
        return count_by_loc

    def get_video_data(self, video_id):
        '''
        Return video object with metadata and attention footprint
        '''
        video = {
            'id': video_id
        }
        ranks = self.session.query(Rank.loc, Rank.date, Rank.rank).\
            filter(sqlalchemy.not_(Rank.loc.like('%all_%'))).\
            filter_by(video_id=video_id).\
            filter_by(source='view').\
            order_by(Rank.date, Rank.loc)
        # Filter by most recent days
        if self.days > 0:
            ranks = ranks.filter(Rank.date.in_(self.get_dates()))
        loc_by_date = {}
        for rank in ranks:
            ts = time.mktime(rank[1].timetuple())
            loc_by_date[ts] = loc_by_date.get(ts, [])
            loc_by_date[ts].append({'loc': self.clean_loc(rank[0]), 'rank':rank[2]})
        video['attention'] = dictToList(loc_by_date, 'date', 'countries')
        return video

    def get_video_attention_by_day(self, video_id):
        results = self.session.query(sqlalchemy.sql.func.distinct(Rank.date)).\
            order_by(Rank.date.desc())
        all_dates = []
        for row in results:
            all_dates.append(row[0])
        ranks = self.session.query(Rank.date, sqlalchemy.sql.func.count('*').label('entries')).\
            filter(sqlalchemy.not_(Rank.loc.like('%all_%'))).\
            filter_by(video_id=video_id).\
            filter_by(source='view').\
            group_by(Rank.date)
        count_by_date = {}
        dates = []
        for rank in ranks:
            count_by_date[str(rank[0])] = rank[1]
            dates.append(rank[0])
        delta = max(all_dates) - min(all_dates)
        # fill in the days that are zeros (easier to do in code than as a left+nested query with sqlalchemy)
        for day_delta in range(delta.days + 1):
            date = min(all_dates)+timedelta(days=day_delta)
            if date not in dates:
                count_by_date[str(date)] = 0
        return count_by_date

    def get_videos_without_metadata(self, count):
        videos = self.session.query(Rank.video_id).\
            filter(sqlalchemy.not_(Rank.loc.like('%all_%'))).\
            filter_by(source='view').\
            outerjoin(Video).\
            group_by(Rank.video_id).\
            having(sqlalchemy.sql.func.count(Video.id)==0).\
            limit(count)
        # Filter by dates
        if self.days > 0:
            videos = videos.filter(Rank.date.in_(self.get_dates()))
        return videos

    def get_spread(self, video_id):
        '''
        Returns a dictionary mapping country and date to rank for a single video.
        '''
        ranks = self.session.query(Rank.loc, Rank.date, Rank.rank).\
            filter(sqlalchemy.not_(Rank.loc.like('%all_%'))).\
            filter_by(video_id=video_id).\
            filter_by(source='view')
        results = {}
        for loc, date, rank in ranks:
            loc = self.clean_loc(loc)
            results[loc] = results.get(loc, {})
            results[loc][date] = rank
        return results
    
    def get_cv_count_by_loc(self, fold_count=10):
        '''
        Returns a list of pairs
        '''
        # Get list of dates and assign to folds of the same size
        all_dates = [date[0].strftime('%Y-%m-%d') for date in self.session.query(sqlalchemy.distinct(Rank.date))]
        random.shuffle(all_dates)
        fold_size = int(math.floor(len(all_dates) / fold_count))
        fold_dates = [all_dates[i:i+fold_size] for i in range(0, len(all_dates), fold_size)]
        folds = []
        for i in range(0, fold_count):
            # Query ranks for all videos
            ranks = self.session.query(Rank.video_id, Rank.loc, sqlalchemy.sql.func.count('*').label('entries')).\
                filter(sqlalchemy.not_(Rank.loc.like('%all_%'))).\
                filter_by(source='view').\
                group_by(Rank.video_id, Rank.loc).\
                filter(Rank.date.in_(sum([fold_dates[f] for f in range(0,fold_count) if f != i], [])))
            training = self._query_to_count_by_loc(ranks)
            ranks = self.session.query(Rank.video_id, Rank.loc, sqlalchemy.sql.func.count('*').label('entries')).\
                filter(sqlalchemy.not_(Rank.loc.like('%all_%'))).\
                filter_by(source='view').\
                group_by(Rank.video_id, Rank.loc).\
                filter(Rank.date.in_(fold_dates[i]))
            test = self._query_to_count_by_loc(ranks)
            folds.append((training, test))
        return folds
