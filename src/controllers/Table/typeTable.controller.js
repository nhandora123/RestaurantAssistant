const base = require('../base.controller');
const TypeTable = require('../../models/Table/typeTable.model');

exports.createOneTypeTable = base.createOne(TypeTable);

