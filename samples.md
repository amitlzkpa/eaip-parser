# Samples

<details>
<summary>
  ## Aerodromes
</summary>
  Path: `/json/aerodrome-index.json`
  ```
  "VEAT": {
    "name": "AGARTALA AIRPORT",
    "code": "VEAT",
    "intlDom": "INTL",
    "allowedFlightRules": "IFR/VFR",
    "allowedFlightPlans": "S - NS - P"
  },
  ```
</details>

## Airports Json
Path: `/airports.json`
```
"VEAT": {
  "code": "VEAT",
  "name": "AGARTALA AIRPORT",
  "shortName": "Agartala",
  "metar": {
    "name": "Agartala",
    "code": "VEAT",
    "reportingFrequency": "Hourly + Half hourly during HO",
    "reportTypes": "METAR/TREND",
    "observingSystem": [
      "DIWE at ATC TOWER"
    ],
    "hoursOfOperation": "HJ",
    "climatologyInformation": "NIL"
  },
  "traffic": {
    "vfr": true,
    "ifr": true,
    "international": true,
    "domestic": false,
    "scheduled": true,
    "nonScheduled": true,
    "private": true
  }
},
```

## Airports Geodata geojson
Path: `/json/airports-geodata.geojson`
```
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "code": "VAAH",
        "name": "AHMEDABAD INTERNATIONAL AIRPORT",
        "shortName": "Ahmedabad",
        "vfr": true,
        "ifr": true,
        "international": true,
        "domestic": false,
        "scheduled": true,
        "nonScheduled": true,
        "private": true,
        "metarReportTypes": "METAR/TREND",
        "elevation": "189 ft",
        "address": "Airport Director Airports Authority of India, Sardar Vallabh Bhai Patel International Airport, Ahmedabad-380003,",
        "phone": "+91-79-22869211,,+91-9825024022,,+91-79-22850333,(R)",
        "email": "apdahm@aai.aero",
        "runways": "23,05",
        "airspaceClassification": "D",
        "radioFrequencies": "APP:119.800 MHZ\nTWR:118.100 MHZ\nTWR:119.600 MHZ\nATIS:126.800 MHZ\nACC:119.350 MHZ\nRADAR:123.750 MHZ\nRADAR:134.200 MHZ\nALRS:121.500 MHZ",
        "atisFreq": "126.800 MHZ",
        "towerFreq": "118.100 MHZ"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          72.62638888888888,
          23.07111111111111
        ]
      }
    }
  ]
}
```

## Licensing Status
Path: `/json/licensing-status.json`
```
"VEAT": {
  "name": "Agartala Airport",
  "code": "VEAT"
},
```

## MET Stations
Path: `/json/met-stations.json`
```
"VEAT": {
  "name": "Agartala",
  "code": "VEAT",
  "reportingFrequency": "Hourly + Half hourly during HO",
  "reportTypes": "METAR/TREND",
  "observingSystem": [
    "DIWE at ATC TOWER"
  ],
  "hoursOfOperation": "HJ",
  "climatologyInformation": "NIL"
},
```

## Night Aerodromes
Path: `/json/night-aerodromes.json`
```
"VAAH": {
  "name": "AHMEDABAD INTERNATIONAL AIRPORT \n\n SARDAR VALLABH BHAI PATEL INTERNATIONAL AIRPORT, AHMEDABAD",
  "code": "VAAH"
},
```

## Radio Geodata
Path: `/json/radios-geodata.geojson`
```
{
  "type": "Feature",
  "properties": {
    "name": "AGATTI DME",
    "code": "AAT",
    "channel": "106X",
    "elevation": "43.00  FT"
  },
  "geometry": {
    "type": "Point",
    "coordinates": [
      72.17916666666667,
      10.828055555555554
    ]
  }
},
```

## Radios Stations
Path: `/json/radios-stations.json`
```
"AAT": {
  "name": "AGATTI DME",
  "code": "AAT",
  "channel": "106X",
  "location": [
    72.17916666666667,
    10.828055555555554
  ],
  "elevation": "43.00  FT"
},
```


