/*En este archivo pondremos la referencia a la ruta asociada y, si las hubiera, 
subrutas (por ejemplo, podríamos recibir todas las peticiones de /users, pero también de /users/otracosa... etc). 
Luego de recibir la petición diferenciando el verbo HTTP, enviaríamos al controlador apropiado. Si hubiera middlewares, 
se aplicarían en este archivo, entre la petición y el controlador*/

// const express = require("express");
// const routes = express.Router();
// Las 2 lineas de arriba es lo mismo que la linea de abajo
const {
  listAll,
  listOne,
  register,
  login,
  removeOne,
  editOne,
} = require("./usersControl");
const router = require("express").Router();
const { validatorCreateUser } = require("../validators/users");

//get all users
router.get("/", listAll);

//get user by id
router.get("/:id", listOne);

//Register new user
router.post("/register", validatorCreateUser, register);
//Login user
router.post("/login", login);

//patch user
router.patch("/:id", editOne);

//delete user by ID
router.delete("/:id", removeOne);

module.exports = router;
