"use strict";

var LocalStrategy = require("passport-local").Strategy;

var User = require("../models/Account/user.model");

var UserProfile = require("../models/Account/userProfile.model");

var bcrypt = require("bcrypt");

var signIn = function signIn(passport) {
  passport.use("signIn", new LocalStrategy({
    usernameField: "username",
    passwordField: "password",
    passReqToCallback: true
  }, function (req, username, password, done) {
    User.findOne({
      username: username
    }, function (err, user) {
      if (err) return done(err);

      if (!user) {
        return done({
          status: 0
        }, false);
      }

      if (!isValidPassword(user, password)) {
        return done({
          status: -2
        }, false);
      }

      UserProfile.findOne({
        UserId: user._id
      }, function (err, userProfile) {
        if (err) return done(err);
        return done(null, user);
      });
    });
  }));

  var isValidPassword = function isValidPassword(user, password) {
    return bcrypt.compareSync(password, user.password);
  };
};

module.exports = signIn;