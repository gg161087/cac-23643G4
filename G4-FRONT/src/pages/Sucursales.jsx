import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import DivSucursales from "../components/DivSucursales.jsx";

export const Sucursales = () => {
  return (
    <Container>
      <h1>SUCURSALES</h1>
      <DivSucursales></DivSucursales>
      <Link to="/">VOLVER AL INICIO</Link>
    </Container>
  );
};
