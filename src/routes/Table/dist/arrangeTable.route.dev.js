"use strict";

var express = require('express');

var router = express.Router();

var arrangementTableController = require('../../controllers/Table/arrangementTable.controller');

router.get('/getManyArrangementTable', arrangementTableController.getManyArrangementTable);
router.post('/createManyArrangementTable', arrangementTableController.createManyTable);
router.post('/deleteManyArrangementTable', arrangementTableController.deleteMany);
module.exports = router;