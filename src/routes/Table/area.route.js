const express = require('express');
const router = express.Router();
const areaController = require('../../controllers/Table/area.controller')

router.get('/',areaController.getAllArea);
router.post('/createOneArea', areaController.createOneArea);

module.exports = router;