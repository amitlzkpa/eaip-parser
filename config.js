

// filepath of location to store downloaded and parsed files
let EXPORT_PATH = './exported-data';

// switch to toggle downloading source html files
let DOWNLOAD_HTML = true;
// DOWNLOAD_HTML = false; // uncomment to avoid redownloading files if already downloaded

// switch to toggle exporting geojson files 
let EXPORT_GEOJSONS = true;
// EXPORT_GEOJSONS = false;

// switch to toggle console logging
let LOGGING = true;
// LOGGING = false;


// list of aerodrome codes to fetch detailed information for
let AERODROME_CODES = [];

// // usual test set
AERODROME_CODES.push('VAAH'); // Ahmedabad
AERODROME_CODES.push('VABB'); // Mumbai
AERODROME_CODES.push('VAJJ'); // Juhu Mumbai
AERODROME_CODES.push('VECC'); // Kolkata
AERODROME_CODES.push('VOHY'); // Hyderabad
AERODROME_CODES.push('VIAR'); // Amritsar
AERODROME_CODES.push('VOBL'); // Bengaluru Devanahalli
AERODROME_CODES.push('VOCL'); // Calicut
AERODROME_CODES.push('VOMM'); // Chennai
AERODROME_CODES.push('VECO'); // Cooch Behar
AERODROME_CODES.push('VISM'); // Shimla
AERODROME_CODES.push('VEGT'); // Guwahati
AERODROME_CODES.push('VASU'); // Surat
AERODROME_CODES.push('VOTV'); // Thiruvanthapuram
AERODROME_CODES.push('VEBN'); // Varanasi

// // rest of all
AERODROME_CODES.push('VEIM'); // Imphal
AERODROME_CODES.push('VAJB'); // Jabalpur
AERODROME_CODES.push('VEPT'); // Patna
AERODROME_CODES.push('VIJP'); // Jaipur
AERODROME_CODES.push('VAJL'); // Jalgaon
AERODROME_CODES.push('VEJH'); // Jharsuguda
AERODROME_CODES.push('VOJV'); // Vidyanagar
AERODROME_CODES.push('VOCP'); // Kadapa
AERODROME_CODES.push('VAKE'); // Kandla
AERODROME_CODES.push('VIGG'); // Kangra Gaggal
AERODROME_CODES.push('VOKN'); // Kannur
AERODROME_CODES.push('VAKS'); // Keshod
AERODROME_CODES.push('VEKO'); // Khajuraho
AERODROME_CODES.push('VIKG'); // Kishangarh
AERODROME_CODES.push('VIBR'); // Kullu Manali Bhuntar
AERODROME_CODES.push('VELP'); // Lengpui Aizwal
AERODROME_CODES.push('VELR'); // Lilabari North Lakhimpur
AERODROME_CODES.push('VILD'); // Ludhiana
AERODROME_CODES.push('VOMD'); // Madurai
AERODROME_CODES.push('VOML'); // Mangalore
AERODROME_CODES.push('VOMY'); // Mysore
AERODROME_CODES.push('VAOZ'); // Ozar
AERODROME_CODES.push('VEPY'); // Gangtok
AERODROME_CODES.push('VIPT'); // Pantnagar
AERODROME_CODES.push('VAPR'); // Porbandar
AERODROME_CODES.push('VOPC'); // Pondicherry
AERODROME_CODES.push('VABP'); // Bhopal Bairagarh
AERODROME_CODES.push('VORY'); // Rajahmundry
AERODROME_CODES.push('VOHS'); // Shamshabad Hyderabad
AERODROME_CODES.push('VARK'); // Rajkot
AERODROME_CODES.push('VIDD'); // Safdarjung Delhi
AERODROME_CODES.push('VOSM'); // Salem
AERODROME_CODES.push('VOPN'); // Sri Sathya Sai
AERODROME_CODES.push('VERP'); // Raipur
AERODROME_CODES.push('VETJ'); // Tezu
AERODROME_CODES.push('VOTR'); // Tiruchirappalli
AERODROME_CODES.push('VOTP'); // Tirupati
AERODROME_CODES.push('VOTK'); // Tuticorin
AERODROME_CODES.push('VAUD'); // Udaipur
AERODROME_CODES.push('VABO'); // Vadodara
AERODROME_CODES.push('VOBZ'); // Vijayawada
AERODROME_CODES.push('VEAT'); // Agartala
AERODROME_CODES.push('VOAT'); // Agatti
AERODROME_CODES.push('VAAU'); // Aurangabad
AERODROME_CODES.push('VEBI'); // Barapani Shillong
AERODROME_CODES.push('VOBM'); // Belgaum
AERODROME_CODES.push('VABV'); // Bhavnagar
AERODROME_CODES.push('VEBS'); // Bhubaneswar
AERODROME_CODES.push('VERC'); // Ranchi
AERODROME_CODES.push('VILK'); // Lucknow
AERODROME_CODES.push('VOCB'); // Coimbatore
AERODROME_CODES.push('VIDN'); // Dehradun
AERODROME_CODES.push('VAID'); // Indore
AERODROME_CODES.push('VEMN'); // Dibrugarh Mohanbari
AERODROME_CODES.push('VEMR'); // Dimapur
AERODROME_CODES.push('VANP'); // Nagpur
AERODROME_CODES.push('VEDG'); // Durgapur
AERODROME_CODES.push('VEGY'); // Gaya
AERODROME_CODES.push('VOBG'); // Bengaluru
AERODROME_CODES.push('VOHB'); // Hubli

// //  special cases
// AERODROME_CODES.push('VIDP'); //incr idx nos for tables after meteorologicalInfo

// AERODROME_CODES.push('VASD'); // Shirdi [weirdLayout (full page)]
// AERODROME_CODES.push('VAKP'); // Kolhapur [weirdLayout (full page)]
// AERODROME_CODES.push('VOCI'); // Cochin [weirdLayout (radio freqs)]

// // not civil
// AERODROME_CODES.push('VAPO'); // Pune IAF [404]





module.exports = {
  AERODROME_CODES,
  EXPORT_PATH,
  DOWNLOAD_HTML,
  EXPORT_GEOJSONS,
  LOGGING
}
