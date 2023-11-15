import { Link } from "react-router-dom"

import { Header } from './../partials/Header.jsx'
import { Footer } from './../partials/Footer.jsx'

export const NotFound = () => {
    return (
        <>
            <Header></Header>
            <main style={{ padding: "1rem" }}>
                <h1>404 ROUTE NOT FOUND</h1>
                <Link to="/">VOLVER AL INICIO</Link>
            </main>
            <Footer></Footer>
        </>
    );
};
