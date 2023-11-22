import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom"

export const Favoritos = () => {
    return (
        <Container>
            <h1>MIS FAVORITOS</h1>
            <Link to="/">VOLVER AL INICIO</Link>
        </Container>
    );
};
