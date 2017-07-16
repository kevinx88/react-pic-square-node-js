const db = require("../config/database");

let Favorite = {};

Favorite.favoritesIndex = (user) => {
    return db.any(`
        SELECT *
        FROM images
        INNER JOIN favorites
        ON favorites.images_id = images.id
        WHERE favorites.user_id = $1;
    `, [user.id]);
}

Favorite.saveImage = (user, restaurant) => {
    return db.one(`
        INSERT INTO favorites
        (user_id,
        images_id)
        VALUES
        ($1, $2)
        RETURNING *
    `, [user.id, image.images_id])
}

Favorite.findById = (user, id) => {
    return db.oneOrNone(`
        SELECT * FROM images
        INNER JOIN favorites
        ON favorites.images_id = images.id
        WHERE favorites.user_id = $1
        AND favorites.id = $2
    `, [user.id, id]);
}

Favorite.destroy = (user, id) => {
    return db.none(`
        DELETE FROM favorites
        WHERE user_id = $1
        AND id = $2
    `, [user.id, id]);
}

module.exports = Favorite;
