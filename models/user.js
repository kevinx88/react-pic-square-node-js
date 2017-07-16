const bcrypt = require("bcrypt");

const db = require("../config/database");

let User = {};

User.findAll = () => {
    return db.any(`SELECT * FROM users;`);
}

User.create = (user) => {
    user.password = bcrypt.hashSync(user.password, 10);

    return db.one(`
        INSERT INTO users
        (first_name, last_name, email, password)
        VALUES ($1, $2, $3, $4)
        RETURNING first_name, last_name, email
        `, [user.first_name, user.last_name, user.email, user.password]);
}

User.findByEmail = (user) => {
    return db.oneOrNone(`
        SELECT * FROM users
        WHERE email = $1
        `, [user.email]);
}

module.exports = User;
