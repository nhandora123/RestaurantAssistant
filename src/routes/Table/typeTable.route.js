const express = require('express');
const router = express.Router();
const typeTableController = require('../../controllers/Table/typeTable.controller');

router.post('/createOneTypeTable', typeTableController.createOneTypeTable);

module.exports = router;