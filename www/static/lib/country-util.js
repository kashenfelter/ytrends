//Utilities for working with country info.  Depends on JQuery.

/**
 * Return the lat/lng center of a country, keyed by Alpha3 ISO3166 name
 */
var Centroid = {
	data: {'yem': {'lat': '15.5', 'lng': '47.5'}, 'svn': {'lat': '46.25', 'lng': '15.16667'}, 'bvt': {'lat': '-54.43333', 'lng': '3.4'}, 'mnp': {'lat': '18.7676', 'lng': '145.673'}, 'lso': {'lat': '-29.5', 'lng': '28.25'}, 'tkl': {'lat': '-9.167', 'lng': '-171.83'}, 'tkm': {'lat': '40', 'lng': '60'}, 'alb': {'lat': '41', 'lng': '20'}, 'ita': {'lat': '42.83333', 'lng': '12.83333'}, 'tto': {'lat': '11', 'lng': '-61'}, 'nld': {'lat': '52.5', 'lng': '5.75'}, 'tcd': {'lat': '15', 'lng': '19'}, 'blr': {'lat': '53', 'lng': '28'}, 'rou': {'lat': '46', 'lng': '25'}, 'tca': {'lat': '21.73333', 'lng': '-71.58333'}, 'cuw': {'lat': '12.16667', 'lng': '-69'}, 'bfa': {'lat': '13', 'lng': '-2'}, 'nga': {'lat': '10', 'lng': '8'}, 'zmb': {'lat': '-15', 'lng': '30'}, 'gmb': {'lat': '13.5', 'lng': '-15.5'}, 'hrv': {'lat': '45.16667', 'lng': '15.5'}, 'gtm': {'lat': '14.64072', 'lng': '-90.51327'}, 'lka': {'lat': '7', 'lng': '81'}, 'aus': {'lat': '-25', 'lng': '135'}, 'jam': {'lat': '18.25', 'lng': '-77.5'}, 'pcn': {'lat': '-25.06667', 'lng': '-130.1'}, 'cub': {'lat': '20.02472', 'lng': '-75.82194'}, 'sgp': {'lat': '1.28967', 'lng': '103.85007'}, 'dji': {'lat': '11.58901', 'lng': '43.14503'}, 'irl': {'lat': '53', 'lng': '-8'}, 'mwi': {'lat': '-13.5', 'lng': '34'}, 'fin': {'lat': '64', 'lng': '26'}, 'uga': {'lat': '2', 'lng': '33'}, 'rwa': {'lat': '-2', 'lng': '30'}, 'bih': {'lat': '44.25', 'lng': '17.83333'}, 'cpv': {'lat': '16', 'lng': '-24'}, 'tjk': {'lat': '39', 'lng': '71'}, 'pse': {'lat': '31.92157', 'lng': '35.20329'}, 'lca': {'lat': '13.88333', 'lng': '-60.96667'}, 'ssd': {'lat': '7.5', 'lng': '30'}, 'ala': {'lat': '60.25', 'lng': '20'}, 'geo': {'lat': '41.99998', 'lng': '43.4999'}, 'atf': {'lat': '-43', 'lng': '67'}, 'nor': {'lat': '62', 'lng': '10'}, 'mhl': {'lat': '7.113', 'lng': '171.254'}, 'pak': {'lat': '30', 'lng': '70'}, 'guf': {'lat': '4', 'lng': '-53'}, 'ner': {'lat': '18', 'lng': '9'}, 'wsm': {'lat': '-13.8031', 'lng': '-172.17831'}, 'zwe': {'lat': '-19', 'lng': '29'}, 'gum': {'lat': '13.47861', 'lng': '144.81834'}, 'brb': {'lat': '13.16667', 'lng': '-59.53333'}, 'guy': {'lat': '5', 'lng': '-59'}, 'cri': {'lat': '9.93333', 'lng': '-84.08333'}, 'cmr': {'lat': '6', 'lng': '12'}, 'shn': {'lat': '-15.95', 'lng': '-5.7'}, 'kwt': {'lat': '29.36972', 'lng': '47.97833'}, 'mtq': {'lat': '14.66667', 'lng': '-61'}, 'nfk': {'lat': '-29.03333', 'lng': '167.95'}, 'mda': {'lat': '47', 'lng': '29'}, 'mdg': {'lat': '-20', 'lng': '47'}, 'hti': {'lat': '19', 'lng': '-72.41667'}, 'aze': {'lat': '40.5', 'lng': '47.5'}, 'tls': {'lat': '-8.83333', 'lng': '125.75'}, 'mar': {'lat': '32', 'lng': '-5'}, 'are': {'lat': '24', 'lng': '54'}, 'arg': {'lat': '-34', 'lng': '-64'}, 'sen': {'lat': '14', 'lng': '-14'}, 'btn': {'lat': '27.5', 'lng': '90.5'}, 'mdv': {'lat': '3.2', 'lng': '73'}, 'arm': {'lat': '40', 'lng': '45'}, 'est': {'lat': '59', 'lng': '26'}, 'mus': {'lat': '-20.3', 'lng': '57.58333'}, 'esp': {'lat': '40', 'lng': '-4'}, 'lux': {'lat': '49.61167', 'lng': '6.13'}, 'irq': {'lat': '33', 'lng': '44'}, 'phl': {'lat': '13', 'lng': '122'}, 'bdi': {'lat': '-3.5', 'lng': '30'}, 'smr': {'lat': '43.93667', 'lng': '12.44639'}, 'per': {'lat': '-10', 'lng': '-76'}, 'reu': {'lat': '-20.88231', 'lng': '55.4504'}, 'blm': {'lat': '17.9', 'lng': '-62.83333'}, 'vct': {'lat': '13.08333', 'lng': '-61.2'}, 'sur': {'lat': '4', 'lng': '-56'}, 'irn': {'lat': '32', 'lng': '53'}, 'abw': {'lat': '12.5', 'lng': '-69.96667'}, 'gbr': {'lat': '54.75844', 'lng': '-2.69531'}, 'mng': {'lat': '46', 'lng': '105'}, 'umi': {'lat': '5.875', 'lng': '-162.057'}, 'esh': {'lat': '24.49215', 'lng': '-12.65625'}, 'plw': {'lat': '7.503', 'lng': '134.621'}, 'ken': {'lat': '1', 'lng': '38'}, 'jor': {'lat': '31', 'lng': '36'}, 'iot': {'lat': '-6', 'lng': '72'}, 'tur': {'lat': '39.05901', 'lng': '34.91155'}, 'ggy': {'lat': '49.58333', 'lng': '-2.33333'}, 'omn': {'lat': '21', 'lng': '57'}, 'tuv': {'lat': '-8.51719', 'lng': '179.14478'}, 'mmr': {'lat': '22', 'lng': '98'}, 'bwa': {'lat': '-22', 'lng': '24'}, 'ecu': {'lat': '-2', 'lng': '-77.5'}, 'tun': {'lat': '34', 'lng': '9'}, 'sle': {'lat': '8.5', 'lng': '-11.5'}, 'rus': {'lat': '60', 'lng': '100'}, 'hkg': {'lat': '22.28552', 'lng': '114.15769'}, 'asm': {'lat': '-11.056', 'lng': '-171.082'}, 'srb': {'lat': '44.81892', 'lng': '20.45998'}, 'atg': {'lat': '17.05', 'lng': '-61.8'}, 'bgd': {'lat': '24', 'lng': '90'}, 'ltu': {'lat': '56', 'lng': '24'}, 'ata': {'lat': '-90', 'lng': '0'}, 'isr': {'lat': '31.5', 'lng': '34.75'}, 'caf': {'lat': '7', 'lng': '21'}, 'idn': {'lat': '-5', 'lng': '120'}, 'swe': {'lat': '62', 'lng': '15'}, 'bgr': {'lat': '43', 'lng': '25'}, 'bol': {'lat': '-17', 'lng': '-65'}, 'cod': {'lat': '0', 'lng': '25'}, 'cog': {'lat': '-1', 'lng': '15'}, 'sjm': {'lat': '78', 'lng': '20'}, 'glp': {'lat': '16.25', 'lng': '-61.58333'}, 'eth': {'lat': '8', 'lng': '38'}, 'com': {'lat': '-12.23333', 'lng': '44.44553'}, 'col': {'lat': '4', 'lng': '-72'}, 'wlf': {'lat': '-13.3', 'lng': '-176.2'}, 'cxr': {'lat': '-10.5', 'lng': '105.66667'}, 'can': {'lat': '60.10867', 'lng': '-113.64258'}, 'zaf': {'lat': '-29', 'lng': '24'}, 'chl': {'lat': '-33.45694', 'lng': '-70.64827'}, 'sgs': {'lat': '-56', 'lng': '-33'}, 'som': {'lat': '6', 'lng': '48'}, 'uzb': {'lat': '41.70754', 'lng': '63.84911'}, 'msr': {'lat': '16.75', 'lng': '-62.2'}, 'vir': {'lat': '18.34829', 'lng': '-64.98348'}, 'brn': {'lat': '4.5', 'lng': '114.66667'}, 'pol': {'lat': '52', 'lng': '20'}, 'chn': {'lat': '35', 'lng': '105'}, 'imn': {'lat': '54.15', 'lng': '-4.48333'}, 'tgo': {'lat': '8', 'lng': '1.16667'}, 'bra': {'lat': '-10', 'lng': '-55'}, 'xkx': {'lat': '42.58333', 'lng': '21'}, 'fra': {'lat': '46', 'lng': '2'}, 'mkd': {'lat': '41.83333', 'lng': '22'}, 'che': {'lat': '47.00016', 'lng': '8.01427'}, 'usa': {'lat': '39.76', 'lng': '-98.5'}, 'jey': {'lat': '49.21667', 'lng': '-2.11667'}, 'twn': {'lat': '24', 'lng': '121'}, 'ukr': {'lat': '49', 'lng': '32'}, 'dnk': {'lat': '56', 'lng': '10'}, 'mex': {'lat': '19.42847', 'lng': '-99.12766'}, 'swz': {'lat': '-26.5', 'lng': '31.5'}, 'ton': {'lat': '-20', 'lng': '-175'}, 'gib': {'lat': '36.14474', 'lng': '-5.35257'}, 'gin': {'lat': '11', 'lng': '-10'}, 'kor': {'lat': '37', 'lng': '127.5'}, 'fro': {'lat': '62', 'lng': '-7'}, 'vat': {'lat': '41.90236', 'lng': '12.45332'}, 'aut': {'lat': '47.33333', 'lng': '13.33333'}, 'mco': {'lat': '43.73333', 'lng': '7.41667'}, 'dza': {'lat': '28', 'lng': '3'}, 'cyp': {'lat': '35', 'lng': '33'}, 'hun': {'lat': '47', 'lng': '20'}, 'kgz': {'lat': '41', 'lng': '75'}, 'fji': {'lat': '-18', 'lng': '178'}, 'sxm': {'lat': '18.04167', 'lng': '-63.06667'}, 'ven': {'lat': '8', 'lng': '-66'}, 'ncl': {'lat': '-21.5', 'lng': '165.5'}, 'bmu': {'lat': '32.29149', 'lng': '-64.77797'}, 'hmd': {'lat': '-53.11711', 'lng': '73.50952'}, 'sdn': {'lat': '16', 'lng': '30'}, 'gab': {'lat': '-1', 'lng': '11.75'}, 'png': {'lat': '-6', 'lng': '147'}, 'svk': {'lat': '48.66667', 'lng': '19.5'}, 'dma': {'lat': '15.5', 'lng': '-61.33333'}, 'gnq': {'lat': '1.7', 'lng': '10.5'}, 'ben': {'lat': '9.5', 'lng': '2.25'}, 'bel': {'lat': '50.83333', 'lng': '4'}, 'slv': {'lat': '13.83333', 'lng': '-88.91667'}, 'mli': {'lat': '18', 'lng': '-2'}, 'deu': {'lat': '51.5', 'lng': '10.5'}, 'gnb': {'lat': '12', 'lng': '-15'}, 'flk': {'lat': '-51.75', 'lng': '-59.16667'}, 'lva': {'lat': '57', 'lng': '25'}, 'civ': {'lat': '8', 'lng': '-5'}, 'mlt': {'lat': '35.91667', 'lng': '14.43333'}, 'bes': {'lat': '12.21286', 'lng': '-68.29445'}, 'aia': {'lat': '18.21667', 'lng': '-63.05'}, 'eri': {'lat': '15', 'lng': '39'}, 'slb': {'lat': '-8', 'lng': '159'}, 'nzl': {'lat': '-37.78333', 'lng': '175.28333'}, 'and': {'lat': '42.50779', 'lng': '1.52109'}, 'lbr': {'lat': '6.5', 'lng': '-9.5'}, 'jpn': {'lat': '35.68536', 'lng': '139.75309'}, 'moz': {'lat': '-18.25', 'lng': '35'}, 'lby': {'lat': '28', 'lng': '17'}, 'mys': {'lat': '2.5', 'lng': '112.5'}, 'pri': {'lat': '18.46633', 'lng': '-66.10572'}, 'myt': {'lat': '-12.83333', 'lng': '45.16667'}, 'prk': {'lat': '40', 'lng': '127'}, 'tza': {'lat': '-6', 'lng': '35'}, 'prt': {'lat': '39.6945', 'lng': '-8.13057'}, 'spm': {'lat': '46.83333', 'lng': '-56.33333'}, 'ind': {'lat': '20', 'lng': '77'}, 'bhs': {'lat': '25.05823', 'lng': '-77.34306'}, 'bhr': {'lat': '26', 'lng': '50.5'}, 'pry': {'lat': '-22.99333', 'lng': '-57.99639'}, 'sau': {'lat': '25', 'lng': '45'}, 'lbn': {'lat': '33.83333', 'lng': '35.83333'}, 'lie': {'lat': '47.16667', 'lng': '9.53333'}, 'cym': {'lat': '19.5', 'lng': '-80.66667'}, 'afg': {'lat': '33', 'lng': '66'}, 'vut': {'lat': '-16', 'lng': '167'}, 'vgb': {'lat': '18.5', 'lng': '-64.5'}, 'nam': {'lat': '-22', 'lng': '17'}, 'grd': {'lat': '12.11667', 'lng': '-61.66667'}, 'nru': {'lat': '-0.517', 'lng': '166.933'}, 'grc': {'lat': '39', 'lng': '22'}, 'khm': {'lat': '13', 'lng': '105'}, 'grl': {'lat': '72', 'lng': '-40'}, 'cze': {'lat': '49.75', 'lng': '15'}, 'pan': {'lat': '8.9936', 'lng': '-79.51973'}, 'syc': {'lat': '-4.58333', 'lng': '55.66667'}, 'npl': {'lat': '28', 'lng': '84'}, 'kir': {'lat': '1.421', 'lng': '172.984'}, 'lao': {'lat': '18', 'lng': '105'}, 'qat': {'lat': '25.27932', 'lng': '51.52245'}, 'nic': {'lat': '13', 'lng': '-85'}, 'vnm': {'lat': '16.16667', 'lng': '107.83333'}, 'isl': {'lat': '65', 'lng': '-18'}, 'syr': {'lat': '35', 'lng': '38'}, 'mac': {'lat': '22.20056', 'lng': '113.54611'}, 'stp': {'lat': '1', 'lng': '7'}, 'maf': {'lat': '18.06667', 'lng': '-63.06667'}, 'kaz': {'lat': '48', 'lng': '68'}, 'cok': {'lat': '-21.24842', 'lng': '-159.78516'}, 'pyf': {'lat': '-15', 'lng': '-140'}, 'niu': {'lat': '-19.03333', 'lng': '-169.86667'}, 'ago': {'lat': '-12.5', 'lng': '18.5'}, 'egy': {'lat': '27', 'lng': '30'}, 'hnd': {'lat': '15', 'lng': '-86.5'}, 'dom': {'lat': '19', 'lng': '-70.66667'}, 'mrt': {'lat': '20', 'lng': '-12'}, 'blz': {'lat': '17.49952', 'lng': '-88.19756'}, 'mne': {'lat': '42.5', 'lng': '19.3'}, 'fsm': {'lat': '6.924', 'lng': '158.162'}, 'kna': {'lat': '17.33333', 'lng': '-62.75'}, 'gha': {'lat': '8.1', 'lng': '-1.2'}, 'cck': {'lat': '-12.1642', 'lng': '96.87332'}, 'ury': {'lat': '-33', 'lng': '-56'}, 'tha': {'lat': '15', 'lng': '100'}},
	fromAlpha3: function (alpha3) {
    	return [this.data[alpha3].lng, this.data[alpha3].lat];
	}
};

