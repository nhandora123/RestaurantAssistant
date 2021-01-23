"use strict";

require('dotenv').config();

var ArrangementTable = require('../../models/Table/arrangementTable.model');

var Table = require('../../models/Table/table.model');

var Area = require('../../models/Table/area.model');

var Base = require('../../services/base.service');

exports.getManyArrangementTable = // async (req, res, next) =>{
//     console.log(req.query);
//     res.json( await ArrangementTable.find({siteId: 1, storeId: "1"})
//     .populate({path: "area", select: "areaName areUnit"})
//     .populate({path:"tables", select: "tableName"})
//     .sort({'area.areaName': 1}))
// }
Base.getAll(ArrangementTable, {
  populates: [{
    path: "area",
    select: "areaName areaUnit"
  }, {
    path: "tables",
    select: "tableName status"
  }],
  conditions: {
    siteId: 1,
    storeId: "1"
  }
}); //data.push(await ArrangementTable.find());

exports.createManyTable = function _callee(req, res, next) {
  var data, index, tables, yndex, table, area;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          data = new Array(); //let lenghtData = await ArrangementTable.;
          //if(lenghtData==0){

          ix = 0;
          index = 0;

        case 4:
          if (!(index < 4)) {
            _context.next = 26;
            break;
          }

          tables = [];
          yndex = index * 10;

        case 7:
          if (!(yndex < (index + 1) * 10)) {
            _context.next = 15;
            break;
          }

          _context.next = 10;
          return regeneratorRuntime.awrap(Table.findOne({
            tableName: "BA" + yndex
          }));

        case 10:
          table = _context.sent;

          if (table != null) {
            tables.push(table._id);
          }

        case 12:
          yndex++;
          _context.next = 7;
          break;

        case 15:
          _context.next = 17;
          return regeneratorRuntime.awrap(Area.findOne({
            areaName: (index + 1).toString()
          }));

        case 17:
          area = _context.sent;
          _context.t0 = data;
          _context.next = 21;
          return regeneratorRuntime.awrap(ArrangementTable.create({
            area: area._id,
            tables: tables,
            siteId: 1,
            storeId: "1"
          }));

        case 21:
          _context.t1 = _context.sent;

          _context.t0.push.call(_context.t0, _context.t1);

        case 23:
          index++;
          _context.next = 4;
          break;

        case 26:
          //}
          res.status(201).json({
            status: 'success',
            data: data
          });
          _context.next = 32;
          break;

        case 29:
          _context.prev = 29;
          _context.t2 = _context["catch"](0);
          next(_context.t2);

        case 32:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 29]]);
};

exports.deleteMany = function _callee2(req, res, next) {
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          try {
            ArrangementTable.deleteMany();
          } catch (error) {
            next(error);
          }

        case 1:
        case "end":
          return _context2.stop();
      }
    }
  });
};