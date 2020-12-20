const router = require('express').Router({mergeParams: true});
const areaRoute = require('./area.route');
const tableRoute = require('./table.route');
const typeTableRoute = require('./typeTable.route');
const arrangementTableRoute = require('./arrangeTable.route');

router.use('/area/', areaRoute);
router.use('/table/', tableRoute);
router.use('/typeTable/', typeTableRoute);
router.use('/arrangementTable/', arrangementTableRoute);

module.exports = router;