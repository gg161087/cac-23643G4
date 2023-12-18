import { Link } from "react-router-dom";

import DivSucursales from "../components/DivSucursales.jsx";

export const Sucursales = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center">SUCURSALES</h1>
      <DivSucursales></DivSucursales>
      <Link to="/">VOLVER AL INICIO</Link>
    </div>
  );
};
