const mongoose = require('mongoose');
const Job = require('./Job');
const locations = require('./Location');

const JobAndLocationSchema = new mongoose.Schema({
    jobs:[{type:mongoose.Schema.Types.ObjectId, ref:'Job'}],
    locations:[{type:mongoose.Schema.Types.ObjectId, ref:'Location'}]
});

const JobAndLocation = mongoose.model('JobAndLocation', JobAndLocationSchema);

module.exports = JobAndLocation;
