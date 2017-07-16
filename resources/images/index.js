const express = require('express');
const router = express.Router();

const controller = require('./controller');

router.route('/')
.get(controller.index)
.post(controller.create);

router.route('/:id')
.get(controller.show)

module.exports = router;
