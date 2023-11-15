import { Link } from "react-router-dom"

import { Header } from './../partials/Header.jsx'
import { Footer } from './../partials/Footer.jsx'

export const Televisores = () => {
    return (
        <>
            <Header></Header>
            <div className="container">
                <h1>TELEVISORES</h1>
                <Link to="/">VOLVER AL INICIO</Link>
            </div>
            <Footer></Footer>
        </>
    );
};
