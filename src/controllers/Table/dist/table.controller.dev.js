"use strict";

require('dotenv').config();

var Table = require('../../models/Table/table.model');

var TypeTable = require('../../models/Table/typeTable.model');

var Base = require('../../services/base.service'); //const APIFeatures = require('../../utils/Feature.util');


exports.createOneTable = Base.createOne(Table);
exports.getAllTable = Base.getAll(Table); //console.log({abc: Base.getAll(Table)})

exports.gettest = function _callee(req, res, next) {
  var doc;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(Table.find());

        case 3:
          doc = _context.sent;
          //console.log(doc)
          res.status(200).json(new AppSuccess(200, 'success', {
            results: doc.length,
            data: doc
          }));
          _context.next = 10;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.createManyTable = function _callee2(req, res, next) {
  var doc, status, index, codeRandomTypeTableRandom;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          doc = [];
          status = 0;
          index = 1;

        case 4:
          if (!(index < 40)) {
            _context2.next = 25;
            break;
          }

          codeRandomTypeTableRandom = "";

          if (index >= 1 && index <= 10) {
            codeRandomTypeTableRandom = "BN2N";
          } else if (index > 10 && index <= 20) {
            codeRandomTypeTableRandom = "BN4N";
          } else if (index > 20 && index <= 30) {
            codeRandomTypeTableRandom = "BL2N";
          } else {
            codeRandomTypeTableRandom = "BL4N";
          }

          status = status == 0 ? 1 : 0;
          _context2.t0 = doc;
          _context2.t1 = regeneratorRuntime;
          _context2.t2 = Table;
          _context2.t3 = "BA" + index.toString();
          _context2.next = 14;
          return regeneratorRuntime.awrap(TypeTable.findOne({
            codeTypeTable: codeRandomTypeTableRandom
          }));

        case 14:
          _context2.t4 = _context2.sent._id;
          _context2.t5 = status == 0 ? 1 : 0;
          _context2.t6 = {
            tableName: _context2.t3,
            typeTableId: _context2.t4,
            status: _context2.t5,
            siteId: 1,
            storeId: "1"
          };
          _context2.t7 = _context2.t2.create.call(_context2.t2, _context2.t6);
          _context2.next = 20;
          return _context2.t1.awrap.call(_context2.t1, _context2.t7);

        case 20:
          _context2.t8 = _context2.sent;

          _context2.t0.push.call(_context2.t0, _context2.t8);

        case 22:
          index++;
          _context2.next = 4;
          break;

        case 25:
          res.status(201).json({
            status: 'success',
            data: {
              doc: doc
            }
          });
          _context2.next = 31;
          break;

        case 28:
          _context2.prev = 28;
          _context2.t9 = _context2["catch"](0);
          next(_context2.t9);

        case 31:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 28]]);
};