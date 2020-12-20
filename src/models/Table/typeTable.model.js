const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let TypeTableSchema = new Schema({
    codeTypeTable: {type: String, required: true},
    nameTypeTable: { type: String, required: true },
    maxSeat: { type: Number, required: false },
    minSeat: { type: Number, required: false },
    siteId: { type: Number, required: true, ref: 'sites'},
    storeId: { type: String, required: true, ref: 'stores'}
})

module.exports = mongoose.model('typeTables', TypeTableSchema)