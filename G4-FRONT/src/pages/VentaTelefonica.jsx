import { Link } from "react-router-dom"

import { Header } from './../partials/Header.jsx'
import { Footer } from './../partials/Footer.jsx'

export const VentaTelefonica = () => {
    return (
        <>
            <Header></Header>
            <div className="container">
                <h1>VENTA TELEFONICA</h1>
                <p>En esta pagina solo ira una ventana modal </p>
            </div>
            <Link to="/">VOLVER AL INICIO</Link>
            <Footer></Footer>
        </>
    );
};
