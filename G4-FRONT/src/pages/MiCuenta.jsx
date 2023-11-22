import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom"

export const MiCuenta = () => {
    return (
        <Container>
            <h1>MI CUENTA</h1>
            <Link to="/">VOLVER AL INICIO</Link>
        </Container>
    );
};
