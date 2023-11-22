import { BrowserRouter, Routes, Route } from "react-router-dom"

import { Header } from './partials/Header.jsx';
import { Footer } from './partials/Footer.jsx';

import { Home } from './pages/Home.jsx'
import { NotFound } from "./pages/NotFound.jsx"
import { ProductoDetalle } from './pages/ProductoDetalle.jsx'
import { CentroAyuda } from "./pages/CentroAyuda.jsx"
import { VentaTelefonica } from "./pages/VentaTelefonica.jsx"
import { Sucursales } from "./pages/Sucursales.jsx"
import { EnviosDomicilio } from "./pages/EnviosDomicilio.jsx"
import { MiCuenta } from "./pages/MiCuenta.jsx"
import { Favoritos } from "./pages/Favoritos.jsx"
import { MiCarrito } from "./pages/MiCarrito.jsx"
import { Televisores } from "./pages/Televisores.jsx"
import { Celulares } from "./pages/Celulares.jsx"
import { Computadoras } from "./pages/Computadoras.jsx"
import { ExclusivoOnline } from "./pages/ExclusivoOnline.jsx"
import { Ofertas } from "./pages/Ofertas.jsx"
import { Consolas } from "./pages/Consolas.jsx"
import { Tablets } from "./pages/Tablets.jsx"

export const App = () => {
    return (
        <BrowserRouter>
            <Header/>
            <main>
                <Routes>
                    <Route index element={<Home />}></Route>
                    <Route path="/centro-de-ayuda" element={<CentroAyuda/>}></Route>
                    <Route path="/venta-telefonica" element={<VentaTelefonica/>}></Route>
                    <Route path="/sucursales" element={<Sucursales/>}></Route>
                    <Route path="/envios-domicilio" element={<EnviosDomicilio/>}></Route>
                    <Route path="/miCuenta" element={<MiCuenta/>}></Route>
                    <Route path="/favoritos" element={<Favoritos/>}></Route>
                    <Route path="/miCarrito" element={<MiCarrito/>}></Route>
                    <Route path="/televisores" element={<Televisores/>}></Route>
                    <Route path="/televisores/:id" element={<ProductoDetalle/>}></Route>
                    <Route path="/celulares" element={<Celulares/>}></Route>
                    <Route path="/celulares/:id" element={<ProductoDetalle/>}></Route>
                    <Route path="/computadoras" element={<Computadoras/>}></Route>
                    <Route path="/computadoras/:id" element={<ProductoDetalle/>}></Route>
                    <Route path="/consolas" element={<Consolas />}></Route>                    
                    <Route path="/consolas/:id" element={<ProductoDetalle/>}></Route>
                    <Route path="/tablets/:id" element={<ProductoDetalle/>}></Route>
                    <Route path="/tablets" element={<Tablets/>}></Route>      
                    <Route path="/exclusivo-online" element={<ExclusivoOnline/>}></Route>
                    <Route path="/ofertas" element={<Ofertas/>}></Route>
                    <Route path="*" element={<NotFound/>}></Route>
                </Routes>
            </main>
            <Footer/>
        </BrowserRouter>
    );
}