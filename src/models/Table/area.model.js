const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let AreaSchema = new Schema({
    areaName: { type: String, require: true },
    areaUnit: { type: String, require: true },
    maxNumberTable: { type: Number, require: false },
    minNumberTable: { type: Number, require: false },
    siteId: { type: Number, required: true, ref: 'sites'},
    storeId: { type: String, required: true, ref: 'stores'}
})

module.exports = mongoose.model('areas', AreaSchema)