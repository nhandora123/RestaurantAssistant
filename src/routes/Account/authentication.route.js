const express = require('express');
const router = express.Router();
const authentication = require('../../controllers/Account/authentication.controller');

const apiCredential = (passport) => {

    const isAuthenticatedNeedToSignOut = (req, res, next) => {
        if (!req.isAuthenticated()) {
            return next();
        }
        res.json({
            status: 0,
            message: 'You have to sign out your account then must be sign up!',
        })
    }
    const isAuthenticatedNeedToSignIn = (req, res, next) => {
        if (req.isAuthenticated()) {
            return next();
        }
        res.json({ status: 0 });//message: 'Or you have to sign in before then you can sign out!'
    }

    router.post('/signIn', authentication.signIn(passport));
    router.post('/signUp', isAuthenticatedNeedToSignOut, authentication.signUp(passport));
    router.get('/signOut', isAuthenticatedNeedToSignIn, (req, res) => {
        req.logout();
        res.json({ status: 1 });//Sign Out success
    })
    return router;
}

module.exports = apiCredential;