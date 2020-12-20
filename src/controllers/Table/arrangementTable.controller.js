require('dotenv').config();
const ArrangementTable = require('../../models/Table/arrangementTable.model');
const Table = require('../../models/Table/table.model')
const Area = require('../../models/Table/area.model')
const Base = require('../base.controller');

exports.createManyTable = async (req, res, next) => {
    try {
            let doc = [];
            ix = 0;
            for (let index = 0; index < 4; index++) {
                let tables = [];

                for (let yndex = index*10; yndex < (index+1)*10; yndex++) {
                    tables.push((await Table.findOne({tableName: "BA"+yndex}))._id)
                }

                doc.push(await ArrangementTable.create({
                    areaId: (await Area.findOne({ areaName: (index+1).toString() }))._id,
                    tables: tables,
                    siteId: 1,
                    storeId: "1"
                }));
            }

            res.status(201).json({
                status: 'success',
                data: {
                    doc
                }
            });

    } catch (error) {
        next(error);
    }

}

//exports.deleteMany