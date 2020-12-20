const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let TableSchema = new Schema({
    tableName: { type: String, required: true },
    typeTableId: { type: Schema.Types.ObjectId, required: true, ref: 'typeTables' },
    status : {type: Number, require: true, default: 1},
    //1: Không người ngồi; 2: Có người ngồi; 3: Đang đợi món; 4: Đã đủ món
    siteId: { type: Number, required: true, ref: 'sites'},
    storeId: { type: String, required: true, ref: 'stores'}
})

module.exports = mongoose.model('tables', TableSchema)