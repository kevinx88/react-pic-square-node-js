const express = require("express");
const router = express.Router();

const controller = require("./controller");

router.route('/login')
.post(controller.login)

router.route('/:id')
    .get(controller.show)
    
router.route("/")
    .get(controller.index)
    .post(controller.create);


module.exports = router;
