# eAIP Parser
The parser scans the eAIP portal and exports the information to json files.  
[eAIP](https://aim-india.aai.aero/eaip) is the platform that [AAI](https://www.aai.aero) manages for public information about aeronautical infrastructure in India.  
The information is published on their web page in html tables. The parser scans the portal and extracts relevant information. The parser converts the coordinates from the eAIP portal to decimal geographic coordinates.  
It is a nodejs project with an open license.  
Published information includes important elements like:
- Airports
- Airspaces
- Communication Frequencies
- Runway information
- Coordinates
- more  

**[SAMPLES](./samples.md)**

This repo contains the parser and some maps plotted created with the parsed data.

# eAIP Maps
This series of maps plots important elements of India's aeronautical infrastructure. It covers all the civil airports and presents information about their name, elevation, ICAO codes, radio frequencies and more. These maps are useful for pilots to plan their VFR flights where they can plan the course of the flight and calculate headings and checkpoints. The key map (1:1000000) shows the 4 flight information regions (FIR) in India along with breakup for the detailed regional maps (1:500000) which shows all the features at an appropriate scale for flight planning.  
The geographic boundaries have been sources from Bhuvan webportal and the information about aerodromes and associated information has been sources from Aeronautical Information Package (eAIP) - the official Indian aviation regulatory body's data platform.  
An additional layer shows the positions of all the radio stations which is useful for both VFR/IFR flying.  
It forms a part of the project as an automated system to update maps with latest publicly posted information. More information than what is shown in the map is parsed. In future development the additional information will exposed via a web map which allows creating an easier interface for representing the data.

# How to use

Running the commands below will download files from the eaip website which may take time depending on your internet connection.  
Use the `config.js` file to include/exclude airports for detailed parsing.  
It currently ignores the certificate verification. If you know a proper fix for that please let me know.  

- Clone the repo `git clone https://github.com/amitlzkpa/eaip-parser.git`
- Navigate into project directory and run `npm i`
- Run `npm start` to query and parse
- Check `/exported-data` folder within project for all data

Check out the samples to understand what the exported files are  
[SAMPLES](./samples.md)

Tested with nodejs(14.5.0) on a Windows 10 machine.

![Exported airport data viewed on geojson.io](/assets/scrnsht_geojsonio.png)  
Sample of exported airport data viewed on [geojson.io](https://geojson.io)  
