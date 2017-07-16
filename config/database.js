const pgp = require("pg-promise")({});

let config;

if (process.env.NODE_ENV === "text") {
    config = {
        host: "localhost",
        database: "pic_square_db",
        port: 5432,
        user: "kevinxu"
    }
} else {
    config = {
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        port: process.env.DB_PORT,
        user: process.env.DB_USER
    }
}

let db;

if (process.env.NODE_ENV === "production") {
    db = pgp(process.env.DATABASE_URL);
} else {
    db = pgp(config);
}

module.exports = db;
