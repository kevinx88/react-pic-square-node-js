const express = require('express');
const router = express.Router();

router.use('/images', require('./resources/images'));
router.use('/users', require('./resources/users'));
router.use('/favorites', require('./resources/favorites'));

module.exports = router;
