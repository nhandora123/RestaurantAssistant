const router = require('express').Router()
const tableController = require('../../controllers/Table/table.controller')


//router.get('/', tableController.)
router.post('/createOneTable', tableController.createOneTable)

router.post('/createManyTables', tableController.createManyTable)

router.get('/getAllTable', tableController.getAllTable)

module.exports = router;