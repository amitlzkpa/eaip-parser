const geolib = require('geolib');



// -----------------------------------------------------
// -----------------------------------------------------


function parseAISCoords(aisCoords) {
	if (aisCoords.includes('undefined')) return [];
	let c = aisCoords.split(' ').filter(l => !!l.trim());
	let fLat = `${parseInt(c[0].slice(0, 2))}° ${parseInt(c[0].slice(2, 4))}' ${parseInt(c[0].slice(4, 6))}" ${c[0].slice(-1)}`;
	let fLon = `${parseInt(c[1].slice(0, 3))}° ${parseInt(c[1].slice(3, 5))}' ${parseInt(c[1].slice(5, 7))}" ${c[1].slice(-1)}`;
	let ret = [geolib.sexagesimalToDecimal(fLon), geolib.sexagesimalToDecimal(fLat)];
	return ret;
}


function arrayedParaLines(pLines) {
	return pLines.split(/\n+/g).filter(l => !!l.trim());
}


// -----------------------------------------------------
// -----------------------------------------------------


module.exports = {
	parseAISCoords,
	arrayedParaLines
};