const express = require('express');
const router = express.Router();
const arrangementTableController = require('../../controllers/Table/arrangementTable.controller')

//router.get('/',areaController.getAllArea);
router.post('/createManyArrangementTable', arrangementTableController.createManyTable);
//router.post('/deleteManyArrangementTable', arrangementTableController.)

module.exports = router;