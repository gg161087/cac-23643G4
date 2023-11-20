// Express
const express = require("express");
const server = express();

// Requerir puerto (.env)
const PORT = process.env.PORT || 3000;

// Dependencias y modulos de Express
// Para leer variables de entorno(las que estan en el archivo .env)
require("dotenv").config();

// Archivos requeridos
require("./data/config");

// Reconocimiento del objeto de solicitud entrante como un objeto JSON
server.use(express.json());

// Reconocimiento del objeto de solicitud entrante como cadenas, matrices o cualquier tipo
server.use(express.urlencoded({ extended: true }));

// Pagina inicial de prueba en el navegador
server.get("/", (req, res) => {
  const content = `
    <h1>Server con Express</h1>
    <pre>Primera prueba de servidor con Node y el framework Express</pre>
    `;
  res.send(content);
});

// -------------------------***Rutas de usuarios***-------------------------
// Rutas /users endpoint
server.use("/users", require("./users/usersRoute"));
// Las 2 lineas de abajo es lo mismo que la linea de arriba
// const userRouter = require("./users/usersRoute");
// server.use("/users", userRouter);

// Rutas no encontradas (404)
server.use((req, res, next) => {
  let error = new Error();
  error.status = 404;
  error.message = "Resource not found";
  next(error);
});

// Controlador de errores (500)
server.use((error, req, res, next) => {
  res
    .status(error.status)
    .json({ status: error.status, message: error.message });
});

// Servidor corriendo...
server.listen(PORT, (err) => {
  err
    ? console.log(`Error: ${err}`)
    : console.log(`App corre en http://localhost:${PORT}`);
});
