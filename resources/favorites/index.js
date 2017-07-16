const express = require('express');
const router = express.Router();

const controller = require('./controller');

router.route("/")
    .get(controller.index)
    .post(controller.save);

router.route("/:id")
    .get(controller.show)
    .delete(controller.destroy);

module.exports = router;
