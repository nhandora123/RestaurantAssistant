const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    username: { type: String, required: true, min: 5, max: 100},
    password: { type: String, required: true, min: 5, max: 100 },
    dateCreated: { type: Date, required: true, default: Date.now },
    siteId: { type: Number, required: true, ref: 'sites'},
    storeId: { type: String, required: true, ref: 'stores' },
    isAdmin: { type: Boolean, required: true, default: false },
    isActive: {type: Boolean, require: true, default: false}
})

module.exports = mongoose.model('users', UserSchema)