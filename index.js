const fs = require('fs');
const csvtojson = require('csvtojson');
const changeCase = require('change-case');

const aerodrome = require('./aerodrome');
const vors = require('./vors');


// -----------------------------------------------------
// -----------------------------------------------------


let acds = [];


// // usual test set
acds.push('VAAH');
acds.push('VABB');
acds.push('VAJJ');
acds.push('VECC');
acds.push('VOHY');
acds.push('VIAR');
acds.push('VOBL');
acds.push('VOCL');
acds.push('VOMM');
acds.push('VECO');
acds.push('VISM');
acds.push('VEGT');
acds.push('VASU');
acds.push('VOTV');
acds.push('VEBN');

// // rest of all
acds.push('VEIM');
acds.push('VAJB');
acds.push('VEPT');
acds.push('VIJP');
acds.push('VAJL');
acds.push('VEJH');
acds.push('VOJV');
acds.push('VOCP');
acds.push('VAKE');
acds.push('VIGG');
acds.push('VOKN');
acds.push('VAKS');
acds.push('VEKO');
acds.push('VIKG');
acds.push('VIBR');
acds.push('VELP');
acds.push('VELR');
acds.push('VILD');
acds.push('VOMD');
acds.push('VOML');
acds.push('VOMY');
acds.push('VAOZ');
acds.push('VEPY');
acds.push('VIPT');
acds.push('VAPR');
acds.push('VOPC');
acds.push('VABP');
acds.push('VORY');
acds.push('VOHS');
acds.push('VARK');
acds.push('VIDD');
acds.push('VOSM');
acds.push('VOPN');
acds.push('VERP');
acds.push('VETJ');
acds.push('VOTR');
acds.push('VOTP');
acds.push('VOTK');
acds.push('VAUD');
acds.push('VABO');
acds.push('VOBZ');
acds.push('VEAT');
acds.push('VOAT');
acds.push('VAAU');
acds.push('VEBI');
acds.push('VOBM');
acds.push('VABV');
acds.push('VEBS');
acds.push('VERC');
acds.push('VILK');
acds.push('VOCB');
acds.push('VIDN');
acds.push('VAID');
acds.push('VEMN');
acds.push('VEMR');
acds.push('VANP');
acds.push('VEDG');
acds.push('VEGY');
acds.push('VOBG');
acds.push('VOHB');

// //  special cases
// acds.push('VIDP'); //incr idx nos for tables after meteorologicalInfo

// acds.push('VASD'); //weirdLayout (full page) - shirdi
// acds.push('VAKP'); //weirdLayout (full page) - kolhapur
// acds.push('VOCI'); //weirdLayout (radio freqs) - coching

// // not civil
// acds.push('VAPO'); //404 - pune iaf airport


// -----------------------------------------------------
// -----------------------------------------------------


async function main() {
	// await aerodrome.main(acds);
	await vors.main();
}

main();