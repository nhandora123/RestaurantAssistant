const base = require('../base.controller')
const Area = require('../../models/Table/area.model')


exports.getAllArea = base.getAll(Area);

exports.createOneArea = base.createOne(Area);

exports.deleteOneAre = base.deleteOne(Area);

exports.updateOne = base.updateOne(Area);