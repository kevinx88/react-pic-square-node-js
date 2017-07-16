DROP DATABASE IF EXISTS pic_square_db;
CREATE DATABASE pic_square_db;

-- \connect picsquares_db;

DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255)
);

DROP TABLE IF EXISTS images;

CREATE TABLE images (
    id SERIAL PRIMARY KEY,
    img_url VARCHAR(255),
    user_id INTEGER REFERENCES users(id)
);

DROP TABLE IF EXISTS favorites;

CREATE TABLE favorites (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    images_id INTEGER REFERENCES images(id),
    CONSTRAINT u_record UNIQUE (user_id, images_id)
);

INSERT INTO users
(first_name, last_name, email, password)
VALUES
('Thiago','Brandao','thiago@thiago.com','julia'),
('Kevin','Xu','kevin@kevin.com','kevin'),
('Julia','Kim','julia@julia.com','julia');

INSERT INTO images
(img_url, user_id)
VALUES
('http://i.imgur.com/m5cwPsi.jpg', 1),
('http://i.imgur.com/keiDwzq.png', 1);
