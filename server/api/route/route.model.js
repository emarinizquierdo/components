'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var RouteSchema = new Schema({
    id: String,
    timestamp: Number,
    geometry: {
        coordinates: {
            type: Array,
            required: true
        }
    }
});

module.exports = mongoose.model('Route', RouteSchema);
