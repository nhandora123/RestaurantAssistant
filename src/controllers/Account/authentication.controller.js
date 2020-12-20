require('dotenv').config();
const User = require('../../models/Account/user.model');
const jwt = require('jsonwebtoken')
const Enum = require('../../utils/index.enum')

const signIn = (passport) => function (req, res, next) {

    const { username, password } = req.body;

    if (username && password ) {

        passport.authenticate('signIn', function (err, user, info) {

            if (!user) { return res.status(401).json(err) }//Don't exist this username
        
            req.logIn(user, function (err) {
                if (err) { return next(err); }

                let payLoad = {
                    // _id: user._id,
                    username: user.username,
                    fullname: user.fullname,
                    //picture: user.picture
                };

                let token = jwt.sign(payLoad, process.env.ACCESS_TOKEN_SECRET);
                return res.json({ status: 1, token: token });// Success

            });
        })(req, res, next);
    } else {
        return res.json({status: -1})
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