const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let StoreSchema = new Schema({
    _id: {type: String, require: true},
    storeName: { type: String, required: true },
    address: { type: String, required: false },
    domainName: { type: String, required: false },
    numberPhone: { type: String, required: false }, 
    taxNumber: { type: String, required: false },
    isActive: { type: Boolean, required: true },
    fromDate: { type: Date, required: true },
    toDate: { type: Date, required: true },
    email: { type: String, required: false },
    presentasion: { type: String, required: false },
    siteId: {type: Number, required: true, ref: 'sites'}
})

module.exports = mongoose.model('stores', StoreSchema)