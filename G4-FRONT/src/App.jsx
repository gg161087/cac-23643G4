import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header } from "./partials/Header.jsx";
import { Footer } from "./partials/Footer.jsx";

import { Home } from "./pages/Home.jsx";
import { NotFound } from "./pages/NotFound.jsx";
import { ProductDetail } from "./pages/ProductDetail.jsx";
import CentroAyuda from "./pages/CentroAyuda.jsx";
import { VentaTelefonica } from "./pages/VentaTelefonica.jsx";
import { Sucursales } from "./pages/Sucursales.jsx";
import { EnviosDomicilio } from "./pages/EnviosDomicilio.jsx";
import { MiCuenta } from "./pages/MiCuenta.jsx";
import { Favoritos } from "./pages/Favoritos.jsx";
import { MiCarrito } from "./pages/MiCarrito.jsx";
import { ExclusivoOnline } from "./pages/ExclusivoOnline.jsx";
import { Ofertas } from "./pages/Ofertas.jsx";
import { ProductsFiltered } from "./pages/ProductsFiltered.jsx";

import { getDinamic } from "./utils/getDinamic.js";

export const App = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const response = await getDinamic("data/categories.json");
      setCategories(response);
    };
    getCategories();
  }, []);

  return (
    <BrowserRouter>
      <Header categories={categories} />
      <main>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="centro-de-ayuda" element={<CentroAyuda />} />
          <Route path="venta-telefonica" element={<VentaTelefonica />}></Route>
          <Route path="sucursales" element={<Sucursales />}></Route>
          <Route path="envios-domicilio" element={<EnviosDomicilio />}></Route>
          <Route path="miCuenta" element={<MiCuenta />}></Route>
          <Route path="favoritos" element={<Favoritos />}></Route>
          <Route path="miCarrito" element={<MiCarrito />}></Route>
          <Route path=":product/:id" element={<ProductDetail />}></Route>
          <Route path=":product" element={<ProductsFiltered />}></Route>
          <Route path="exclusivo-online" element={<ExclusivoOnline />}></Route>
          <Route path="ofertas" element={<Ofertas />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};
