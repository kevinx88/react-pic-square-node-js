const Favorite = require('../../models/favorite');

let controller = {};

controller.index = (req, res) => {
    Favorite
    .favoritesIndex(req.user)
    .then((favorites) => {
        res
        .status(200)
        .json(favorites);
    })
    .catch((err) => {
        res
        .status(400)
        .json(err);
    });
}

controller.save = (req, res) => {
    Favorite
    .saveImage(req.user, req.body)
    .then((data) => {
        res
        .sendStatus(201);
    })
    .catch((err) => {
        res.send(err);
    });
}

controller.show = (req, res) => {
    Image
    .findById(req.user, req.params.id)
    .then((data) => {
        res
        .status(201)
        .json(data);
    })
    .catch((err) => {
        res.send(err);
    });
}

controller.destroy = (req, res) => {
    Favorite
    .destroy(req.user, req.params.id)
    .then(() => {
        res
        .sendStatus(200);
    })
    .catch((err) => {
        res
        .status(400)
        .json(err);
    });
}

module.exports = controller;
