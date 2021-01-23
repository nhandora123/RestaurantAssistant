require('dotenv').config();
const User = require('../../models/Account/user.model');
const jwt = require('jsonwebtoken')
const Enum = require('../../utils/index.enum')
const {ErrorUtil, SuccessUtil} = require('../../utils/response.util.js')

const signIn = (passport) => function (req, res, next) {

    const { username, password } = req.body;

    if (username && password ) {

        passport.authenticate('signIn', function (err, user, info) {

            console.log(user);
            if (!user) { return res.status(401).json(new ErrorUtil(201, -1, "Your account or password is wrong")) }//Don't exist this username
        
            req.logIn(user, function (err) {
                if (err) { return next(err); }

                let payLoad = {
                    // _id: user._id,
                    username: user.username,
                    fullname: user.fullname,
                    //picture: user.picture
                };
                let token = jwt.sign(payLoad, process.env.ACCESS_TOKEN_SECRET);
                return res.json(new SuccessUtil(200, 1, "Success", token));// Success
            });
        })(req, res, next);
    } else {
        return res.json(new ErrorUtil(201, -1, "Less Attribute"))
    }
}

const signUp = (passport) =>
    function (req, res, next) {

        const { username, password} = req.body;

        if (username && password) {
            passport.authenticate('signUp', function (err, user, infor) {
                if (err) console.log(err);
                //if (infor) console.log(infor);
                console.log(user);
                if (user) { console.log(user); return res.status(401).json({adsf: "dsaf"}) }//Exist this username
                req.logIn(user, function (err) {
                    if (err) { return next(err); }
                    let payLoad = {
                        user
                    };
        
                    let token = jwt.sign(payLoad, process.env.ACCESS_TOKEN_SECRET);
                    return res.json({ status: 1, token: token })
                })
            })(req, res, next);
    
        } else {
            return res.json(Enum.Account.paramNotEnough);
        }
    
    }

module.exports = {
    signIn,
    signUp
};