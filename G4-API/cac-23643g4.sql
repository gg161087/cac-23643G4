-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 13-12-2023 a las 14:42:14
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `cac-23643g4`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `branch_offices`
--

CREATE TABLE `branch_offices` (
  `id` int(11) NOT NULL,
  `province_id` int(11) DEFAULT NULL,
  `departments` varchar(50) DEFAULT NULL,
  `address` varchar(100) DEFAULT NULL,
  `telephone` varchar(20) DEFAULT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `branch_offices`
--

INSERT INTO `branch_offices` (`id`, `province_id`, `departments`, `address`, `telephone`, `createdAt`, `updatedAt`) VALUES
(1, 1, 'Avellaneda', 'asd 123', '1151156987', '2023-12-05 10:30:13', '2023-12-05 10:30:13'),
(2, 1, 'Pergamino', 'asd 123', '1151256987', '2023-12-05 10:30:13', '2023-12-05 10:30:13'),
(3, 1, 'San Miguel', 'asd 123', '1151356987', '2023-12-05 10:30:13', '2023-12-05 10:30:13'),
(4, 2, 'Córdoba', 'asd 123', '35152156987', '2023-12-05 10:30:13', '2023-12-05 10:30:13'),
(5, 2, 'Río Cuarto', 'asd 123', '35152256987', '2023-12-05 10:30:13', '2023-12-05 10:30:13'),
(6, 2, 'Río Segundo', 'asd 123', '35152356987', '2023-12-05 10:30:13', '2023-12-05 10:30:13'),
(7, 3, 'General Güemes', 'asd 123', '38753156987', '2023-12-05 10:30:13', '2023-12-05 10:30:13'),
(8, 3, 'Orán', 'asd 123', '38753256987', '2023-12-05 10:30:13', '2023-12-05 10:30:13'),
(9, 3, 'Salta', 'asd 123', '38753356987', '2023-12-05 10:30:13', '2023-12-05 10:30:13'),
(10, 4, 'Rafaela', 'asd 123', '34054156987', '2023-12-05 10:30:13', '2023-12-05 10:30:13'),
(11, 4, 'Rosario', 'asd 123', '34054256987', '2023-12-05 10:30:13', '2023-12-05 10:30:13'),
(12, 4, 'Santa Fe', 'asd 123', '34054356987', '2023-12-05 10:30:13', '2023-12-05 10:30:13'),
(13, 5, 'Concepción', 'asd 123', '38155156987', '2023-12-05 10:30:13', '2023-12-05 10:30:13'),
(14, 5, 'Famaillá', 'asd 123', '38155256987', '2023-12-05 10:30:13', '2023-12-05 10:30:13'),
(15, 5, 'San Miguel de Tucumán', 'asd 123', '38155356987', '2023-12-05 10:30:13', '2023-12-05 10:30:13');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `categories`
--

INSERT INTO `categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'celulares', NULL, NULL),
(2, 'computadoras', NULL, NULL),
(3, 'televisores', NULL, NULL),
(4, 'consolas', NULL, NULL),
(5, 'tablets', NULL, NULL),
(6, 'online', '2023-12-13 13:28:50', '2023-12-13 13:28:50');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `brand` varchar(255) NOT NULL,
  `model` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `price` decimal(10,2) NOT NULL,
  `stock` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `discount` decimal(5,2) NOT NULL,
  `sku` varchar(50) NOT NULL,
  `dues` int(11) NOT NULL,
  `imgUrl` text DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `brand`, `model`, `description`, `price`, `stock`, `quantity`, `discount`, `sku`, `dues`, `imgUrl`, `category_id`, `createdAt`, `updatedAt`) VALUES
(1, 'Samsung', 'Galaxy S20', 'El último smartphone de Samsung', 999.99, 50, 1, 10.00, 'S20-001', 6, 'https://http2.mlstatic.com/D_NQ_NP_716191-MLA44281674442_122020-O.webp', 1, NULL, '2023-12-12 15:03:17'),
(2, 'Apple', 'iPhone 12', 'El último smartphone de Apple', 1099.99, 30, 1, 5.00, 'iPhone12-001', 12, 'https://http2.mlstatic.com/D_NQ_NP_743195-MLA45719932493_042021-O.webp', 1, NULL, '2023-12-12 15:03:25'),
(3, 'Sony', 'PlayStation 5', 'La última consola de Sony', 499.99, 20, 1, 0.00, 'PS5-001', 3, 'https://http2.mlstatic.com/D_NQ_NP_674875-MLU72745881148_112023-O.webp', 4, NULL, '2023-12-12 15:03:32'),
(4, 'LG', 'OLED CX', 'Televisor OLED de alta gama', 1499.99, 25, 1, 15.00, 'OLED-CX-001', 12, 'https://http2.mlstatic.com/D_NQ_NP_749310-MLA53433735956_012023-O.webp', 3, NULL, '2023-12-12 15:03:39'),
(5, 'Apple', 'MacBook Pro', 'Potente portátil para profesionales', 1999.99, 20, 1, 8.00, 'MacBookPro-001', 12, 'https://http2.mlstatic.com/D_NQ_NP_801112-MLA46516512347_062021-O.webp', 2, NULL, '2023-12-12 15:03:46'),
(6, 'Motorola', 'Moto G G32', 'Potente portátil para profesionales', 1999.99, 20, 1, 10.00, 'MOTOG001G32', 6, 'https://images.fravega.com/f500/e724f044c05db50495f6066c5d474f22.jpg', 1, NULL, '2023-12-12 15:03:53'),
(8, 'Lenovo', 'IdeaPad 15ITL05', 'Potente portátil para profesionales', 1200.00, 20, 1, 20.00, 'LENOVO015ITL05', 9, 'https://d1zktoovjdma6n.cloudfront.net/media/catalog/product/cache/2868dafe2b4ec8474f3b444cfc8b532a/e/s/eshop_x515ja-bq2678w_1.png', 2, NULL, '2023-12-12 15:04:02'),
(9, 'HP', '15-EF2081MS', 'Potente portátil para profesionales', 1200.00, 20, 1, 20.00, '4W2K4UA', 9, 'https://http2.mlstatic.com/D_NQ_NP_889990-MLA51839158430_102022-O.webp', 2, NULL, '2023-12-12 15:04:10'),
(10, 'Samsung', 'Galaxy Tab A8', 'Potente portátil para profesionales', 300.00, 20, 1, 20.00, 'SMX200', 9, 'https://http2.mlstatic.com/D_NQ_NP_883247-MLU72272571534_102023-O.webp', 5, NULL, '2023-12-12 15:04:17'),
(11, 'Apple', 'iPad 9na', 'Potente portátil para profesionales', 400.00, 20, 1, 20.00, 'A2602', 9, 'https://http2.mlstatic.com/D_NQ_NP_994609-MLA47871010530_102021-O.webp', 5, NULL, '2023-12-12 15:04:24'),
(12, 'Level Up', 'Ares Ryn', 'Apoyacabezas regulables en altura y giratorio. Almohadillas apoya cervical y lumbar. Respaldo reclinable 170 (modo trabajo 90, modo lectura 130, modo descanso 170). Apoyabrazos confortable. Confortable sistema de sujeción. Marco de acero.', 179.99, 5, 1, 0.00, 'SGLUAR1', 12, 'https://coppelar.vtexassets.com/arquivos/ids/1870642-1200-auto?v=638377870029800000&width=1200&height=auto&aspect=true', 6, '2023-12-13 10:33:09', '2023-12-13 10:33:09'),
(13, 'Level Up', 'Bushmaster Transparente', 'Joystick compatible para Ps4 Ps3 y Pc. Peso óptimo para mejor confort.', 48.99, 5, 1, 5.00, 'JLUBT01', 12, 'https://coppelar.vtexassets.com/arquivos/ids/1875927-1200-auto?v=638379894259570000&width=1200&height=auto&aspect=true', 6, '2023-12-13 10:36:22', '2023-12-13 10:36:22');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `product_imgsurls`
--

CREATE TABLE `product_imgsurls` (
  `id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `img_url` text NOT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `product_imgsurls`
--

INSERT INTO `product_imgsurls` (`id`, `product_id`, `img_url`, `createdAt`, `updatedAt`) VALUES
(1, 2, 'https://http2.mlstatic.com/D_NQ_NP_784571-MLA45729987876_042021-O.webp', NULL, '2023-12-11 23:13:28'),
(2, 2, 'https://http2.mlstatic.com/D_NQ_NP_915882-MLA45730353081_042021-O.webp', NULL, '2023-12-11 23:14:06'),
(3, 2, 'https://http2.mlstatic.com/D_NQ_NP_688182-MLA45730353083_042021-O.webp', NULL, '2023-12-11 23:14:22'),
(4, 2, 'https://http2.mlstatic.com/D_NQ_NP_741474-MLA46104512792_052021-O.webp', NULL, '2023-12-11 23:14:35'),
(6, 10, 'https://http2.mlstatic.com/D_NQ_NP_614641-MLU72748616617_112023-O.webp', '2023-12-06 12:10:20', '2023-12-11 23:16:01'),
(7, 10, 'https://http2.mlstatic.com/D_NQ_NP_717500-MLU72630961370_112023-O.webp', '2023-12-06 12:10:51', '2023-12-11 23:16:13'),
(8, 10, 'https://http2.mlstatic.com/D_NQ_NP_703358-MLU72748588279_112023-O.webp', '2023-12-06 12:11:23', '2023-12-11 23:16:26'),
(9, 10, 'https://http2.mlstatic.com/D_NQ_NP_747438-MLU69492859693_052023-O.webp', '2023-12-06 12:11:23', '2023-12-11 23:16:42'),
(10, 1, 'https://http2.mlstatic.com/D_NQ_NP_658507-MLA44281674445_122020-O.webp', '2023-12-06 12:13:03', '2023-12-11 23:00:57'),
(11, 1, 'https://http2.mlstatic.com/D_NQ_NP_784247-MLA44281644545_122020-O.webp', '2023-12-06 12:13:38', '2023-12-11 23:06:52'),
(12, 1, 'https://http2.mlstatic.com/D_NQ_NP_960888-MLA44281644546_122020-O.webp', '2023-12-06 12:13:38', '2023-12-11 23:07:13');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `product_specifications`
--

CREATE TABLE `product_specifications` (
  `id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `value` varchar(255) NOT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `product_specifications`
--

INSERT INTO `product_specifications` (`id`, `product_id`, `name`, `value`, `createdAt`, `updatedAt`) VALUES
(1, 1, 'Pantalla', 'Dynamic AMOLED 2X, 6.2 pulgadas', NULL, NULL),
(2, 1, 'Procesador', 'Exynos 990', NULL, NULL),
(3, 1, 'RAM', '8GB', NULL, NULL),
(4, 1, 'Almacenamiento interno', '128 GB', NULL, NULL),
(5, 1, 'Cámara', 'Triple cámara trasera: 12 MP (principal) + 64 MP (telefoto) + 12 MP (ultra gran angular)', NULL, NULL),
(6, 2, 'Pantalla', 'Super Retina XDR, 6.1 pulgadas', NULL, NULL),
(7, 2, 'Procesador', 'A14 Bionic', NULL, NULL),
(8, 2, 'RAM', '4GB', NULL, NULL),
(9, 2, 'Almacenamiento interno', '256GB', NULL, NULL),
(10, 2, 'Cámara', 'Doble cámara trasera: 12 MP (principal) + 12 MP (ultra gran angular)', NULL, NULL),
(11, 3, 'Tipo', 'Consola de videojuegos', NULL, NULL),
(12, 3, 'Almacenamiento', '825GB SSD', NULL, NULL),
(13, 3, 'Unidad óptica', 'Unidad de disco Blu-ray Ultra HD', NULL, NULL),
(14, 3, 'Unidad óptica', 'Unidad de disco Blu-ray Ultra HD', NULL, NULL),
(15, 4, 'Tipo de pantalla', 'OLED', NULL, NULL),
(16, 4, 'Tamaño de pantalla', '55 pulgadas', NULL, NULL),
(17, 4, 'Resolución', '4K UHD', NULL, NULL),
(18, 5, 'Procesador', 'Intel Core i7 6-core', NULL, NULL),
(19, 5, 'RAM', '16GB', NULL, NULL),
(20, 5, 'Almacenamiento SSD', '512GB', NULL, NULL),
(21, 5, 'Sistema operativo', 'macOS', NULL, NULL),
(22, 6, 'Procesador', 'Snapdragon 680 4G 2.4 GHz', NULL, NULL),
(23, 6, 'GPU', 'Adreno 610 1.1 GHz', NULL, NULL),
(24, 6, 'Pantalla', '6.49 pulgadas', NULL, NULL),
(25, 6, 'Bateria', '5000 mAh', NULL, NULL),
(26, 6, 'Peso', '180gr.', NULL, NULL),
(27, 8, 'Procesador', 'AMD Ryzen 7 5700U', NULL, NULL),
(28, 8, 'GPU', 'Intel UHD Graphics G1 (Ice Lake 32 EU)', NULL, NULL),
(29, 8, 'Pantalla', '15.6 pulgadas', NULL, NULL),
(30, 8, 'Resolución', '1366px x 768px', NULL, NULL),
(31, 8, 'RAM', '12GB DDR4 3200MHz', NULL, NULL),
(32, 9, 'Procesador', 'Intel Core i7 1165G7', NULL, NULL),
(33, 9, 'GPU', 'Intel Iris Xe Graphics G7 96EUs', NULL, NULL),
(34, 9, 'Pantalla', '15.6 pulgadas', NULL, NULL),
(35, 9, 'Resolucion', '1920px x 1080px', NULL, NULL),
(36, 9, 'RAM', '8GB DDR4 3200MHz', NULL, NULL),
(37, 10, 'Procesador', 'Mali-G52 MP2 2GHz', NULL, NULL),
(38, 10, 'Bateria', '7040mAh', NULL, NULL),
(39, 10, 'Pantalla', '10.5 pulgadas', NULL, NULL),
(40, 10, 'Resolucion', '1920px x 1080px', NULL, NULL),
(41, 10, 'RAM', '4GB', NULL, NULL),
(42, 11, 'Procesador', 'Kryo 385 Gold 2.8GHz', NULL, NULL),
(43, 11, 'Bateria', '7040mAh', NULL, NULL),
(44, 11, 'Pantalla', '10.2 pulgadas', NULL, NULL),
(45, 11, 'Resolucion', '2160px x 1620px', NULL, NULL),
(46, 11, 'RAM', '3GB', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `provinces`
--

CREATE TABLE `provinces` (
  `id` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `provinces`
--

INSERT INTO `provinces` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'Buenos Aires', '2023-12-05 10:30:03', '2023-12-05 10:30:03'),
(2, 'Córdoba', '2023-12-05 10:30:03', '2023-12-05 10:30:03'),
(3, 'Salta', '2023-12-05 10:30:03', '2023-12-05 10:30:03'),
(4, 'Santa Fe', '2023-12-05 10:30:03', '2023-12-05 10:30:03'),
(5, 'Tucumán', '2023-12-05 10:30:03', '2023-12-05 10:30:03');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'administrator', '2023-12-04 19:12:02', '2023-12-04 19:12:02'),
(2, 'guest', '2023-12-04 19:12:02', '2023-12-12 10:48:16'),
(3, 'seller', '2023-12-04 19:12:02', '2023-12-12 10:48:21'),
(4, 'client', '2023-12-04 19:12:02', '2023-12-12 10:48:27');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `subscriber_newsletters`
--

CREATE TABLE `subscriber_newsletters` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `subscriber_newsletters`
--

INSERT INTO `subscriber_newsletters` (`id`, `email`, `createdAt`, `updatedAt`) VALUES
(1, 'test@test.com', '2023-12-06 16:49:37', '2023-12-06 16:53:55'),
(2, 'registrado@itechnology.com', '2023-12-06 19:59:27', '2023-12-06 19:59:27'),
(3, 'desdelaweb@ejemplo.com', '2023-12-06 20:03:35', '2023-12-06 20:03:35');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `telephone` varchar(13) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(100) NOT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `last_name`, `telephone`, `email`, `password`, `createdAt`, `updatedAt`) VALUES
(1, 'Administrador', 'Itechnology', '542215123478', 'admin@itechnology.com', '$2b$10$DwS8ByBVKeeKmMj9vGVHb.bAazoDI9JklgZKOjGNL22NJbC8vX92a', '2023-12-12 14:11:34', '2023-12-12 14:11:34');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user_roles`
--

CREATE TABLE `user_roles` (
  `user_id` int(11) NOT NULL,
  `role_id` int(11) NOT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `user_roles`
--

INSERT INTO `user_roles` (`user_id`, `role_id`, `createdAt`, `updatedAt`) VALUES
(1, 2, '2023-12-12 14:11:34', '2023-12-12 14:11:34');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `branch_offices`
--
ALTER TABLE `branch_offices`
  ADD PRIMARY KEY (`id`),
  ADD KEY `province_id` (`province_id`);

--
-- Indices de la tabla `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `unique_name` (`name`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `product_imgsurls`
--
ALTER TABLE `product_imgsurls`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indices de la tabla `product_specifications`
--
ALTER TABLE `product_specifications`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indices de la tabla `provinces`
--
ALTER TABLE `provinces`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `unique_name` (`name`);

--
-- Indices de la tabla `subscriber_newsletters`
--
ALTER TABLE `subscriber_newsletters`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `unique_email` (`email`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `unique_email` (`email`);

--
-- Indices de la tabla `user_roles`
--
ALTER TABLE `user_roles`
  ADD PRIMARY KEY (`user_id`,`role_id`),
  ADD KEY `role_id` (`role_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `product_imgsurls`
--
ALTER TABLE `product_imgsurls`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `subscriber_newsletters`
--
ALTER TABLE `subscriber_newsletters`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `branch_offices`
--
ALTER TABLE `branch_offices`
  ADD CONSTRAINT `branch_offices_ibfk_1` FOREIGN KEY (`province_id`) REFERENCES `provinces` (`id`);

--
-- Filtros para la tabla `product_imgsurls`
--
ALTER TABLE `product_imgsurls`
  ADD CONSTRAINT `product_imgsurls_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `product_specifications`
--
ALTER TABLE `product_specifications`
  ADD CONSTRAINT `product_specifications_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `user_roles`
--
ALTER TABLE `user_roles`
  ADD CONSTRAINT `user_roles_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `user_roles_ibfk_2` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