## Detailed Aerodrome Data
Path: `/json/<AIRPORT_CODE>.json`
```
{
  "code": "VAAH",
  "name": "AHMEDABAD INTERNATIONAL AIRPORT",
  "shortName": "Ahmedabad",
  "metar": {
    "name": "Ahmedabad",
    "code": "VAAH",
    "reportingFrequency": "Half hourly",
    "reportTypes": "METAR/TREND",
    "observingSystem": [
      "CWIS & Transmissometer at RWY 23;",
      "additional DIWE near ATC TOWER"
    ],
    "hoursOfOperation": "H24",
    "climatologyInformation": "Available"
  },
  "traffic": {
    "vfr": true,
    "ifr": true,
    "international": true,
    "domestic": false,
    "scheduled": true,
    "nonScheduled": true,
    "private": true
  },
  "location": [
    72.62638888888888,
    23.07111111111111
  ],
  "airportToCityRelativeLocation": "045 DEG/8KM from Ahmedabad Railway station",
  "elevation": "189 ft",
  "referenceTemperature": "42.0 DEG C",
  "address": "Airport Director Airports Authority of India, Sardar Vallabh Bhai Patel International Airport, Ahmedabad-380003,",
  "phone": [
    "+91-79-22869211,",
    "+91-9825024022,",
    "+91-79-22850333",
    "(R)"
  ],
  "email": [
    "apdahm@aai.aero"
  ],
  "remarks": [
    "NIL",
    "Elevation in EGM08"
  ],
  "operatingHours": {
    "Aerodrome Operator": [
      "MON-FRI 0400-1230 UTC (0930-1800 IST)",
      "SAT,SUN+ HOL : NIL"
    ],
    "Custom and immigration": [
      "H24"
    ],
    "Health and sanitation": [
      "H24 Doctor Available on call basis & First Aid Room Available with Apollo hospital in Terminal -1 and 2."
    ],
    "AIS briefing office": [
      "H24"
    ],
    "ATS reporting office (ARO)": [
      "H24 (Combined with ARO)"
    ],
    "MET Briefing office": [
      "H24"
    ],
    "Air Traffic Service": [
      "H24"
    ],
    "Fuelling": [
      "H24"
    ],
    "Handling": [
      "PN With local Airlines Operators."
    ],
    "Security": [
      "H24"
    ],
    "De-icing": [
      "NIL"
    ],
    "Remarks": [
      "The approved hourly RWY traffic handling capacity:",
      "Maximum number of arrival and departures -20",
      "Maximum number of arrivals only -15",
      "Maximum number of departures only -12"
    ]
  },
  "servicesAndFacilities": {
    "Cargo-handling facilities": [
      "Upto B747-Manual by arrangement with local Airlines"
    ],
    "Fuel and Oil types": [
      "ATF, Jet A1, AVGAS 100LL",
      "NIL"
    ],
    "Fuelling facilities and capacity": [
      "IOC: ",
      "Capacity: 2 Tanks of 200KL each and 2 tanks of 280 KL each (Total",
      "capacity 960KL) Vehicles:40KL (Three), 27KL (One), 16KL (Three), 11KL (One) Phone: +91-79-22869220",
      "Reliance Aviation Fuel System:",
      "Capacity: 2 tanks of 250KL each and 1 tank of 400KL (Total capacity 900KL Vehicles: 11KL (One), 16KL (Two) 27KL (Two). 35KL (One)",
      "(Total No. 6 Vehicles) Phone: +91-79-65250055",
      "BPCL: ",
      "Capacity: 2 Tanks of 250KL each and 1 tank of 450KL Delivery and Vehicles: 1 vehicle of 45KL and 2 vehicles of 24KL capacity &2 vehicles of 15KL. Phone: +91-79-22865442",
      "HPCL: ",
      "Storage Capacity: NIL, Delivery and Vehicles: 1 vehicle of 27KL and other",
      "vehicle of 16KL capacity. Phone: +91-9428331968"
    ],
    "De-icing facilities": [
      "NIL"
    ],
    "Hangar space for visiting aircraft": [
      "NIL"
    ],
    "Repair facilities for visiting aircraft": [
      "Limited, prior arrangement with local airlines required"
    ]
  },
  "passengerFacilities": {
    "Hotel(s) at or in the vicinity of aerodrome": [
      "In the city & near the AD."
    ],
    "Restaurant(s) at or in the vicinity of aerodrome": [
      "At AD and in the city"
    ],
    "Transportation possibilities": [
      "Taxi, Car hire from AD, train , buses from the city"
    ],
    "Medical Facilities": [
      "First aid at AD. Doctor on call"
    ],
    "Bank and post office at or in the vicinity of\n\naerodrome": [
      "Banks: Limited hours",
      "Post office: Limited hours"
    ],
    "Tourist office": [
      "During flight timings at domestic terminal"
    ]
  },
  "fireFacilities": {
    "Aerodrome category for fire fighting": [
      "Within ATS HR: CAT-9"
    ],
    "Rescue equipment": [
      "AVBL as per category."
    ],
    "Capability for removal of disabled aircraft": [
      "As per removal of Disabled acft. Plan"
    ]
  },
  "obstacles": {
    "WALLFENCE": [
      {
        "runwaysAffected": [
          "23/TKOF",
          "05/APCH"
        ],
        "location": [
          72.62027777777777,
          23.066111111111113
        ],
        "elevation": "189 ft",
        "remarks": [
          "AIRPORT BOUNDARY",
          "WALL WITH FENCING",
          "ON TOP"
        ]
      }
    ],
    "TREE": [
      {
        "runwaysAffected": [
          "23/TKOF",
          "05/APCH"
        ],
        "location": [
          72.61972222222222,
          23.065555555555555
        ],
        "elevation": "231 ft",
        "remarks": [
          "GROUP OF TREES"
        ]
      },
      {
        "runwaysAffected": [
          "23/TKOF",
          "05/APCH"
        ],
        "location": [
          72.62055555555555,
          23.0625
        ],
        "elevation": "215 ft",
        "remarks": [
          "GROUP OF TREES"
        ]
      },
      {
        "runwaysAffected": [
          "23/TKOF",
          "05/APCH"
        ],
        "location": [
          72.61999999999999,
          23.0625
        ],
        "elevation": "219 ft",
        "remarks": [
          "GROUP OF TREE"
        ]
      },
      {
        "runwaysAffected": [
          "23/TKOF",
          "05/APCH"
        ],
        "location": [
          72.61833333333333,
          23.063055555555557
        ],
        "elevation": "215 ft",
        "remarks": [
          "TREE"
        ]
      },
      {
        "runwaysAffected": [
          "23/TKOF",
          "05/APCH"
        ],
        "location": [
          72.61916666666666,
          23.06138888888889
        ],
        "elevation": "223 ft",
        "remarks": [
          "GROUP OF TREES"
        ]
      },
      {
        "runwaysAffected": [
          "23/TKOF",
          "05/APCH"
        ],
        "location": [
          72.61722222222221,
          23.063333333333333
        ],
        "elevation": "229 ft",
        "remarks": [
          "GROUP OF TREES"
        ]
      },
      {
        "runwaysAffected": [
          "23/TKOF",
          "05/APCH"
        ],
        "location": [
          72.61638888888888,
          23.063055555555557
        ],
        "elevation": "227 ft",
        "remarks": [
          "GROUP OF TREES"
        ]
      },
      {
        "runwaysAffected": [
          "23/TKOF",
          "05/APCH"
        ],
        "location": [
          72.61611111111111,
          23.06277777777778
        ],
        "elevation": "239 ft",
        "remarks": [
          "GROUP OF TREES"
        ]
      },
      {
        "runwaysAffected": [
          "23/TKOF",
          "05/APCH"
        ],
        "location": [
          72.61833333333333,
          23.06138888888889
        ],
        "elevation": "220 ft",
        "remarks": [
          "TREE"
        ]
      },
      {
        "runwaysAffected": [
          "23/TKOF",
          "05/APCH"
        ],
        "location": [
          72.61527777777778,
          23.06222222222222
        ],
        "elevation": "249 ft",
        "remarks": [
          "GROUP OF TREES"
        ]
      },
      {
        "runwaysAffected": [
          "23/TKOF",
          "05/APCH"
        ],
        "location": [
          72.615,
          23.060555555555556
        ],
        "elevation": "252 ft",
        "remarks": [
          "GROUP OF TREES"
        ]
      },
      {
        "runwaysAffected": [
          "23/TKOF",
          "05/APCH"
        ],
        "location": [
          72.62027777777777,
          23.06222222222222
        ],
        "elevation": "217 ft",
        "remarks": [
          "GROUP OF TREES"
        ]
      },
      {
        "runwaysAffected": [
          "23/TKOF",
          "05/APCH"
        ],
        "location": [
          72.61777777777777,
          23.06361111111111
        ],
        "elevation": "222 ft",
        "remarks": [
          "GROUP OF TREES"
        ]
      },
      {
        "runwaysAffected": [
          "23/APCH",
          "05/TKOF"
        ],
        "location": [
          72.64805555555556,
          23.089166666666664
        ],
        "elevation": "216 ft",
        "remarks": [
          "GROUP OF TREES"
        ]
      },
      {
        "runwaysAffected": [
          "23/APCH",
          "05/TKOF"
        ],
        "location": [
          72.64833333333334,
          23.08888888888889
        ],
        "elevation": "222 ft",
        "remarks": [
          "GROUP OF TREES"
        ]
      },
      {
        "runwaysAffected": [
          "23/APCH",
          "05/TKOF"
        ],
        "location": [
          72.64861111111112,
          23.08861111111111
        ],
        "elevation": "223 ft",
        "remarks": [
          "GROUP OF TREES"
        ]
      },
      {
        "runwaysAffected": [
          "23/APCH",
          "05/TKOF"
        ],
        "location": [
          72.64861111111112,
          23.089444444444442
        ],
        "elevation": "222 ft",
        "remarks": [
          "GROUP OF TREES"
        ]
      },
      {
        "runwaysAffected": [
          "23/APCH",
          "05/TKOF"
        ],
        "location": [
          72.64833333333334,
          23.08972222222222
        ],
        "elevation": "217 ft",
        "remarks": [
          "GROUP OF TREES"
        ]
      },
      {
        "runwaysAffected": [
          "23/APCH",
          "05/TKOF"
        ],
        "location": [
          72.64888888888889,
          23.090277777777775
        ],
        "elevation": "218 ft",
        "remarks": [
          "GROUP OF TREES"
        ]
      },
      {
        "runwaysAffected": [
          "23/APCH",
          "05/TKOF"
        ],
        "location": [
          72.64833333333334,
          23.090833333333332
        ],
        "elevation": "228 ft",
        "remarks": [
          "GROUP OF TREES"
        ]
      },
      {
        "runwaysAffected": [
          "23/APCH",
          "05/TKOF"
        ],
        "location": [
          72.64916666666667,
          23.090555555555554
        ],
        "elevation": "219 ft",
        "remarks": [
          "GROUP OF TREES"
        ]
      },
      {
        "runwaysAffected": [
          "23/APCH",
          "05/TKOF"
        ],
        "location": [
          72.64916666666667,
          23.090555555555554
        ],
        "elevation": "215 ft",
        "remarks": [
          "GROUP OF TREES"
        ]
      },
      {
        "runwaysAffected": [
          "23/APCH",
          "05/TKOF"
        ],
        "location": [
          72.64916666666667,
          23.090555555555554
        ],
        "elevation": "216 ft",
        "remarks": [
          "GROUP OF TREES"
        ]
      },
      {
        "runwaysAffected": [
          "23/APCH",
          "05/TKOF"
        ],
        "location": [
          72.64944444444446,
          23.090833333333332
        ],
        "elevation": "225 ft",
        "remarks": [
          "GROUP OF TREES"
        ]
      },
      {
        "runwaysAffected": [
          "23/APCH",
          "05/TKOF"
        ],
        "location": [
          72.64944444444446,
          23.090833333333332
        ],
        "elevation": "218 ft",
        "remarks": [
          "GROUP OF TREES"
        ]
      },
      {
        "runwaysAffected": [
          "23/APCH",
          "05/TKOF"
        ],
        "location": [
          72.64972222222222,
          23.090833333333332
        ],
        "elevation": "222 ft",
        "remarks": [
          "GROUP OF TREES"
        ]
      },
      {
        "runwaysAffected": [
          "23/APCH",
          "05/TKOF"
        ],
        "location": [
          72.65,
          23.090555555555554
        ],
        "elevation": "245 ft",
        "remarks": [
          "GROUP OF TREES"
        ]
      },
      {
        "runwaysAffected": [
          "23/APCH",
          "05/TKOF"
        ],
        "location": [
          72.65,
          23.092222222222222
        ],
        "elevation": "228 ft",
        "remarks": [
          "GROUP OF TREES"
        ]
      },
      {
        "runwaysAffected": [
          "23/APCH",
          "05/TKOF"
        ],
        "location": [
          72.65,
          23.092777777777776
        ],
        "elevation": "239 ft",
        "remarks": [
          "GROUP OF TREES"
        ]
      },
      {
        "runwaysAffected": [
          "23/APCH",
          "05/TKOF"
        ],
        "location": [
          72.65,
          23.092222222222222
        ],
        "elevation": "233 ft",
        "remarks": [
          "GROUP OF TREES"
        ]
      },
      {
        "runwaysAffected": [
          "23/APCH",
          "05/TKOF"
        ],
        "location": [
          72.65055555555556,
          23.091666666666665
        ],
        "elevation": "225 ft",
        "remarks": [
          "GROUP OF TREES"
        ]
      },
      {
        "runwaysAffected": [
          "23/APCH",
          "05/TKOF"
        ],
        "location": [
          72.65055555555556,
          23.091666666666665
        ],
        "elevation": "226 ft",
        "remarks": [
          "GROUP OF TREES"
        ]
      },
      {
        "runwaysAffected": [
          "23/APCH",
          "05/TKOF"
        ],
        "location": [
          72.65111111111112,
          23.091388888888886
        ],
        "elevation": "242 ft",
        "remarks": [
          "GROUP OF TREES"
        ]
      },
      {
        "runwaysAffected": [
          "23/APCH",
          "05/TKOF"
        ],
        "location": [
          72.65166666666667,
          23.091944444444444
        ],
        "elevation": "246 ft",
        "remarks": [
          "GROUP OF TREES"
        ]
      },
      {
        "runwaysAffected": [
          "23/APCH",
          "05/TKOF"
        ],
        "location": [
          72.65166666666667,
          23.092222222222222
        ],
        "elevation": "240 ft",
        "remarks": [
          "GROUP OF TREES"
        ]
      },
      {
        "runwaysAffected": [
          "23/APCH",
          "05/TKOF"
        ],
        "location": [
          72.65083333333334,
          23.093055555555555
        ],
        "elevation": "238 ft",
        "remarks": [
          "GROUP OF TREES"
        ]
      },
      {
        "runwaysAffected": [
          "23/APCH",
          "05/TKOF"
        ],
        "location": [
          72.65027777777779,
          23.093055555555555
        ],
        "elevation": "232 ft",
        "remarks": [
          "GROUP OF TREES"
        ]
      },
      {
        "runwaysAffected": [
          "23/APCH",
          "05/TKOF"
        ],
        "location": [
          72.65055555555556,
          23.093333333333334
        ],
        "elevation": "238 ft",
        "remarks": [
          "GROUP OF TREES"
        ]
      },
      {
        "runwaysAffected": [
          "23/APCH",
          "05/TKOF"
        ],
        "location": [
          72.65166666666667,
          23.094166666666666
        ],
        "elevation": "253 ft",
        "remarks": [
          "GROUP OF TREES"
        ]
      },
      {
        "runwaysAffected": [
          "In circling area and at AD"
        ],
        "location": [
          72.62888888888888,
          23.073333333333334
        ],
        "elevation": "194 ft",
        "remarks": [
          "TREE"
        ]
      },
      {
        "runwaysAffected": [
          "In circling area and at AD"
        ],
        "location": [
          72.63527777777779,
          23.07472222222222
        ],
        "elevation": "233 ft",
        "remarks": [
          "GROUP OF TREES"
        ]
      },
      {
        "runwaysAffected": [
          "In circling area and at AD"
        ],
        "location": [
          72.63611111111112,
          23.07611111111111
        ],
        "elevation": "220 ft",
        "remarks": [
          "GROUP OF TREES"
        ]
      },
      {
        "runwaysAffected": [
          "In circling area and at AD"
        ],
        "location": [
          72.63611111111112,
          23.081666666666667
        ],
        "elevation": "241 ft",
        "remarks": [
          "GROUP OF TREES"
        ]
      },
      {
        "runwaysAffected": [
          "In circling area and at AD"
        ],
        "location": [
          72.64055555555557,
          23.08
        ],
        "elevation": "242 ft",
        "remarks": [
          "GROUP OF TREES"
        ]
      },
      {
        "runwaysAffected": [
          "In circling area and at AD"
        ],
        "location": [
          72.64194444444445,
          23.081944444444446
        ],
        "elevation": "231 ft",
        "remarks": [
          "GROUP OF TREES"
        ]
      },
      {
        "runwaysAffected": [
          "In circling area and at AD"
        ],
        "location": [
          72.64305555555556,
          23.08277777777778
        ],
        "elevation": "235 ft",
        "remarks": [
          "GROUP OF TREES"
        ]
      },
      {
        "runwaysAffected": [
          "In circling area and at AD"
        ],
        "location": [
          72.6438888888889,
          23.083333333333332
        ],
        "elevation": "231 ft",
        "remarks": [
          "TREE"
        ]
      },
      {
        "runwaysAffected": [
          "In circling area and at AD"
        ],
        "location": [
          72.64111111111112,
          23.085833333333333
        ],
        "elevation": "218 ft",
        "remarks": [
          "GROUP OF TREES"
        ]
      },
      {
        "runwaysAffected": [
          "In circling area and at AD"
        ],
        "location": [
          72.61999999999999,
          23.066666666666666
        ],
        "elevation": "226 ft",
        "remarks": [
          "GROUP OF TREES"
        ]
      },
      {
        "runwaysAffected": [
          "In circling area and at AD"
        ],
        "location": [
          72.61972222222222,
          23.066111111111113
        ],
        "elevation": "230 ft",
        "remarks": [
          "GROUP OF TREES"
        ]
      },
      {
        "runwaysAffected": [
          "In circling area and at AD"
        ],
        "location": [
          72.61999999999999,
          23.066111111111113
        ],
        "elevation": "233 ft",
        "remarks": [
          "GROUP OF TREES"
        ]
      },
      {
        "runwaysAffected": [
          "In circling area and at AD"
        ],
        "location": [
          72.61972222222222,
          23.065555555555555
        ],
        "elevation": "231 ft",
        "remarks": [
          "GROUP OF TREES"
        ]
      },
      {
        "runwaysAffected": [
          "In circling area and at AD"
        ],
        "location": [
          72.61916666666666,
          23.065555555555555
        ],
        "elevation": "227 ft",
        "remarks": [
          "GROUP OF TREES"
        ]
      },
      {
        "runwaysAffected": [
          "In circling area and at AD"
        ],
        "location": [
          72.64527777777778,
          23.084444444444443
        ],
        "elevation": "229 ft",
        "remarks": [
          "GROUP OF TREES"
        ]
      },
      {
        "runwaysAffected": [
          "In circling area and at AD"
        ],
        "location": [
          72.64611111111111,
          23.085555555555555
        ],
        "elevation": "255 ft",
        "remarks": [
          "GROUP OF TREES"
        ]
      },
      {
        "runwaysAffected": [
          "In circling area and at AD"
        ],
        "location": [
          72.64666666666668,
          23.085555555555555
        ],
        "elevation": "257 ft",
        "remarks": [
          "GROUP OF TREES"
        ]
      },
      {
        "runwaysAffected": [
          "In circling area and at AD"
        ],
        "location": [
          72.64722222222223,
          23.08611111111111
        ],
        "elevation": "256 ft",
        "remarks": [
          "GROUP OF TREES"
        ]
      },
      {
        "runwaysAffected": [
          "In circling area and at AD"
        ],
        "location": [
          72.64777777777779,
          23.086944444444445
        ],
        "elevation": "243 ft",
        "remarks": [
          "GROUP OF TREES"
        ]
      },
      {
        "runwaysAffected": [
          "In circling area and at AD"
        ],
        "location": [
          72.64833333333334,
          23.0875
        ],
        "elevation": "243 ft",
        "remarks": [
          "GROUP OF TREES"
        ]
      },
      {
        "runwaysAffected": [
          "In circling area and at AD"
        ],
        "location": [
          72.64361111111111,
          23.08888888888889
        ],
        "elevation": "231 ft",
        "remarks": [
          "GROUP OF TREE"
        ]
      },
      {
        "runwaysAffected": [
          "In circling area and at AD"
        ],
        "location": [
          72.64916666666667,
          23.08861111111111
        ],
        "elevation": "222 ft",
        "remarks": [
          "GROUP OF TREETREES"
        ]
      },
      {
        "runwaysAffected": [
          "In circling area and at AD"
        ],
        "location": [
          72.62888888888888,
          23.073333333333334
        ],
        "elevation": "194 ft",
        "remarks": [
          "TREE"
        ]
      },
      {
        "runwaysAffected": [
          "In circling area and at AD"
        ],
        "location": [
          72.63527777777779,
          23.07472222222222
        ],
        "elevation": "233 ft",
        "remarks": [
          "GROUP OF TREE"
        ]
      },
      {
        "runwaysAffected": [
          "In circling area and at AD"
        ],
        "location": [
          72.63611111111112,
          23.07611111111111
        ],
        "elevation": "220 ft",
        "remarks": [
          "GROUP OF TREE"
        ]
      },
      {
        "runwaysAffected": [
          "In circling area and at AD"
        ],
        "location": [
          72.63416666666667,
          23.080277777777777
        ],
        "elevation": "239 ft",
        "remarks": [
          "TREE"
        ]
      },
      {
        "runwaysAffected": [
          "In circling area and at AD"
        ],
        "location": [
          72.63611111111112,
          23.081666666666667
        ],
        "elevation": "241 ft",
        "remarks": [
          "GROUP OF TREES"
        ]
      },
      {
        "runwaysAffected": [
          "In circling area and at AD"
        ],
        "location": [
          72.64055555555557,
          23.08
        ],
        "elevation": "242 ft",
        "remarks": [
          "GROUP OF TREES"
        ]
      },
      {
        "runwaysAffected": [
          "In circling area and at AD"
        ],
        "location": [
          72.64194444444445,
          23.081944444444446
        ],
        "elevation": "231 ft",
        "remarks": [
          "GROUP OF TREES"
        ]
      },
      {
        "runwaysAffected": [
          "In circling area and at AD"
        ],
        "location": [
          72.64305555555556,
          23.08277777777778
        ],
        "elevation": "235 ft",
        "remarks": [
          "GROUP OF TREES"
        ]
      },
      {
        "runwaysAffected": [
          "In circling area and at AD"
        ],
        "location": [
          72.6438888888889,
          23.083333333333332
        ],
        "elevation": "231 ft",
        "remarks": [
          "TREE"
        ]
      },
      {
        "runwaysAffected": [
          "In circling area and at AD"
        ],
        "location": [
          72.64055555555557,
          23.085555555555555
        ],
        "elevation": "219 ft",
        "remarks": [
          "GROUP OF TREES"
        ]
      },
      {
        "runwaysAffected": [
          "In circling area and at AD"
        ],
        "location": [
          72.64111111111112,
          23.085833333333333
        ],
        "elevation": "218 ft",
        "remarks": [
          "GROUP OF TREES"
        ]
      }
    ],
    "POLE": [
      {
        "runwaysAffected": [
          "23/TKOF",
          "05/APCH"
        ],
        "location": [
          72.62083333333332,
          23.06222222222222
        ],
        "elevation": "205 ft",
        "remarks": [
          "LIGHT POLE"
        ]
      },
      {
        "runwaysAffected": [
          "23/TKOF",
          "05/APCH"
        ],
        "location": [
          72.62027777777777,
          23.0625
        ],
        "elevation": "203 ft",
        "remarks": [
          "LIGHT POLE"
        ]
      },
      {
        "runwaysAffected": [
          "23/TKOF",
          "05/APCH"
        ],
        "location": [
          72.62055555555555,
          23.06222222222222
        ],
        "elevation": "205 ft",
        "remarks": [
          "LIGHT POLE"
        ]
      },
      {
        "runwaysAffected": [
          "23/TKOF",
          "05/APCH"
        ],
        "location": [
          72.62055555555555,
          23.061944444444446
        ],
        "elevation": "206 ft",
        "remarks": [
          "LIGHT POLE"
        ]
      },
      {
        "runwaysAffected": [
          "In circling area and at AD"
        ],
        "location": [
          72.62138888888889,
          23.06222222222222
        ],
        "elevation": "205 ft",
        "remarks": [
          "LIGHT POLE"
        ]
      },
      {
        "runwaysAffected": [
          "In circling area and at AD"
        ],
        "location": [
          72.64805555555556,
          23.0875
        ],
        "elevation": "220 ft",
        "remarks": [
          "LIGHT POLE"
        ]
      },
      {
        "runwaysAffected": [
          "In circling area and at AD"
        ],
        "location": [
          72.64888888888889,
          23.088055555555556
        ],
        "elevation": "219 ft",
        "remarks": [
          "LIGHT POLE"
        ]
      },
      {
        "runwaysAffected": [
          "In circling area and at AD"
        ],
        "location": [
          72.64916666666667,
          23.08833333333333
        ],
        "elevation": "219 ft",
        "remarks": [
          "LIGHT POLE"
        ]
      }
    ],
    "BUILDING": [
      {
        "runwaysAffected": [
          "23/TKOF",
          "05/APCH"
        ],
        "location": [
          72.61972222222222,
          23.061944444444446
        ],
        "elevation": "213 ft",
        "remarks": [
          "HOUSE"
        ]
      },
      {
        "runwaysAffected": [
          "23/APCH",
          "05/TKOF"
        ],
        "location": [
          72.64833333333334,
          23.089444444444442
        ],
        "elevation": "204 ft",
        "remarks": [
          "HOUSE"
        ]
      },
      {
        "runwaysAffected": [
          "23/APCH",
          "05/TKOF"
        ],
        "location": [
          72.64833333333334,
          23.089166666666664
        ],
        "elevation": "203 ft",
        "remarks": [
          "HOUSE"
        ]
      },
      {
        "runwaysAffected": [
          "23/APCH",
          "05/TKOF"
        ],
        "location": [
          72.64833333333334,
          23.089166666666664
        ],
        "elevation": "204 ft",
        "remarks": [
          "HOUSE"
        ]
      },
      {
        "runwaysAffected": [
          "23/APCH",
          "05/TKOF"
        ],
        "location": [
          72.64861111111112,
          23.08888888888889
        ],
        "elevation": "204 ft",
        "remarks": [
          "HOUSE"
        ]
      },
      {
        "runwaysAffected": [
          "23/APCH",
          "05/TKOF"
        ],
        "location": [
          72.64888888888889,
          23.08888888888889
        ],
        "elevation": "210 ft",
        "remarks": [
          "TEMPLE"
        ]
      },
      {
        "runwaysAffected": [
          "23/APCH",
          "05/TKOF"
        ],
        "location": [
          72.64861111111112,
          23.08861111111111
        ],
        "elevation": "202 ft",
        "remarks": [
          "HOUSE"
        ]
      },
      {
        "runwaysAffected": [
          "23/APCH",
          "05/TKOF"
        ],
        "location": [
          72.64833333333334,
          23.089444444444442
        ],
        "elevation": "204 ft",
        "remarks": [
          "HOUSE"
        ]
      },
      {
        "runwaysAffected": [
          "23/APCH",
          "05/TKOF"
        ],
        "location": [
          72.64833333333334,
          23.08972222222222
        ],
        "elevation": "203 ft",
        "remarks": [
          "HOUSE"
        ]
      },
      {
        "runwaysAffected": [
          "23/APCH",
          "05/TKOF"
        ],
        "location": [
          72.64833333333334,
          23.08972222222222
        ],
        "elevation": "203 ft",
        "remarks": [
          "HOUSE"
        ]
      },
      {
        "runwaysAffected": [
          "In circling area and at AD"
        ],
        "location": [
          72.6286111111111,
          23.07361111111111
        ],
        "elevation": "185 ft",
        "remarks": [
          "GOGABABA TEMPLE"
        ]
      },
      {
        "runwaysAffected": [
          "In circling area and at AD"
        ],
        "location": [
          72.63805555555557,
          23.08222222222222
        ],
        "elevation": "196 ft",
        "remarks": [
          "GAGAN HUT"
        ]
      },
      {
        "runwaysAffected": [
          "In circling area and at AD"
        ],
        "location": [
          72.64305555555556,
          23.086944444444445
        ],
        "elevation": "200 ft",
        "remarks": [
          "GP HUT"
        ]
      },
      {
        "runwaysAffected": [
          "In circling area and at AD"
        ],
        "location": [
          72.64444444444445,
          23.08361111111111
        ],
        "elevation": "238 ft",
        "remarks": [
          "BUILDING U/C"
        ]
      },
      {
        "runwaysAffected": [
          "In circling area and at AD"
        ],
        "location": [
          72.64166666666668,
          23.08111111111111
        ],
        "elevation": "226 ft",
        "remarks": [
          "MAYA CINEMA BUILDING"
        ]
      },
      {
        "runwaysAffected": [
          "In circling area and at AD"
        ],
        "location": [
          72.64166666666668,
          23.08611111111111
        ],
        "elevation": "201 ft",
        "remarks": [
          "SECURITY HUT"
        ]
      },
      {
        "runwaysAffected": [
          "In circling area and at AD"
        ],
        "location": [
          72.64583333333334,
          23.084999999999997
        ],
        "elevation": "224 ft",
        "remarks": [
          "BUILDING"
        ]
      },
      {
        "runwaysAffected": [
          "In circling area and at AD"
        ],
        "location": [
          72.6463888888889,
          23.08611111111111
        ],
        "elevation": "205 ft",
        "remarks": [
          "BUILDING"
        ]
      },
      {
        "runwaysAffected": [
          "In circling area and at AD"
        ],
        "location": [
          72.64694444444446,
          23.086666666666666
        ],
        "elevation": "205 ft",
        "remarks": [
          "SECURITY HUT"
        ]
      },
      {
        "runwaysAffected": [
          "In circling area and at AD"
        ],
        "location": [
          72.6363888888889,
          23.07638888888889
        ],
        "elevation": "211 ft",
        "remarks": [
          "BUILDING"
        ]
      },
      {
        "runwaysAffected": [
          "In circling area and at AD"
        ],
        "location": [
          72.63472222222222,
          23.080277777777777
        ],
        "elevation": "213 ft",
        "remarks": [
          "BUILDING"
        ]
      },
      {
        "runwaysAffected": [
          "In circling area and at AD"
        ],
        "location": [
          72.63805555555557,
          23.08222222222222
        ],
        "elevation": "202 ft",
        "remarks": [
          "GAGAN HUT"
        ]
      },
      {
        "runwaysAffected": [
          "In circling area and at AD"
        ],
        "location": [
          72.64,
          23.080277777777777
        ],
        "elevation": "198 ft",
        "remarks": [
          "SECURITY HUT"
        ]
      },
      {
        "runwaysAffected": [
          "In circling area and at AD"
        ],
        "location": [
          72.64166666666668,
          23.08111111111111
        ],
        "elevation": "226 ft",
        "remarks": [
          "MAYA CINEMA",
          "BUILDING"
        ]
      },
      {
        "runwaysAffected": [
          "In circling area and at AD"
        ],
        "location": [
          72.64194444444445,
          23.081666666666667
        ],
        "elevation": "215 ft",
        "remarks": [
          "BUILDING"
        ]
      },
      {
        "runwaysAffected": [
          "In circling area and at AD"
        ],
        "location": [
          72.64222222222223,
          23.081944444444446
        ],
        "elevation": "218 ft",
        "remarks": [
          "BUILDING"
        ]
      },
      {
        "runwaysAffected": [
          "In circling area and at AD"
        ],
        "location": [
          72.64166666666668,
          23.08611111111111
        ],
        "elevation": "201 ft",
        "remarks": [
          "SECURITY HUT"
        ]
      },
      {
        "runwaysAffected": [
          "In circling area and at AD"
        ],
        "location": [
          72.6463888888889,
          23.08611111111111
        ],
        "elevation": "205 ft",
        "remarks": [
          "BUILDING"
        ]
      }
    ],
    "ANTENNA": [
      {
        "runwaysAffected": [
          "23/TKOF",
          "05/APCH"
        ],
        "location": [
          72.61888888888888,
          23.061666666666667
        ],
        "elevation": "223 ft",
        "remarks": [
          "ANTENNA ON HOUSE"
        ]
      },
      {
        "runwaysAffected": [
          "23/TKOF",
          "05/APCH"
        ],
        "location": [
          72.61749999999999,
          23.06138888888889
        ],
        "elevation": "223 ft",
        "remarks": [
          "ANTENNA ON BLDG",
          "(BLDG. TOP 61.0 M.)"
        ]
      },
      {
        "runwaysAffected": [
          "In circling area and at AD"
        ],
        "location": [
          72.63777777777779,
          23.08222222222222
        ],
        "elevation": "206 ft",
        "remarks": [
          "GAGAN ANTENNA"
        ]
      },
      {
        "runwaysAffected": [
          "In circling area and at AD"
        ],
        "location": [
          72.63805555555557,
          23.0825
        ],
        "elevation": "206 ft",
        "remarks": [
          "GAGAN ANTENNA"
        ]
      },
      {
        "runwaysAffected": [
          "In circling area and at AD"
        ],
        "location": [
          72.63777777777779,
          23.0825
        ],
        "elevation": "206 ft",
        "remarks": [
          "GAGAN ANTENNA"
        ]
      },
      {
        "runwaysAffected": [
          "In circling area and at AD"
        ],
        "location": [
          72.64,
          23.080277777777777
        ],
        "elevation": "214 ft",
        "remarks": [
          "MLAT ANTENNA (RU-07)"
        ]
      },
      {
        "runwaysAffected": [
          "In circling area and at AD"
        ],
        "location": [
          72.63777777777779,
          23.0825
        ],
        "elevation": "206 ft",
        "remarks": [
          "RU-10"
        ]
      },
      {
        "runwaysAffected": [
          "In circling area and at AD"
        ],
        "location": [
          72.6463888888889,
          23.090555555555554
        ],
        "elevation": "216 ft",
        "remarks": [
          "COMMUNICATION",
          "ANTENNA"
        ]
      },
      {
        "runwaysAffected": [
          "In circling area and at AD"
        ],
        "location": [
          72.64861111111112,
          23.08833333333333
        ],
        "elevation": "221 ft",
        "remarks": [
          "RU-08"
        ]
      },
      {
        "runwaysAffected": [
          "In circling area and at AD"
        ],
        "location": [
          72.63777777777779,
          23.08222222222222
        ],
        "elevation": "206 ft",
        "remarks": [
          "GAGAN ANTENNA"
        ]
      },
      {
        "runwaysAffected": [
          "In circling area and at AD"
        ],
        "location": [
          72.63805555555557,
          23.0825
        ],
        "elevation": "206 ft",
        "remarks": [
          "GAGAN ANTENNA"
        ]
      },
      {
        "runwaysAffected": [
          "In circling area and at AD"
        ],
        "location": [
          72.63777777777779,
          23.0825
        ],
        "elevation": "206 ft",
        "remarks": [
          "GAGAN ANTENNA"
        ]
      },
      {
        "runwaysAffected": [
          "In circling area and at AD"
        ],
        "location": [
          72.64,
          23.080277777777777
        ],
        "elevation": "213 ft",
        "remarks": [
          "COMMUNICATION",
          "ANTENNA"
        ]
      }
    ],
    "OTHER": [
      {
        "runwaysAffected": [
          "23/TKOF",
          "05/APCH"
        ],
        "location": [
          72.61583333333333,
          23.058055555555555
        ],
        "elevation": "260 ft",
        "remarks": [
          "CELLPHONE MAST ON",
          "BLDG."
        ]
      },
      {
        "runwaysAffected": [
          "23/APCH",
          "05/TKOF"
        ],
        "location": [
          72.64750000000001,
          23.089444444444442
        ],
        "elevation": "207 ft",
        "remarks": [
          "MOBILE ROAD TRAFFIC",
          "(ROAD ELEV.58.0 M. +",
          "TRAFFIC HT. 5.0 M.)"
        ]
      },
      {
        "runwaysAffected": [
          "23/APCH",
          "05/TKOF"
        ],
        "location": [
          72.64861111111112,
          23.08833333333333
        ],
        "elevation": "207 ft",
        "remarks": [
          "MOBILE ROAD TRAFFIC",
          "(ROAD ELEV.58.2 M. +",
          "TRAFFIC HT. 5.0 M.)"
        ]
      },
      {
        "runwaysAffected": [
          "23/APCH",
          "05/TKOF"
        ],
        "location": [
          72.40472222222223,
          23.113055555555558
        ],
        "elevation": "343 ft",
        "remarks": [
          "CELLPHONE MAST"
        ]
      },
      {
        "runwaysAffected": [
          "23/APCH",
          "05/TKOF"
        ],
        "location": [
          72.6713888888889,
          23.11277777777778
        ],
        "elevation": "343 ft",
        "remarks": [
          "CELLPHONE MAST"
        ]
      },
      {
        "runwaysAffected": [
          "In circling area and at AD"
        ],
        "location": [
          72.62666666666667,
          23.068055555555556
        ],
        "elevation": "208 ft",
        "remarks": [
          "WDI"
        ]
      },
      {
        "runwaysAffected": [
          "In circling area and at AD"
        ],
        "location": [
          72.63416666666667,
          23.078055555555554
        ],
        "elevation": "187 ft",
        "remarks": [
          "LANDING T TOP"
        ]
      },
      {
        "runwaysAffected": [
          "In circling area and at AD"
        ],
        "location": [
          72.64277777777778,
          23.086388888888887
        ],
        "elevation": "211 ft",
        "remarks": [
          "WDI"
        ]
      },
      {
        "runwaysAffected": [
          "In circling area and at AD"
        ],
        "location": [
          72.64666666666668,
          23.08861111111111
        ],
        "elevation": "190 ft",
        "remarks": [
          "APPROACH LIGHT"
        ]
      },
      {
        "runwaysAffected": [
          "In circling area and at AD"
        ],
        "location": [
          72.63111111111111,
          23.070555555555554
        ],
        "elevation": "262 ft",
        "remarks": [
          "L/C ROD ON",
          "MSSR (MSSR TOP 74.3",
          "M.)"
        ]
      },
      {
        "runwaysAffected": [
          "In circling area and at AD"
        ],
        "location": [
          72.61777777777777,
          23.0575
        ],
        "elevation": "281 ft",
        "remarks": [
          "CELLPHONE MAST"
        ]
      },
      {
        "runwaysAffected": [
          "In circling area and at AD"
        ],
        "location": [
          72.64305555555556,
          23.086944444444445
        ],
        "elevation": "211 203 ft",
        "remarks": [
          "WDI",
          "MOBILE ROAD",
          "TRAFFIC (ROAD",
          "ELEV.56.8 M. +",
          "TRAFFIC HT. 5.0 M.)"
        ]
      },
      {
        "runwaysAffected": [
          "In circling area and at AD"
        ],
        "location": [
          72.64666666666668,
          23.08861111111111
        ],
        "elevation": "190 ft",
        "remarks": [
          "APPROACH LIGHT"
        ]
      },
      {
        "runwaysAffected": [
          "In circling area and at AD"
        ],
        "location": [
          72.65027777777779,
          23.08888888888889
        ],
        "elevation": "248 ft",
        "remarks": [
          "CELLPHONE MAST"
        ]
      },
      {
        "runwaysAffected": [
          "In circling area and at AD"
        ],
        "location": [
          72.66944444444445,
          23.102222222222224
        ],
        "elevation": "341 ft",
        "remarks": [
          "CELLPHONE MAST"
        ]
      },
      {
        "runwaysAffected": [
          "In circling area and at AD"
        ],
        "location": [
          72.62666666666667,
          23.068055555555556
        ],
        "elevation": "208 ft",
        "remarks": [
          "WDI"
        ]
      },
      {
        "runwaysAffected": [
          "In circling area and at AD"
        ],
        "location": [
          72.63416666666667,
          23.078055555555554
        ],
        "elevation": "187 ft",
        "remarks": [
          "LANDING T"
        ]
      },
      {
        "runwaysAffected": [
          "In circling area and at AD"
        ],
        "location": [
          72.61416666666666,
          23.040277777777778
        ],
        "elevation": "381 ft",
        "remarks": [
          "CHIMNEY"
        ]
      },
      {
        "runwaysAffected": [
          "In circling area and at AD"
        ],
        "location": [
          72.66277777777778,
          23.089444444444442
        ],
        "elevation": "349 ft",
        "remarks": [
          "CELLPHONE MAST"
        ]
      },
      {
        "runwaysAffected": [
          "In circling area and at AD"
        ],
        "location": [
          72.6563888888889,
          23.11527777777778
        ],
        "elevation": "379 ft",
        "remarks": [
          "H.T. PYLON MAST"
        ]
      },
      {
        "runwaysAffected": [
          "In circling area and at AD"
        ],
        "location": [
          72.65194444444445,
          23.113333333333333
        ],
        "elevation": "441 ft",
        "remarks": [
          "H.T. PYLON MAST"
        ]
      },
      {
        "runwaysAffected": [
          "In circling area and at AD"
        ],
        "location": [
          72.65,
          23.108055555555556
        ],
        "elevation": "377 ft",
        "remarks": [
          "H.T. PYLON MAST"
        ]
      },
      {
        "runwaysAffected": [
          "In circling area and at AD"
        ],
        "location": [
          72.64555555555556,
          23.1125
        ],
        "elevation": "440 ft",
        "remarks": [
          "MICROWAVE TOWER"
        ]
      },
      {
        "runwaysAffected": [
          "In circling area and at AD"
        ],
        "location": [
          72.64111111111112,
          23.11527777777778
        ],
        "elevation": "363 ft",
        "remarks": [
          "H.T. PYLON MAST"
        ]
      },
      {
        "runwaysAffected": [
          "In circling area and at AD"
        ],
        "location": [
          72.64,
          23.114444444444445
        ],
        "elevation": "378 ft",
        "remarks": [
          "H.T. PYLON MAST"
        ]
      },
      {
        "runwaysAffected": [
          "In circling area and at AD"
        ],
        "location": [
          72.63972222222223,
          23.112222222222222
        ],
        "elevation": "377 ft",
        "remarks": [
          "H.T. PYLON MAST"
        ]
      },
      {
        "runwaysAffected": [
          "In circling area and at AD"
        ],
        "location": [
          72.59305555555555,
          23.08
        ],
        "elevation": "448 451 ft",
        "remarks": [
          "MICROWAVE TOWER"
        ]
      }
    ],
    "OTHERTREE": [
      {
        "runwaysAffected": [
          "23/APCH",
          "05/TKOF"
        ],
        "location": [
          72.6463888888889,
          23.090555555555554
        ],
        "elevation": "203 214 ft",
        "remarks": [
          "MOBILE ROAD TRAFFIC",
          "(ROAD ELEV.56.8 M. +",
          "TRAFFIC HT. 5.0 M.)",
          "GROUP OF TREES"
        ]
      }
    ],
    "TREEOTHER": [
      {
        "runwaysAffected": [
          "23/APCH",
          "05/TKOF"
        ],
        "location": [
          72.64750000000001,
          23.09
        ],
        "elevation": "214 207 ft",
        "remarks": [
          "GROUP OF TREE",
          "MOBILE ROAD",
          "TRAFFIC(ROAD",
          "ELEV.58.0 M. +",
          "TRAFFIC HT. 5.0 M.)"
        ]
      }
    ],
    "WALL": [
      {
        "runwaysAffected": [
          "23/APCH",
          "05/TKOF"
        ],
        "location": [
          72.64888888888889,
          23.08833333333333
        ],
        "elevation": "203 ft",
        "remarks": [
          "AIRPORT BOUNDARY",
          "WALL WITH FENCING",
          "ON TOP"
        ]
      }
    ],
    "NAVAID": [
      {
        "runwaysAffected": [
          "In circling area and at AD"
        ],
        "location": [
          72.64305555555556,
          23.086944444444445
        ],
        "elevation": "212 ft",
        "remarks": [
          "GP/DME ANTENNA"
        ]
      },
      {
        "runwaysAffected": [
          "In circling area and at AD"
        ],
        "location": [
          72.64305555555556,
          23.086944444444445
        ],
        "elevation": "242 ft",
        "remarks": [
          "GP MAIN ANTENNA"
        ]
      },
      {
        "runwaysAffected": [
          "In circling area and at AD"
        ],
        "location": [
          72.64361111111111,
          23.0875
        ],
        "elevation": "207 ft",
        "remarks": [
          "GP MONITOR ANTENNA"
        ]
      },
      {
        "runwaysAffected": [
          "In circling area and at AD"
        ],
        "location": [
          72.625,
          23.06388888888889
        ],
        "elevation": "279 ft",
        "remarks": [
          "SMGCS RADAR"
        ]
      },
      {
        "runwaysAffected": [
          "In circling area and at AD"
        ],
        "location": [
          72.6438888888889,
          23.087777777777777
        ],
        "elevation": "203 ft",
        "remarks": [
          "GP MONITOR ANTENNA"
        ]
      },
      {
        "runwaysAffected": [
          "In circling area and at AD"
        ],
        "location": [
          72.63111111111111,
          23.070555555555554
        ],
        "elevation": "262 ft",
        "remarks": [
          "L/C ROD ON MSSR",
          "(MSSR TOP 74.3 M.)"
        ]
      }
    ],
    "NAVAIDANTENNA": [
      {
        "runwaysAffected": [
          "In circling area and at AD"
        ],
        "location": [
          72.64333333333335,
          23.08722222222222
        ],
        "elevation": "211 217 ft",
        "remarks": [
          "GP/DME ANTENNARU-09"
        ]
      }
    ],
    "BUILDINGOTHER": [
      {
        "runwaysAffected": [
          "In circling area and at AD"
        ],
        "location": [
          72.64361111111111,
          23.08722222222222
        ],
        "elevation": "199 207 ft",
        "remarks": [
          "GP HUT",
          "MOBILE ROAD",
          "TRAFFIC (ROAD",
          "ELEV.58.2 M. +",
          "TRAFFIC HT. 5.0 M.)"
        ]
      }
    ],
    "NAVAIDFENCE": [
      {
        "runwaysAffected": [
          "In circling area and at AD"
        ],
        "location": [
          72.64361111111111,
          23.08722222222222
        ],
        "elevation": "243 203 ft",
        "remarks": [
          "AIRPORT BOUNDARY",
          "WALL WITH FENCING",
          "GP MAIN ANTENNAON TOP"
        ]
      }
    ],
    "POLESTACK": [
      {
        "runwaysAffected": [
          "In circling area and at AD"
        ],
        "location": [
          72.64888888888889,
          23.088055555555556
        ],
        "elevation": "219 381 ft",
        "remarks": [
          "LIGHT POLECHIMNEY"
        ]
      }
    ],
    "OTHERSTACK": [
      {
        "runwaysAffected": [
          "In circling area and at AD"
        ],
        "location": [
          72.59416666666667,
          23.072499999999998
        ],
        "elevation": "465 ft",
        "remarks": [
          "CHIMNEY",
          "CHIMNEY (POWER PLANT)"
        ]
      },
      {
        "runwaysAffected": [
          "In circling area and at AD"
        ],
        "location": [
          72.59416666666667,
          23.07027777777778
        ],
        "elevation": "473 ft",
        "remarks": [
          "CHIMNEY",
          "CHIMNEY (POWER PLANT)"
        ]
      },
      {
        "runwaysAffected": [
          "In circling area and at AD"
        ],
        "location": [
          72.5936111111111,
          23.070555555555554
        ],
        "elevation": "473 ft",
        "remarks": [
          "CHIMNEY",
          "CHIMNEY (POWER PLANT)"
        ]
      },
      {
        "runwaysAffected": [
          "In circling area and at AD"
        ],
        "location": [
          72.58972222222222,
          23.07
        ],
        "elevation": "461 ft",
        "remarks": [
          "CHIMNEY",
          "CHIMNEY (POWER PLANT)"
        ]
      }
    ]
  },
  "meteorologicalInfo": {
    "Name of the associated meteorological office": [
      "Ahmedabad"
    ],
    "Hours of service and, where applicable, the designation of the responsible meteorological office outside these hours": [
      "H-24"
    ],
    "Office responsible for preparation of TAFs and periods of validity and interval of issuance of the forecasts": [
      "Ahmedabad",
      "9 and 24 HR"
    ],
    "Availability of the trend forecast for the aerodrome and interval of issuance": [
      "Trend",
      "METAR/SPECI/Special reports with Trend 30 Min"
    ],
    "Information on how briefing and/or consultation is provided": [
      "Provided with en-route forecast"
    ],
    "Types of flight documentation supplied and language(s) used in flight documentation": [
      "Tabular Form (English)"
    ],
    "Charts and other information displayed or available for briefing or consultation": [
      "S, U85, U70, U50 U30 U20."
    ],
    "Supplementary equipment available for providing information on meteorological conditions, e.g. weather radar and receiver for satellite images;": [
      "Telex, Telefax, Satellite display workstation"
    ],
    "The air traffic services unit(s) provided with meteorological information": [
      "Ahmedabad ATS"
    ],
    "Additional information, e.g. concerning any limitation of service.": [
      "Advance notice of 2 Hrs required for",
      "domestic routes and 12 Hrs notice",
      "required for INTL. routes."
    ]
  },
  "runwayDetails": {
    "23": {
      "runwayNo": "23",
      "trueBearing": "224.67 DEG",
      "dimensions": "3505 x 45 M",
      "threshholdLocation": [
        72.6463888888889,
        23.08833333333333
      ],
      "runwayendLocation": [
        72.62222222222222,
        23.065833333333334
      ],
      "takeoffRun": "3505",
      "takeoffDistance": "3505",
      "accelerationDistance": "3505",
      "landingDistance": "3505",
      "remarks": [
        "1:50"
      ],
      "approachLightingDetails": [
        "CAT I ",
        "750 M",
        "ALS",
        "LIH"
      ],
      "thresholdLightingDetails": [
        "Green"
      ],
      "visualSlopeIndicatorLightingDetails": [
        "PAPI",
        "LEFT/3.00 DEG",
        "MEHT",
        "(67.06FT)"
      ],
      "touchdownZoneLightsLength": ""
    },
    "05": {
      "runwayNo": "05",
      "trueBearing": "44.67 DEG",
      "dimensions": "3505 x 45 M",
      "threshholdLocation": [
        72.62222222222222,
        23.065833333333334
      ],
      "runwayendLocation": [
        72.6463888888889,
        23.08833333333333
      ],
      "takeoffRun": "3505",
      "takeoffDistance": "3505",
      "accelerationDistance": "3505",
      "landingDistance": "3505",
      "remarks": [
        "1:50"
      ],
      "approachLightingDetails": [
        "SALS ",
        "420 M",
        "LIH"
      ],
      "thresholdLightingDetails": [
        "Green"
      ],
      "visualSlopeIndicatorLightingDetails": [
        "PAPI",
        "LEFT/3.00 DEG",
        "MEHT",
        "(48.46FT)"
      ],
      "touchdownZoneLightsLength": ""
    }
  },
  "atsAirspaceInfo": {
    "Airspace designation, geographical\n\ncoordinates and lateral limits": [
      "CTR: Circular area centered on DVOR AAE (230406N 0723745E) within a 30NM radius."
    ],
    "Vertical limits": [
      "FL 70"
    ],
    "Airspace classification": [
      "D"
    ],
    "Call sign and language(s) of the air\n\ntraffic services unit providing service;": [
      "Ahmedabad Approach, English"
    ],
    "Transition altitude": [
      "4000 FT"
    ],
    "Hours of applicability": [
      "H24"
    ],
    "Remarks": [
      "Airspace from 5500 FT AMSL and above is Classified as Class ‘C’."
    ]
  },
  "radioFrequencies": {
    "119.800 MHZ": {
      "serviceDesignation": "APP",
      "callSign": "Ahmedabad Approach",
      "channel": "119.800 MHZ"
    },
    "118.100 MHZ": {
      "serviceDesignation": "TWR",
      "callSign": "Ahmedabad Tower",
      "channel": "118.100 MHZ"
    },
    "119.600 MHZ": {
      "serviceDesignation": "TWR",
      "callSign": "Ahmedabad Tower",
      "channel": "119.600 MHZ"
    },
    "126.800 MHZ": {
      "serviceDesignation": "ATIS",
      "callSign": "Ahmedabad Information",
      "channel": "126.800 MHZ"
    },
    "119.350 MHZ": {
      "serviceDesignation": "ACC",
      "callSign": "Ahmedabad Control",
      "channel": "119.350 MHZ"
    },
    "123.750 MHZ": {
      "serviceDesignation": "RADAR",
      "callSign": "Ahmedabad Radar",
      "channel": "123.750 MHZ"
    },
    "134.200 MHZ": {
      "serviceDesignation": "RADAR",
      "callSign": "Ahmedabad Radar",
      "channel": "134.200 MHZ"
    },
    "121.500 MHZ": {
      "serviceDesignation": "ALRS",
      "callSign": "Emergency Frequency",
      "channel": "121.500 MHZ"
    }
  }
}
```