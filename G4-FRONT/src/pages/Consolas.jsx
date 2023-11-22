import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom"

export const Consolas = () => {
    return (
        <Container className="container">
            <h1>CONSOLAS Y VIDEOJUEGOS</h1>
            <Link to="/">VOLVER AL INICIO</Link>
        </Container>
    );
};
