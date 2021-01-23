"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _require = require('../utils/response.util'),
    ErrorUtil = _require.ErrorUtil,
    SuccessUtil = _require.SuccessUtil;

var APIFeatures = require('../utils/Feature.util');

exports.deleteOne = function (Model) {
  return function _callee() {
    var doc;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return regeneratorRuntime.awrap(Model.findByIdAndDelete(req.params.id));

          case 3:
            doc = _context.sent;

            if (doc) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return", new ErrorUtil(404, 'fail', 'No document found with that id'));

          case 6:
            return _context.abrupt("return", {
              status: 'success',
              data: null
            });

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", new ErrorUtil(404, 'fail', _context.t0));

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 9]]);
  };
};

exports.updateOne = function (Model) {
  return function _callee2(req, res, next) {
    var doc;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return regeneratorRuntime.awrap(Model.findByIdAndUpdate(req.params.id, req.body, {
              "new": true,
              runValidators: true
            }));

          case 3:
            doc = _context2.sent;

            if (doc) {
              _context2.next = 6;
              break;
            }

            return _context2.abrupt("return", new ErrorUtil(404, 'fail', 'No document found with that id'));

          case 6:
            return _context2.abrupt("return", {
              status: 'success',
              data: {
                doc: doc
              }
            });

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](0);
            return _context2.abrupt("return", new ErrorUtil(404, 'fail', _context2.t0));

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[0, 9]]);
  };
};

exports.createOne = function (Model) {
  return function _callee3(req, res, next) {
    var doc;
    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return regeneratorRuntime.awrap(Model.create(req.body));

          case 3:
            doc = _context3.sent;
            return _context3.abrupt("return", {
              status: 'success',
              data: {
                doc: doc
              }
            });

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](0);
            return _context3.abrupt("return", new ErrorUtil(404, 'fail', _context3.t0));

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, [[0, 7]]);
  };
};

exports.getOne = function (Model) {
  return function _callee4(req, res, next) {
    var doc;
    return regeneratorRuntime.async(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return regeneratorRuntime.awrap(Model.findById(req.params.id));

          case 3:
            doc = _context4.sent;

            if (doc) {
              _context4.next = 6;
              break;
            }

            return _context4.abrupt("return", new ErrorUtil(404, 'fail', 'No document found with that id'));

          case 6:
            return _context4.abrupt("return", {
              status: 'success',
              data: {
                doc: doc
              }
            });

          case 9:
            _context4.prev = 9;
            _context4.t0 = _context4["catch"](0);
            return _context4.abrupt("return", new ErrorUtil(404, 'fail', _context4.t0));

          case 12:
          case "end":
            return _context4.stop();
        }
      }
    }, null, null, [[0, 9]]);
  };
};

exports.getAll = function (Model, queryString) {
  return function _callee5(req, res, next) {
    var features, totalData, data;
    return regeneratorRuntime.async(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            queryString = _objectSpread({}, queryString, {
              order: req.query.order,
              page: req.query.page,
              limit: req.query.limit
            });
            features = new APIFeatures(Model.find(), queryString).condition().sort().populate();
            _context5.next = 5;
            return regeneratorRuntime.awrap(features.query);

          case 5:
            totalData = _context5.sent;
            _context5.next = 8;
            return regeneratorRuntime.awrap(features.paginate().query);

          case 8:
            data = _context5.sent;

            if (!data) {
              res.json(new ErrorUtil(404, 'fail', 'No document found with that id'));
            }

            res.json(new SuccessUtil(200, 1, 'success', {
              totalRow: totalData.length,
              page: queryString.page * 1 || 1,
              limit: queryString.limit * 1 || 10,
              data: data
            })); //return 1//SuccessUtil(200, 1, 'success', {
            //     results: doc.length,
            //     data: doc
            // });

            _context5.next = 16;
            break;

          case 13:
            _context5.prev = 13;
            _context5.t0 = _context5["catch"](0);
            res.json(new ErrorUtil(404, 'fail', _context5.t0));

          case 16:
          case "end":
            return _context5.stop();
        }
      }
    }, null, null, [[0, 13]]);
  };
};