const app = require('express').Router();
const authentication = require('./Account/authentication.route')
const tableRoute = require('./Table/index.table.route');
const initPassport = require('../passport/initSetup')

const passport = require('passport');
app.use(passport.initialize());
app.use(passport.session());
initPassport(passport);

app.use("/authentication", authentication(passport));
app.use("/table", tableRoute)

module.exports = app;