/**
 * Country name, alpha3, and id number from the ISO3166 standard
 */
var ISO3166 = {

	data: [{"country-code": "004", "name": "Afghanistan", "alpha-3": "AFG"}, {"country-code": "248", "name": "\u00c5land Islands", "alpha-3": "ALA"}, {"country-code": "008", "name": "Albania", "alpha-3": "ALB"}, {"country-code": "012", "name": "Algeria", "alpha-3": "DZA"}, {"country-code": "016", "name": "American Samoa", "alpha-3": "ASM"}, {"country-code": "020", "name": "Andorra", "alpha-3": "AND"}, {"country-code": "024", "name": "Angola", "alpha-3": "AGO"}, {"country-code": "660", "name": "Anguilla", "alpha-3": "AIA"}, {"country-code": "010", "name": "Antarctica", "alpha-3": "ATA"}, {"country-code": "028", "name": "Antigua and Barbuda", "alpha-3": "ATG"}, {"country-code": "032", "name": "Argentina", "alpha-3": "ARG"}, {"country-code": "051", "name": "Armenia", "alpha-3": "ARM"}, {"country-code": "533", "name": "Aruba", "alpha-3": "ABW"}, {"country-code": "036", "name": "Australia", "alpha-3": "AUS"}, {"country-code": "040", "name": "Austria", "alpha-3": "AUT"}, {"country-code": "031", "name": "Azerbaijan", "alpha-3": "AZE"}, {"country-code": "044", "name": "The Bahamas", "alpha-3": "BHS"}, {"country-code": "048", "name": "Bahrain", "alpha-3": "BHR"}, {"country-code": "050", "name": "Bangladesh", "alpha-3": "BGD"}, {"country-code": "052", "name": "Barbados", "alpha-3": "BRB"}, {"country-code": "112", "name": "Belarus", "alpha-3": "BLR"}, {"country-code": "056", "name": "Belgium", "alpha-3": "BEL"}, {"country-code": "084", "name": "Belize", "alpha-3": "BLZ"}, {"country-code": "204", "name": "Benin", "alpha-3": "BEN"}, {"country-code": "060", "name": "Bermuda", "alpha-3": "BMU"}, {"country-code": "064", "name": "Bhutan", "alpha-3": "BTN"}, {"country-code": "068", "name": "Bolivia", "alpha-3": "BOL"}, {"country-code": "535", "name": "Bonaire, Sint Eustatius and Saba", "alpha-3": "BES"}, {"country-code": "070", "name": "Bosnia and Herzegovina", "alpha-3": "BIH"}, {"country-code": "072", "name": "Botswana", "alpha-3": "BWA"}, {"country-code": "074", "name": "Bouvet Island", "alpha-3": "BVT"}, {"country-code": "076", "name": "Brazil", "alpha-3": "BRA"}, {"country-code": "086", "name": "British Indian Ocean Territory", "alpha-3": "IOT"}, {"country-code": "096", "name": "Brunei", "alpha-3": "BRN"}, {"country-code": "100", "name": "Bulgaria", "alpha-3": "BGR"}, {"country-code": "854", "name": "Burkina Faso", "alpha-3": "BFA"}, {"country-code": "108", "name": "Burundi", "alpha-3": "BDI"}, {"country-code": "116", "name": "Cambodia", "alpha-3": "KHM"}, {"country-code": "120", "name": "Cameroon", "alpha-3": "CMR"}, {"country-code": "124", "name": "Canada", "alpha-3": "CAN"}, {"country-code": "132", "name": "Cape Verde", "alpha-3": "CPV"}, {"country-code": "136", "name": "Cayman Islands", "alpha-3": "CYM"}, {"country-code": "140", "name": "Central African Republic", "alpha-3": "CAF"}, {"country-code": "148", "name": "Chad", "alpha-3": "TCD"}, {"country-code": "152", "name": "Chile", "alpha-3": "CHL"}, {"country-code": "156", "name": "China", "alpha-3": "CHN"}, {"country-code": "162", "name": "Christmas Island", "alpha-3": "CXR"}, {"country-code": "166", "name": "Cocos (Keeling) Islands", "alpha-3": "CCK"}, {"country-code": "170", "name": "Colombia", "alpha-3": "COL"}, {"country-code": "174", "name": "Comoros", "alpha-3": "COM"}, {"country-code": "178", "name": "Republic of the Congo", "alpha-3": "COG"}, {"country-code": "180", "name": "Democratic Republic of the Congo", "alpha-3": "COD"}, {"country-code": "184", "name": "Cook Islands", "alpha-3": "COK"}, {"country-code": "188", "name": "Costa Rica", "alpha-3": "CRI"}, {"country-code": "384", "name": "C\u00f4te d'Ivoire", "alpha-3": "CIV"}, {"country-code": "191", "name": "Croatia", "alpha-3": "HRV"}, {"country-code": "192", "name": "Cuba", "alpha-3": "CUB"}, {"country-code": "531", "name": "Cura\u00e7ao", "alpha-3": "CUW"}, {"country-code": "196", "name": "Cyprus", "alpha-3": "CYP"}, {"country-code": "203", "name": "Czech Republic", "alpha-3": "CZE"}, {"country-code": "208", "name": "Denmark", "alpha-3": "DNK"}, {"country-code": "262", "name": "Djibouti", "alpha-3": "DJI"}, {"country-code": "212", "name": "Dominica", "alpha-3": "DMA"}, {"country-code": "214", "name": "Dominican Republic", "alpha-3": "DOM"}, {"country-code": "218", "name": "Ecuador", "alpha-3": "ECU"}, {"country-code": "818", "name": "Egypt", "alpha-3": "EGY"}, {"country-code": "222", "name": "El Salvador", "alpha-3": "SLV"}, {"country-code": "226", "name": "Equatorial Guinea", "alpha-3": "GNQ"}, {"country-code": "232", "name": "Eritrea", "alpha-3": "ERI"}, {"country-code": "233", "name": "Estonia", "alpha-3": "EST"}, {"country-code": "231", "name": "Ethiopia", "alpha-3": "ETH"}, {"country-code": "238", "name": "Falkland Islands (Malvinas)", "alpha-3": "FLK"}, {"country-code": "234", "name": "Faroe Islands", "alpha-3": "FRO"}, {"country-code": "242", "name": "Fiji", "alpha-3": "FJI"}, {"country-code": "246", "name": "Finland", "alpha-3": "FIN"}, {"country-code": "250", "name": "France", "alpha-3": "FRA"}, {"country-code": "254", "name": "French Guiana", "alpha-3": "GUF"}, {"country-code": "258", "name": "French Polynesia", "alpha-3": "PYF"}, {"country-code": "260", "name": "French Southern Territories", "alpha-3": "ATF"}, {"country-code": "266", "name": "Gabon", "alpha-3": "GAB"}, {"country-code": "270", "name": "The Gambia", "alpha-3": "GMB"}, {"country-code": "268", "name": "Georgia", "alpha-3": "GEO"}, {"country-code": "276", "name": "Germany", "alpha-3": "DEU"}, {"country-code": "288", "name": "Ghana", "alpha-3": "GHA"}, {"country-code": "292", "name": "Gibraltar", "alpha-3": "GIB"}, {"country-code": "300", "name": "Greece", "alpha-3": "GRC"}, {"country-code": "304", "name": "Greenland", "alpha-3": "GRL"}, {"country-code": "308", "name": "Grenada", "alpha-3": "GRD"}, {"country-code": "312", "name": "Guadeloupe", "alpha-3": "GLP"}, {"country-code": "316", "name": "Guam", "alpha-3": "GUM"}, {"country-code": "320", "name": "Guatemala", "alpha-3": "GTM"}, {"country-code": "831", "name": "Guernsey", "alpha-3": "GGY"}, {"country-code": "324", "name": "Guinea", "alpha-3": "GIN"}, {"country-code": "624", "name": "Guinea-Bissau", "alpha-3": "GNB"}, {"country-code": "328", "name": "Guyana", "alpha-3": "GUY"}, {"country-code": "332", "name": "Haiti", "alpha-3": "HTI"}, {"country-code": "334", "name": "Heard Island and McDonald Islands", "alpha-3": "HMD"}, {"country-code": "336", "name": "Vatican City", "alpha-3": "VAT"}, {"country-code": "340", "name": "Honduras", "alpha-3": "HND"}, {"country-code": "344", "name": "Hong Kong", "alpha-3": "HKG"}, {"country-code": "348", "name": "Hungary", "alpha-3": "HUN"}, {"country-code": "352", "name": "Iceland", "alpha-3": "ISL"}, {"country-code": "356", "name": "India", "alpha-3": "IND"}, {"country-code": "360", "name": "Indonesia", "alpha-3": "IDN"}, {"country-code": "364", "name": "Iran", "alpha-3": "IRN"}, {"country-code": "368", "name": "Iraq", "alpha-3": "IRQ"}, {"country-code": "372", "name": "Ireland", "alpha-3": "IRL"}, {"country-code": "833", "name": "Isle of Man", "alpha-3": "IMN"}, {"country-code": "376", "name": "Israel", "alpha-3": "ISR"}, {"country-code": "380", "name": "Italy", "alpha-3": "ITA"}, {"country-code": "388", "name": "Jamaica", "alpha-3": "JAM"}, {"country-code": "392", "name": "Japan", "alpha-3": "JPN"}, {"country-code": "832", "name": "Jersey", "alpha-3": "JEY"}, {"country-code": "400", "name": "Jordan", "alpha-3": "JOR"}, {"country-code": "398", "name": "Kazakhstan", "alpha-3": "KAZ"}, {"country-code": "404", "name": "Kenya", "alpha-3": "KEN"}, {"country-code": "296", "name": "Kiribati", "alpha-3": "KIR"}, {"country-code": "408", "name": "North Korea", "alpha-3": "PRK"}, {"country-code": "410", "name": "South Korea", "alpha-3": "KOR"}, {"country-code": "414", "name": "Kuwait", "alpha-3": "KWT"}, {"country-code": "417", "name": "Kyrgyzstan", "alpha-3": "KGZ"}, {"country-code": "418", "name": "Laos", "alpha-3": "LAO"}, {"country-code": "428", "name": "Latvia", "alpha-3": "LVA"}, {"country-code": "422", "name": "Lebanon", "alpha-3": "LBN"}, {"country-code": "426", "name": "Lesotho", "alpha-3": "LSO"}, {"country-code": "430", "name": "Liberia", "alpha-3": "LBR"}, {"country-code": "434", "name": "Libya", "alpha-3": "LBY"}, {"country-code": "438", "name": "Liechtenstein", "alpha-3": "LIE"}, {"country-code": "440", "name": "Lithuania", "alpha-3": "LTU"}, {"country-code": "442", "name": "Luxembourg", "alpha-3": "LUX"}, {"country-code": "446", "name": "Macao", "alpha-3": "MAC"}, {"country-code": "807", "name": "Macedonia", "alpha-3": "MKD"}, {"country-code": "450", "name": "Madagascar", "alpha-3": "MDG"}, {"country-code": "454", "name": "Malawi", "alpha-3": "MWI"}, {"country-code": "458", "name": "Malaysia", "alpha-3": "MYS"}, {"country-code": "462", "name": "Maldives", "alpha-3": "MDV"}, {"country-code": "466", "name": "Mali", "alpha-3": "MLI"}, {"country-code": "470", "name": "Malta", "alpha-3": "MLT"}, {"country-code": "584", "name": "Marshall Islands", "alpha-3": "MHL"}, {"country-code": "474", "name": "Martinique", "alpha-3": "MTQ"}, {"country-code": "478", "name": "Mauritania", "alpha-3": "MRT"}, {"country-code": "480", "name": "Mauritius", "alpha-3": "MUS"}, {"country-code": "175", "name": "Mayotte", "alpha-3": "MYT"}, {"country-code": "484", "name": "Mexico", "alpha-3": "MEX"}, {"country-code": "583", "name": "Federated States of Micronesia", "alpha-3": "FSM"}, {"country-code": "498", "name": "Moldova", "alpha-3": "MDA"}, {"country-code": "492", "name": "Monaco", "alpha-3": "MCO"}, {"country-code": "496", "name": "Mongolia", "alpha-3": "MNG"}, {"country-code": "499", "name": "Montenegro", "alpha-3": "MNE"}, {"country-code": "500", "name": "Montserrat", "alpha-3": "MSR"}, {"country-code": "504", "name": "Morocco", "alpha-3": "MAR"}, {"country-code": "508", "name": "Mozambique", "alpha-3": "MOZ"}, {"country-code": "104", "name": "Burma", "alpha-3": "MMR"}, {"country-code": "516", "name": "Namibia", "alpha-3": "NAM"}, {"country-code": "520", "name": "Nauru", "alpha-3": "NRU"}, {"country-code": "524", "name": "Nepal", "alpha-3": "NPL"}, {"country-code": "528", "name": "Netherlands", "alpha-3": "NLD"}, {"country-code": "540", "name": "New Caledonia", "alpha-3": "NCL"}, {"country-code": "554", "name": "New Zealand", "alpha-3": "NZL"}, {"country-code": "558", "name": "Nicaragua", "alpha-3": "NIC"}, {"country-code": "562", "name": "Niger", "alpha-3": "NER"}, {"country-code": "566", "name": "Nigeria", "alpha-3": "NGA"}, {"country-code": "570", "name": "Niue", "alpha-3": "NIU"}, {"country-code": "574", "name": "Norfolk Island", "alpha-3": "NFK"}, {"country-code": "580", "name": "Northern Mariana Islands", "alpha-3": "MNP"}, {"country-code": "578", "name": "Norway", "alpha-3": "NOR"}, {"country-code": "512", "name": "Oman", "alpha-3": "OMN"}, {"country-code": "586", "name": "Pakistan", "alpha-3": "PAK"}, {"country-code": "585", "name": "Palau", "alpha-3": "PLW"}, {"country-code": "275", "name": "Palestinian Territory, Occupied", "alpha-3": "PSE"}, {"country-code": "591", "name": "Panama", "alpha-3": "PAN"}, {"country-code": "598", "name": "Papua New Guinea", "alpha-3": "PNG"}, {"country-code": "600", "name": "Paraguay", "alpha-3": "PRY"}, {"country-code": "604", "name": "Peru", "alpha-3": "PER"}, {"country-code": "608", "name": "Philippines", "alpha-3": "PHL"}, {"country-code": "612", "name": "Pitcairn", "alpha-3": "PCN"}, {"country-code": "616", "name": "Poland", "alpha-3": "POL"}, {"country-code": "620", "name": "Portugal", "alpha-3": "PRT"}, {"country-code": "630", "name": "Puerto Rico", "alpha-3": "PRI"}, {"country-code": "634", "name": "Qatar", "alpha-3": "QAT"}, {"country-code": "638", "name": "R\u00e9union", "alpha-3": "REU"}, {"country-code": "642", "name": "Romania", "alpha-3": "ROU"}, {"country-code": "643", "name": "Russia", "alpha-3": "RUS"}, {"country-code": "646", "name": "Rwanda", "alpha-3": "RWA"}, {"country-code": "652", "name": "Saint Barth\u00e9lemy", "alpha-3": "BLM"}, {"country-code": "654", "name": "Saint Helena, Ascension and Tristan da Cunha", "alpha-3": "SHN"}, {"country-code": "659", "name": "Saint Kitts and Nevis", "alpha-3": "KNA"}, {"country-code": "662", "name": "Saint Lucia", "alpha-3": "LCA"}, {"country-code": "663", "name": "Saint Martin (French part)", "alpha-3": "MAF"}, {"country-code": "666", "name": "Saint Pierre and Miquelon", "alpha-3": "SPM"}, {"country-code": "670", "name": "Saint Vincent and the Grenadines", "alpha-3": "VCT"}, {"country-code": "882", "name": "Samoa", "alpha-3": "WSM"}, {"country-code": "674", "name": "San Marino", "alpha-3": "SMR"}, {"country-code": "678", "name": "S\u00e3o Tom\u00e9 and Pr\u00edncipe", "alpha-3": "STP"}, {"country-code": "682", "name": "Saudi Arabia", "alpha-3": "SAU"}, {"country-code": "686", "name": "Senegal", "alpha-3": "SEN"}, {"country-code": "688", "name": "Serbia", "alpha-3": "SRB"}, {"country-code": "690", "name": "Seychelles", "alpha-3": "SYC"}, {"country-code": "694", "name": "Sierra Leone", "alpha-3": "SLE"}, {"country-code": "702", "name": "Singapore", "alpha-3": "SGP"}, {"country-code": "534", "name": "Sint Maarten (Dutch part)", "alpha-3": "SXM"}, {"country-code": "703", "name": "Slovakia", "alpha-3": "SVK"}, {"country-code": "705", "name": "Slovenia", "alpha-3": "SVN"}, {"country-code": "090", "name": "Solomon Islands", "alpha-3": "SLB"}, {"country-code": "706", "name": "Somalia", "alpha-3": "SOM"}, {"country-code": "710", "name": "South Africa", "alpha-3": "ZAF"}, {"country-code": "239", "name": "South Georgia and the South Sandwich Islands", "alpha-3": "SGS"}, {"country-code": "728", "name": "South Sudan", "alpha-3": "SSD"}, {"country-code": "724", "name": "Spain", "alpha-3": "ESP"}, {"country-code": "144", "name": "Sri Lanka", "alpha-3": "LKA"}, {"country-code": "729", "name": "Sudan", "alpha-3": "SDN"}, {"country-code": "740", "name": "Suriname", "alpha-3": "SUR"}, {"country-code": "744", "name": "Svalbard and Jan Mayen", "alpha-3": "SJM"}, {"country-code": "748", "name": "Swaziland", "alpha-3": "SWZ"}, {"country-code": "752", "name": "Sweden", "alpha-3": "SWE"}, {"country-code": "756", "name": "Switzerland", "alpha-3": "CHE"}, {"country-code": "760", "name": "Syria", "alpha-3": "SYR"}, {"country-code": "158", "name": "Taiwan", "alpha-3": "TWN"}, {"country-code": "762", "name": "Tajikistan", "alpha-3": "TJK"}, {"country-code": "834", "name": "Tanzania", "alpha-3": "TZA"}, {"country-code": "764", "name": "Thailand", "alpha-3": "THA"}, {"country-code": "626", "name": "East Timor", "alpha-3": "TLS"}, {"country-code": "768", "name": "Togo", "alpha-3": "TGO"}, {"country-code": "772", "name": "Tokelau", "alpha-3": "TKL"}, {"country-code": "776", "name": "Tonga", "alpha-3": "TON"}, {"country-code": "780", "name": "Trinidad and Tobago", "alpha-3": "TTO"}, {"country-code": "788", "name": "Tunisia", "alpha-3": "TUN"}, {"country-code": "792", "name": "Turkey", "alpha-3": "TUR"}, {"country-code": "795", "name": "Turkmenistan", "alpha-3": "TKM"}, {"country-code": "796", "name": "Turks and Caicos Islands", "alpha-3": "TCA"}, {"country-code": "798", "name": "Tuvalu", "alpha-3": "TUV"}, {"country-code": "800", "name": "Uganda", "alpha-3": "UGA"}, {"country-code": "804", "name": "Ukraine", "alpha-3": "UKR"}, {"country-code": "784", "name": "United Arab Emirates", "alpha-3": "ARE"}, {"country-code": "826", "name": "United Kingdom", "alpha-3": "GBR"}, {"country-code": "840", "name": "United States", "alpha-3": "USA"}, {"country-code": "581", "name": "United States Minor Outlying Islands", "alpha-3": "UMI"}, {"country-code": "858", "name": "Uruguay", "alpha-3": "URY"}, {"country-code": "860", "name": "Uzbekistan", "alpha-3": "UZB"}, {"country-code": "548", "name": "Vanuatu", "alpha-3": "VUT"}, {"country-code": "862", "name": "Venezuela", "alpha-3": "VEN"}, {"country-code": "704", "name": "Vietnam", "alpha-3": "VNM"}, {"country-code": "092", "name": "Virgin Islands, British", "alpha-3": "VGB"}, {"country-code": "850", "name": "Virgin Islands, U.S.", "alpha-3": "VIR"}, {"country-code": "876", "name": "Wallis and Futuna", "alpha-3": "WLF"}, {"country-code": "732", "name": "Western Sahara", "alpha-3": "ESH"}, {"country-code": "887", "name": "Yemen", "alpha-3": "YEM"}, {"country-code": "894", "name": "Zambia", "alpha-3": "ZMB"}, {"country-code": "716", "name": "Zimbabwe", "alpha-3": "ZWE"}],
	
	numericLookup: null,

	alpha3Lookup: null,

	initialize: function(url){
		ISO3166.numericLookup = {};
		ISO3166.alpha3Lookup = {};
		$.each(ISO3166.data, function(key, val) {
	    	ISO3166.numericLookup[parseInt(val['country-code'])] = val;
	    	ISO3166.alpha3Lookup[val['alpha-3'].toLowerCase()] = val;
		});
	},

	getInfoFromId: function(countryId){
		return ISO3166.numericLookup[parseInt(countryId)];
	},

	getAlpha3FromId: function(countryId){
		var countryInfo = ISO3166.getInfoFromId(countryId);
		return countryInfo['alpha-3'].toLowerCase();
	},

	getNameFromId: function(countryId){
		var countryInfo = ISO3166.getInfoFromId(countryId);
		return countryInfo['name'];
	},

	getNameFromAlpha3: function(countryAlpha3){
		var countryInfo = ISO3166.getInfoFromAlpha3(countryAlpha3);
		return countryInfo['name'];
	},

	getInfoFromAlpha3: function(countryAlpha3){
		if(!(countryAlpha3 in ISO3166.alpha3Lookup)){
			console.log("unable to find country named "+countryAlpha3);
		}
		return ISO3166.alpha3Lookup[countryAlpha3];
	},

	getIdFromAlpha3: function(countryAlpha3){
		var countryInfo = ISO3166.getInfoFromAlpha3(countryAlpha3);
		return parseInt(countryInfo['country-code']);
	}

};