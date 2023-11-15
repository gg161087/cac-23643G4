import { Link } from "react-router-dom"

import { Header } from './../partials/Header.jsx'
import { Footer } from './../partials/Footer.jsx'

export const MiCarrito = () => {
    return (
        <>
            <Header></Header>
            <div className="container">
                <h1>MI CARRITO</h1>
                <Link to="/">VOLVER AL INICIO</Link>
            </div>
            <Footer></Footer>
        </>
    );
};
