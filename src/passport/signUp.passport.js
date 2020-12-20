const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/Account/user.model");
const UserProfile = require("../models/Account/userProfile.model")
const bcrypt = require("bcrypt");

const signUp = (passport) => {
    passport.use("signUp",
        new LocalStrategy(
            {
                usernameField: "username",
                passwordField: "password",
                passReqToCallback: true
            },
            (req, username, password, done) => {
                const createAccount = async () => {
                    console.log('Username1'+username);
                    await User.findOne({ username: username }, (err, user) => {
                        console.log('Username2' + username);

                        if (err) {
                            console.log(err);
                            return done(err, false);
                        }
                        if (user) {
                            console.log("234"+ user +"adsf");
                            return done({ status: 0 }, user);
                        } else{ 
                            let userInfor = new User();
                            userInfor.username = username;
                            userInfor.password = createHash(password);
                            userInfor.dateCreated = Date.now();
                            userInfor.siteId = req.body.siteId;
                            userInfor.storeId = req.body.storeId;
                            userInfor.isAdmin = req.body.isAdmin;
                            userInfor.isActive = req.body.isActive;
                            userInfor.save((err) => {
                                if (err) {
                                    console.log(err.message+ "abc");   
                                    throw err;
                                }
                                let userProfile = new UserProfile();
                                userProfile._id = userInfor._id;
                                
                                userProfile.save((err) => {
                                    if (err) {
                                        console.log(err.message +"abc");   
                                        throw err;
                                    }
                                    return done({ status: 1 }, userInfor);

                                })
                            })
                            //let userProfile = new UserProfile();
                            //userProfile.userId = userInfo._id;

                        }
                    })
                }
                process.nextTick(createAccount);
            }
        )
    )
    const createHash = (password) => {
        return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null); 
    }
}
 
module.exports = signUp;