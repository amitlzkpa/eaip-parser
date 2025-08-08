const fs = require('fs');
const geolib = require('geolib');

const config = require('./config');


// -----------------------------------------------------
// -----------------------------------------------------


let HTML_FILES_PATH = `${config.EXPORT_PATH}/html`;
let JSON_FILES_PATH = `${config.EXPORT_PATH}/json`;
let GEOJSON_FILES_PATH = `${config.EXPORT_PATH}/geojson`;


function setupFolders() {
    if (!fs.existsSync(config.EXPORT_PATH)) fs.mkdirSync(config.EXPORT_PATH);
    if (!fs.existsSync(HTML_FILES_PATH)) fs.mkdirSync(HTML_FILES_PATH);
    if (!fs.existsSync(JSON_FILES_PATH)) fs.mkdirSync(JSON_FILES_PATH);
    if (!fs.existsSync(GEOJSON_FILES_PATH)) fs.mkdirSync(GEOJSON_FILES_PATH);
}


// -----------------------------------------------------
// -----------------------------------------------------


function parseAISCoords(aisCoords) {
    // Return empty array if input is invalid
    if (!aisCoords || typeof aisCoords !== 'string' || aisCoords.includes('undefined')) {
        return [];
    }

    try {
        let c = aisCoords.split(' ').filter(l => !!l.trim());
        
        // Ensure we have both latitude and longitude components
        if (c.length !== 2) {
            return [];
        }

        // Validate coordinate string format before parsing
        if (!c[0].match(/^\d{6}[NS]$/) || !c[1].match(/^\d{7}[EW]$/)) {
            return [];
        }

        let fLat = `${parseInt(c[0].slice(0, 2))}° ${parseInt(c[0].slice(2, 4))}' ${parseInt(c[0].slice(4, 6))}" ${c[0].slice(-1)}`;
        let fLon = `${parseInt(c[1].slice(0, 3))}° ${parseInt(c[1].slice(3, 5))}' ${parseInt(c[1].slice(5, 7))}" ${c[1].slice(-1)}`;
        
        return [geolib.sexagesimalToDecimal(fLon), geolib.sexagesimalToDecimal(fLat)];
    } catch (err) {
        console.log(`Error parsing coordinates: ${aisCoords}`, err);
        return [];
    }
}


function arrayedParaLines(pLines) {
    return pLines.split(/\n+/g).filter(l => !!l.trim());
}


function log(msg) {
    if (config.LOGGING) console.log(msg);
}


// -----------------------------------------------------
// -----------------------------------------------------


module.exports = {
    HTML_FILES_PATH,
    JSON_FILES_PATH,
    GEOJSON_FILES_PATH,
    setupFolders,
    parseAISCoords,
    arrayedParaLines,
    log,
};