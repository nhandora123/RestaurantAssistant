const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/Account/user.model");
const UserProfile = require("../models/Account/userProfile.model")
const bcrypt = require("bcrypt");

const signIn = (passport) => {
    passport.use(
        "signIn",
        new LocalStrategy(
            {
                usernameField: "username",
                passwordField: "password",
                passReqToCallback: true
            },
            (req, username, password, done) => {
                User.findOne({ username: username }, (err, user) => {
                    if (err) return done(err);
                    
                    if (!user) {
                        return done({status: 0}, false)
                    }
                    console.log(user);

                    if (!isValidPassword(user, password)) {
                        return done({status: -2}, false);
                    }
                    
                    UserProfile.findOne({ UserId: user._id }, (errr, userProfile)=>{
                        if (err) return done(err);

                        return done(null, user);
                    })
                })
            }
        )
    )
    const isValidPassword = (user, password) => {
        return bcrypt.compareSync(password, user.password);
    }
}

module.exports = signIn;