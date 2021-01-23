const {ErrorUtil, SuccessUtil} = require("./response.util")


let paramNotEnough = new ErrorUtil(201,-1, "Tham số không đúng");


const Enum = {
    Account: 
        {
            paramNotEnough: paramNotEnough
        }
}

module.exports = Enum