CREATE DATABASE db_g4;

USE db_g4;

CREATE TABLE categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);
CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    brand VARCHAR(255) NOT NULL,
    model VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    stock INT NOT NULL,
    discount DECIMAL(5, 2) NOT NULL,
    sku VARCHAR(50) NOT NULL,
    dues INT NOT NULL,
    imgUrl VARCHAR(255),
    category_id INT,
    FOREIGN KEY (category_id) REFERENCES categories(category_id)
);
CREATE TABLE product_specifications (
   id INT AUTO_INCREMENT PRIMARY KEY,
   product_id INT,
   name VARCHAR(100) NOT NULL,
   type VARCHAR(50) NOT NULL,
   value VARCHAR(255),
   FOREIGN KEY (product_id) REFERENCES products(product_id)
);

CREATE TABLE users (
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name varchar(100) NOT NULL,
    userName varchar(50) NOT NULL,
    email varchar(255) NOT NULL,
);

-- Ejemplo:
INSERT INTO categories (category_id, category_name)
VALUES (1, 'celular');
INSERT INTO products (id, brand, model, description, price, stock, discount, sku, dues, imgUrl, category_id)
VALUES (1, 'Samsung', 'Galaxy S20', 'El último smartphone de Samsung', 999.99, 50, 10, 'S20-001', 12, 'url_de_la_imagen', 1);
INSERT INTO product_specifications (product_id, name, type, value)
VALUES (1, 'Pantalla', 'String', 'Dynamic AMOLED 2X, 6.2 pulgadas');

-- Para el procesador
INSERT INTO product_specifications (product_id, name, type, value)
VALUES (1, 'Procesador', 'String', 'Exynos 990');

-- Para la memoria RAM
INSERT INTO product_specifications (product_id, name, type, value)
VALUES (1, 'RAM', 'Number', '8');

-- Para el almacenamiento interno
INSERT INTO product_specifications (product_id, name, type, value)
VALUES (1, 'Almacenamiento interno', 'String', '128 GB');

-- Para la cámara
INSERT INTO product_specifications (product_id, name, type, value)
VALUES (1, 'Cámara', 'String', 'Triple cámara trasera: 12 MP (principal) + 64 MP (telefoto) + 12 MP (ultra gran angular)');

insert into users values(null, "Leanne Graham", "Bret", "sincere@april.biz");
insert into users values(null, "Ervin Howell", "Antonette", "shanna@melissa.tv");
insert into users values(null, "Clementine Bauch", "Samantha", "nathan@yesenia.net");
insert into users values(null, "Patricia Lebsack", "Karianne", "julianne.oconner@kory.org");
insert into users values(null, "Chelsey Dietrich", "Kamren", "lucio_hettinger@annie.ca");
insert into users values(null, "Dennis Schulist", "Leopoldo_Corkery", "karley_dach@jasper.info");
insert into users values(null, "Kurtis Weissnat", "Elwyn.Skiles", "Telly.hoeger@billy.biz");
insert into users values(null, "Nicholas Runolfsdottir V", "Maxime_Nienow","sherwood@rosamond.me");
insert into users values(null, "Glenna Reichert", "Delphine","chaim_mcdermott@dana.io");
insert into users values(null, "Clementina DuBuque", "Moriah.stanton", "rey.padberg@karina.biz");