const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CatagorySchema = new Schema({
    catagoryName: { type: String, required: true },
    siteId: { type: Number, required: true, ref: 'sites'},
    storeId: { type: String, required: true, ref: 'stores'}
})

module.exports = mongoose.model('catagories', CatagorySchema)