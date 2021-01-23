"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ErrorUtil = function ErrorUtil(statusCode, status, message) {
  _classCallCheck(this, ErrorUtil);

  this.statusCode = statusCode;
  this.status = status;
  this.message = message;
  this.data = null;
};

var SuccessUtil = function SuccessUtil(statusCode, status, message, data) {
  _classCallCheck(this, SuccessUtil);

  this.statusCode = statusCode;
  this.status = status;
  this.message = message;
  this.data = data;
};

module.exports = {
  ErrorUtil: ErrorUtil,
  SuccessUtil: SuccessUtil
};