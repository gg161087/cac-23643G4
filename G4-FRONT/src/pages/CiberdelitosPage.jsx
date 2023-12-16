import { Container } from "react-bootstrap";
import Ciberdelitos from "../components/Ciberdelitos.jsx";

const CiberdelitosPage = () => {
  return (
    <Container>
      <h1>CIBERDELITOS</h1>
      <Ciberdelitos />
      <div className="volver-container">
        <button
          className="volver-button"
          onClick={() => (window.location.href = "/centro-de-ayuda")}
        >
          Volver
        </button>
      </div>
    </Container>
  );
};

export default CiberdelitosPage;
