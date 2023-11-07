import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NotFound } from "./pages/NotFound.jsx";
import { CentroAyuda } from "./pages/CentroAyuda.jsx";
import { VentaTelefonica } from "./pages/VentaTelefonica.jsx";
import { Sucursales } from "./pages/Sucursales.jsx";
import { EnviosDomicilio } from "./pages/EnviosDomicilio.jsx";
import { MiCuenta } from "./pages/MiCuenta.jsx";
import { Favoritos } from "./pages/Favoritos.jsx";
import { MiCarrito } from "./pages/MiCarrito.jsx";
import { Televisores } from "./pages/Televisores.jsx";
import { Celulares } from "./pages/Celulares.jsx";
import { Computadoras } from "./pages/Computadoras.jsx";
import { ExclusivoOnline } from "./pages/ExclusivoOnline.jsx";
import { Ofertas } from "./pages/Ofertas.jsx";
import { Consolas } from "./pages/Consolas.jsx";
import { Tablets } from "./pages/Tablets.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="centro-de-ayuda" element={<CentroAyuda />}></Route>
        <Route path="venta-telefonica" element={<VentaTelefonica />}></Route>
        <Route path="sucursales" element={<Sucursales />}></Route>
        <Route path="envios-domicilio" element={<EnviosDomicilio />}></Route>
        <Route path="miCuenta" element={<MiCuenta />}></Route>
        <Route path="favoritos" element={<Favoritos />}></Route>
        <Route path="miCarrito" element={<MiCarrito />}></Route>
        <Route path="televisores" element={<Televisores />}></Route>
        <Route path="celulares" element={<Celulares />}></Route>
        <Route path="computadoras" element={<Computadoras />}></Route>
        <Route path="videojuegos" element={<Consolas />}></Route>
        <Route path="tablets" element={<Tablets />}></Route>
        <Route path="exclusivo-online" element={<ExclusivoOnline />}></Route>
        <Route path="ofertas" element={<Ofertas />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
