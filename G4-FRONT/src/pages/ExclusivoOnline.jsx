import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom"

export const ExclusivoOnline = () => {
    return (
        <Container>
            <h1>EXCLUSIVO ONLINE</h1>
            <Link to="/">VOLVER AL INICIO</Link>
        </Container>
    );
};
