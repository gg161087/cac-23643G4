import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom"

import ContenidoSucursales from './../components/ContenidoSucursales.jsx';

export const Sucursales = () => {
    return (
        <Container>
            <h1>SUCURSALES</h1>
            <ContenidoSucursales></ContenidoSucursales>
            <Link to="/">VOLVER AL INICIO</Link>
        </Container>
    );
};
