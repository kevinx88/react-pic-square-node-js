const User = require("../../models/user");

let controller = {};

controller.index = (req, res) => {
    User
    .findAll()
    .then((user) => {
        res
        .status(201)
        .json(user);
    })
    .catch((err) => {
        res
        .status(400)
        .json(err);
    });
}

controller.create = (req, res) => {
    User
    .create(req.body.user)
    .then((user) => {
        res
        .status(201)
        .json(user);
    })
    .catch((err) => {
        res
        .status(400)
        .json(err);
    });
}

module.exports = controller;
