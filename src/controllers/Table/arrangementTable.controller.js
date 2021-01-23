require('dotenv').config();
const ArrangementTable = require('../../models/Table/arrangementTable.model');
const Table = require('../../models/Table/table.model')
const Area = require('../../models/Table/area.model')
const Base = require('../../services/base.service')

exports.getManyArrangementTable = 
        // async (req, res, next) =>{
        //     console.log(req.query);
        //     res.json( await ArrangementTable.find({siteId: 1, storeId: "1"})
        //     .populate({path: "area", select: "areaName areUnit"})
        //     .populate({path:"tables", select: "tableName"})
        //     .sort({'area.areaName': 1}))
        // }

        Base.getAll(ArrangementTable, {
            populates: [{path: "area", select: "areaName areaUnit"},
             {path:"tables", select: "tableName status"}],
            conditions: {siteId: 1, storeId: "1"}
            })
        
        //data.push(await ArrangementTable.find());


exports.createManyTable = async (req, res, next) => {
    try {
            
            let data = new Array();
            //let lenghtData = await ArrangementTable.;
            //if(lenghtData==0){
                ix = 0;
                for (let index = 0; index < 4; index++) {
                    let tables = [];
    
                    for (let yndex = index*10; yndex < (index+1)*10; yndex++) {
                        var table = (await Table.findOne({tableName: "BA"+yndex}))
                        if( table!= null){
                            tables.push(table._id)
                        }
                    }
                    let area = (await Area.findOne({ areaName: (index+1).toString() }))
                    
                    data.push(await ArrangementTable.create({
                        area: area._id,
                        tables: tables,
                        siteId: 1,
                        storeId: "1"
                    }));
                }
            //}
            res.status(201).json({
                status: 'success',
                data: data
            });

    } catch (error) {
        next(error);
    }

}

exports.deleteMany = async (req, res, next)=>{
    try{
        ArrangementTable.deleteMany();

    }catch(error){
        next(error);
    }
    
}