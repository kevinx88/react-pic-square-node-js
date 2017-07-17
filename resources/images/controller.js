const Image = require('../../models/images');

let controller = {};

controller.index = (req, res) => {
    Image.findAll()
    .then((images) => {
        res
        .status(200)
        .json(images);
    })
    .catch((err) => {
        res
        .status(400)
        .json(err);
    });
}

controller.create = (req, res) => {
    Image
    .create(req.body.image, req.user)
    .then((image) => {
        res
        .status(201)
        .json(image);
    })
    .catch((err) => {
        res
        .status(400)
        .json(err);
    });
}

controller.show = (req, res) => {
    Image
    .findById(req.params.id)
    .then((image) => {
        res
        .status(200)
        .json(image);
    })
    .catch((err) => {
        res
        .status(400)
        .json(err);
    });
}

module.exports = controller;
