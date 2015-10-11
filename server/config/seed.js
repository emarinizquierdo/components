/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Route = require('../api/route/route.model');

Route.find({}).remove(function() {
    Route.create({
        "id": "ruta01",
        "timestamp": 1444587908363,
        "geometry": {
                "type": "LineString",
                "coordinates": [
                    [
                        -3.674238,
                        40.513799
                    ],
                    [
                        -3.674238,
                        40.513799,
                        784.1
                    ],
                    [
                        -3.67436,
                        40.513999,
                        787.1
                    ],
                    [
                        -3.674547,
                        40.514219,
                        787.3
                    ],
                    [
                        -3.674312,
                        40.514351,
                        784.4
                    ],
                    [
                        -3.674312,
                        40.514351,
                        784.4
                    ],
                    [
                        -3.674312,
                        40.514351,
                        784.4
                    ],
                    [
                        -3.674161,
                        40.514509,
                        779.7
                    ],
                    [
                        -3.674161,
                        40.514509,
                        779.7
                    ],
                    [
                        -3.673871,
                        40.514054,
                        771.9
                    ],
                    [
                        -3.673565,
                        40.513595,
                        768
                    ],
                    [
                        -3.673495,
                        40.513459,
                        765.6
                    ],
                    [
                        -3.673907,
                        40.513293,
                        766.1
                    ],
                    [
                        -3.674159,
                        40.513197,
                        767.8
                    ],
                    [
                        -3.674534,
                        40.513057,
                        768.7
                    ]
                ]
            }
    });
});
