const AccountEnum = require("./Account.util")


let paramNotEnough = new AccountEnum(-1, "PARAM_NOT_ENOUGH", "Tham số không đúng");


const Enum = {
    Account: 
        {
            paramNotEnough: paramNotEnough
        }
}

module.exports = Enum