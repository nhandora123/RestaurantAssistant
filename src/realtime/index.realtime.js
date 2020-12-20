const table = require('../controllers/Table/table.controller');
const Table = require('../models/Table/table.model')
const Base = require('../services/base.service')


let getAllTable =  async(io, socket)=>{

    //io.sockets.emit("GetAllTable", table.getAllTable);
    // let y = table.getAllTable.then((data)=>{
    //     console.log(data);
    // });
    
    let x = await (Base.getAll(Table, {}));
    console.log(x)
    io.sockets.emit("GetAllTable", x);

}

module.exports = getAllTable;
