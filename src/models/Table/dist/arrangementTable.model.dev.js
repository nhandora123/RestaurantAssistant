"use strict";

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var ArrangementTableSchema = new Schema({
  area: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'areas'
  },
  tables: [{
    type: Schema.Types.ObjectId,
    ref: 'tables'
  }],
  siteId: {
    type: Number,
    required: true,
    ref: 'sites'
  },
  storeId: {
    type: String,
    required: true,
    ref: 'stores'
  }
});
module.exports = mongoose.model('arrangementTable', ArrangementTableSchema);