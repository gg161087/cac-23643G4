import { useState } from "react";
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
import { Login } from "./pages/Login.jsx";
import { ForgotPassword } from "./pages/ForgotPassword.jsx";
import { Register } from "./pages/Register.jsx";
import { MiCuenta } from "./pages/MiCuenta.jsx";
import { Favoritos } from "./pages/Favoritos.jsx";
import { MiCarrito } from "./pages/MiCarrito.jsx";
import { ExclusivoOnline } from "./pages/ExclusivoOnline.jsx";
import { Ofertas } from "./pages/Ofertas.jsx";
import { ProductsFiltered } from "./pages/ProductsFiltered.jsx";
import ComprasOnline from "./pages/ComprasOnline.jsx";
import FormasDePago from "./pages/FormasDePago.jsx";
import Entregas from "./pages/Entregas.jsx";
import AutorizacionRetiroForm from "./pages/AutorizacionRetiroForm.jsx";
import { Edit } from "./pages/Edit.jsx";
import ContactanosPage from "./pages/ContactanosPage.jsx";

export const App = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);

  return (
    <BrowserRouter>
      <Header
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
      />
      <main>
        <Routes>
          <Route
            index
            element={
              <Home
                allProducts={allProducts}
                setAllProducts={setAllProducts}
                total={total}
                setTotal={setTotal}
                countProducts={countProducts}
                setCountProducts={setCountProducts}
              />
            }
          ></Route>
          <Route path="/centro-de-ayuda" element={<CentroAyuda />} />
          <Route path="/como-comprar-online" element={<ComprasOnline />} />
          <Route path="/formas-de-pago" element={<FormasDePago />} />
          <Route path="/entregas" element={<Entregas />} />
          <Route
            path="/centro-de-ayuda/contactanos"
            element={<ContactanosPage />}
          />
          <Route
            path="/autorizacion-retiro"
            element={<AutorizacionRetiroForm />}
          />
          <Route path="/venta-telefonica" element={<VentaTelefonica />}></Route>
          <Route path="/sucursales" element={<Sucursales />}></Route>
          <Route path="/envios-domicilio" element={<EnviosDomicilio />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/forgot_password" element={<ForgotPassword />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/miCuenta" element={<MiCuenta />}></Route>
          <Route path="/favoritos" element={<Favoritos />}></Route>
          <Route path="/miCarrito" element={<MiCarrito />}></Route>
          <Route
            path="/products/:category/:id"
            element={
              <ProductDetail
                allProducts={allProducts}
                setAllProducts={setAllProducts}
                total={total}
                setTotal={setTotal}
                countProducts={countProducts}
                setCountProducts={setCountProducts}
              />
            }
          ></Route>
          <Route
            path="/products/:category"
            element={<ProductsFiltered />}
          ></Route>
          <Route path="/exclusivo-online" element={<ExclusivoOnline />}></Route>
          <Route path="/ofertas" element={<Ofertas />}></Route>
          <Route path="/edit/:category/:id" element={<Edit />}></Route>
          <Route path="/*" element={<NotFound />}></Route>
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};
