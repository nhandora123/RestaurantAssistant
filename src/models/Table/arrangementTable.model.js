const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ArrangementTableSchema = new Schema({
    area: { type: Schema.Types.ObjectId, required: true, ref: 'areas'},
    tables: [{
        type: Schema.Types.ObjectId, ref: 'tables'
    }],
    siteId: { type: Number, required: true, ref: 'sites' },
    storeId: { type: String, required: true, ref: 'stores'}
})

module.exports = mongoose.model('arrangementTable', ArrangementTableSchema)