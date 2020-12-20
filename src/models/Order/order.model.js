const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const orderFood = require('./orderFood.model');

let OrderSchema = new Schema({
    arrangementTableId: { type: Schema.Types.ObjectId, required: true, ref: 'arrangementTables' },
    dateCreated: { type: Date, required: true, default: Date.now },
    employeeCreated: { type: Schema.Types.ObjectId, required: true },
    noteGenerous: { type: String, required: false },
    totalMoney: { type: Float64Array, required: false },
    orderFood: [orderFood],
    status: { type: Number, required: true, default: 1 },
    siteId: { type: Number, required: true, ref: 'sites'},
    storeId: { type: String, required: true, ref: 'stores'}
})

module.exports = mongoose.model('typeTables', OrderSchema)