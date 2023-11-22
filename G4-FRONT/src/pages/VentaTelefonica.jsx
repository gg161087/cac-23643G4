import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom"

export const VentaTelefonica = () => {
    return (
        <Container>
            <h1>VENTA TELEFONICA</h1>
            <p>En esta pagina solo ira una ventana modal </p>
            <Link to="/">VOLVER AL INICIO</Link>
        </Container>
    );
};
