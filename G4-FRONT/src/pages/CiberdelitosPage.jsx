import { Container } from "react-bootstrap";
import Ciberdelitos from "../components/Ciberdelitos.jsx";
import { Link } from "react-router-dom";

const CiberdelitosPage = () => {
  return (
    <Container>
      <h1>CIBERDELITOS</h1>
      <Ciberdelitos />
      <Link to="/centro-de-ayuda">
        <div className="volver-container">
          <button className="volver-button">Volver</button>
        </div>
      </Link>
    </Container>
  );
};

export default CiberdelitosPage;
