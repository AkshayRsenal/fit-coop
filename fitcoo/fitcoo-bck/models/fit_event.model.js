const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const fit_eventSchema = new Schema({
    eventname: {type: String, required: true},
    description: {type: String, required: true},
    duration: {type: String, required: true},
    date: {type: Date, required: true},
    numOfPeople: {type: String, required: true},
    status: {type: String, required: true},

}, {
    timestamps: true,
});

const FitEvent = mongoose.model('FitEvent', fit_eventSchema);

module.exports = FitEvent;

