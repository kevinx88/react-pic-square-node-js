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


controller.show = (req, res) => {
    User.findById(req.params.id)
    .then(user => {
        res.status(200).json(user)
    })
}
controller.login = (req, res) => {
    console.log(req.body);
    User.findByEmail(req.body.email)
    .then(user => {
        res.status(201).json(user)
    })
    .catch(err => console.log(err))
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
