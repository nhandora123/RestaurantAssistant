const Base = require('../../services/base.service')
const Area = require('../../models/Table/area.model')


exports.getAllArea = Base.getAll(Area);

exports.createOneArea = Base.createOne(Area);

exports.deleteOneAre = Base.deleteOne(Area);

exports.updateOne = Base.updateOne(Area);