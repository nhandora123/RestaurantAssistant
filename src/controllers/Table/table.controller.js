require('dotenv').config();
const Table = require('../../models/Table/table.model')
const TypeTable = require('../../models/Table/typeTable.model')
const Base = require('../../services/base.service')
//const APIFeatures = require('../../utils/Feature.util');


exports.createOneTable = Base.createOne(Table);
exports.getAllTable = Base.getAll(Table);
//console.log({abc: Base.getAll(Table)})
exports.gettest = async (req, res, next) => {
    try {

        const doc = await Table.find();

        //console.log(doc)

        res.status(200).json(new AppSuccess(200, 'success', {
            results: doc.length,
            data: doc
        }));
    } catch (error) {
        console.log(error);
    }
};

exports.createManyTable = async (req, res, next) => {
    try {
        {
            let doc = [];
            let status = 0;
            for (let index = 1; index < 40; index++) {
                let codeRandomTypeTableRandom = "";
                if (index >= 1 && index <= 10) {
                    codeRandomTypeTableRandom = "BN2N"
                } else if(index >10 && index <=20) {
                    codeRandomTypeTableRandom = "BN4N"
                } else if (index > 20 && index <= 30) {
                    codeRandomTypeTableRandom = "BL2N"
                } else {
                    codeRandomTypeTableRandom = "BL4N"
                }
                status = status == 0 ? 1 : 0;
                doc.push(await Table.create({
                    tableName: "BA" + index.toString(),
                    typeTableId: (await TypeTable.findOne({codeTypeTable: codeRandomTypeTableRandom}))._id,
                    status: status == 0 ? 1 : 0,
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
        }


    } catch (error) {
        next(error);
    }
}
