const config = require('./config');
const utils = require('./utils');
const aerodrome = require('./aerodrome');


// -----------------------------------------------------
// -----------------------------------------------------


let acds = config.AERODROME_CODES;


// -----------------------------------------------------
// -----------------------------------------------------


async function main() {
	utils.setupFolders();
	await aerodrome.main(acds);
}

main();