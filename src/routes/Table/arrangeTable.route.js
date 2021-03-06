const express = require('express');
const router = express.Router();
const arrangementTableController = require('../../controllers/Table/arrangementTable.controller')

router.get('/getManyArrangementTable', arrangementTableController.getManyArrangementTable);
router.post('/createManyArrangementTable', arrangementTableController.createManyTable);
router.post('/deleteManyArrangementTable', arrangementTableController.deleteMany);

module.exports = router;