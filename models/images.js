const db = require("../config/database");

let Image = {};

Image.findAll = () => {
    return db.any(`
        SELECT images.id, img_url, favorites.user_id FROM images
        LEFT OUTER JOIN favorites ON
        images.id = favorites.images_id;
        `);
}

Image.create = (image, user) => {
    return db.one(`
        INSERT INTO images
        (img_url, user_id)
        VALUES ($1, $2)
        RETURNING *
        `, [image.img_url, user.id
        ]);
}

Image.findById = (id) => {
    return db.oneOrNone(`
        SELECT * FROM images
        WHERE id = $1
        `, [id]);
}

module.exports = Image;
