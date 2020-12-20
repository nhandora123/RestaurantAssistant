const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let MenuSchema = new Schema({
    nameMenu: { type: String, required: false },
    dateCreate: { type: Date, required: true, default: Date.now },
    foodItems: [{type: Schema.Types.ObjectId, ref: 'foodItems'}],
    siteId: { type: Number, required: true, ref: 'sites'},
    storeId: { type: String, required: true, ref: 'stores'}
})

module.exports = mongoose.model('typeTables', MenuSchema)