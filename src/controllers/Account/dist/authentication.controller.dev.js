"use strict";

require('dotenv').config();

var User = require('../../models/Account/user.model');

var jwt = require('jsonwebtoken');

var Enum = require('../../utils/index.enum');

var _require = require('../../utils/response.util.js'),
    ErrorUtil = _require.ErrorUtil,
    SuccessUtil = _require.SuccessUtil;

var signIn = function signIn(passport) {
  return function (req, res, next) {
    var _req$body = req.body,
        username = _req$body.username,
        password = _req$body.password;

    if (username && password) {
      passport.authenticate('signIn', function (err, user, info) {
        console.log(user);

        if (!user) {
          return res.status(401).json(new ErrorUtil(201, -1, "Your account or password is wrong"));
        } //Don't exist this username


        req.logIn(user, function (err) {
          if (err) {
            return next(err);
          }

          var payLoad = {
            // _id: user._id,
            username: user.username,
            fullname: user.fullname //picture: user.picture

          };
          var token = jwt.sign(payLoad, process.env.ACCESS_TOKEN_SECRET);
          return res.json(new SuccessUtil(200, 1, "Success", token)); // Success
        });
      })(req, res, next);
    } else {
      return res.json(new ErrorUtil(201, -1, "Less Attribute"));
    }
  };
};

var signUp = function signUp(passport) {
  return function (req, res, next) {
    var _req$body2 = req.body,
        username = _req$body2.username,
        password = _req$body2.password;

    if (username && password) {
      passport.authenticate('signUp', function (err, user, infor) {
        if (err) console.log(err); //if (infor) console.log(infor);

        console.log(user);

        if (user) {
          console.log(user);
          return res.status(401).json({
            adsf: "dsaf"
          });
        } //Exist this username


        req.logIn(user, function (err) {
          if (err) {
            return next(err);
          }

          var payLoad = {
            user: user
          };
          var token = jwt.sign(payLoad, process.env.ACCESS_TOKEN_SECRET);
          return res.json({
            status: 1,
            token: token
          });
        });
      })(req, res, next);
    } else {
      return res.json(Enum.Account.paramNotEnough);
    }
  };
};

module.exports = {
  signIn: signIn,
  signUp: signUp
};