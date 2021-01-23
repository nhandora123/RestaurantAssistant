const Base = require('../../services/base.service')
const TypeTable = require('../../models/Table/typeTable.model');

exports.createOneTypeTable = Base.createOne(TypeTable);

