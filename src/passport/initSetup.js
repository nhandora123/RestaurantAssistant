const signIn = require('./signIn.passport');
const signUp = require('./signUp.passport');
const User = require('../models/Account/user.model');
const { getMaxListeners } = require('../models/Account/user.model');

const initSetup = (passport) => {
      //Thiết lập mặc định cho passport
  passport.serializeUser((user, done) => {
    done(null, user._id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user);
    });
  });
  signIn(passport);
  signUp(passport);
}
module.exports = initSetup;