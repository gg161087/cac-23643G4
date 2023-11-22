import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom"

export const MiCarrito = () => {
    return (
        <Container>
            <h1>MI CARRITO</h1>
            <Link to="/">VOLVER AL INICIO</Link>
        </Container>
    );
};
