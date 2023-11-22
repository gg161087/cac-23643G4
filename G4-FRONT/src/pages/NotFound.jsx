import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom"

export const NotFound = () => {
    return (
        <Container>
            <h1>404 ROUTE NOT FOUND</h1>
            <Link to="/">VOLVER AL INICIO</Link>
        </Container>
    )
};
