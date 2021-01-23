const table = require('../controllers/Table/table.controller');
const Table = require('../models/Table/table.model')
const Base = require('../services/base.service')

let getAllTable =  async(io, socket)=>{
    let x = await (Base.getAll(Table, {}));
    io.sockets.emit("GetAllTable", x);
}

module.exports = getAllTable;
