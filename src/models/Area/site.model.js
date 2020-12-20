const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let SiteSchema = new Schema({
    _id: {type: Number, require: true},
    siteName: { type: String, required: true },
    address: { type: String, required: false },
    domainName: { type: String, required: false },
    numberPhone: { type: String, required: false }, 
    taxNumber: { type: String, required: false },
    isActive: { type: Boolean, required: true },
    fromDate: { type: Date, required: true },
    toDate: { type: Date, required: true },
    email: { type: String, required: false }
})

module.exports = mongoose.model('sites', SiteSchema)