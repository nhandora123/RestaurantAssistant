"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// // query is name Model.Find()
// // queryString is after model.Find()
var APIFeatures =
/*#__PURE__*/
function () {
  function APIFeatures(query, queryString) {
    _classCallCheck(this, APIFeatures);

    this.query = query;
    this.queryString = queryString;
    this.totalRow = 0;
    this.totalPage = this.totalRow;
  }

  _createClass(APIFeatures, [{
    key: "sort",
    value: function sort() {
      if (isRealValue(this.queryString.order)) {
        var sortBy = this.queryString.order.split(',').join(' ');
        this.query = this.query.sort(sortBy);
      }

      return this;
    }
  }, {
    key: "paginate",
    value: function paginate() {
      //page: trang hiện tại
      //limit: tổng số trang
      var page = this.queryString.page * 1 || 1;
      var limit = this.queryString.limit * 1 || 10;
      this.totalPage = Math.ceil(this.totalRow / limit);
      var skip = (page - 1) * limit;
      this.query = this.query.skip(skip).limit(limit);
      return this;
    }
  }, {
    key: "populate",
    value: function populate() {
      var _this = this;

      var populates = this.queryString.populates;

      if (isRealValue(populates)) {
        populates.forEach(function (populateItem) {
          _this.query = _this.query.populate(populateItem);
        });
      }

      return this;
    }
  }, {
    key: "condition",
    value: function condition() {
      var conditions = this.queryString.conditions;

      if (isRealValue(conditions)) {
        this.query = this.query.find(conditions);
      }

      return this;
    }
  }]);

  return APIFeatures;
}();

function isRealValue(obj) {
  return obj && obj !== 'null' && obj !== 'undefined';
}

module.exports = APIFeatures;