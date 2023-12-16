import { Container } from "react-bootstrap";

import Contactanos from "../components/Contactanos.jsx";

const ContactanosPage = () => {
  return (
    <Container>
      <h1>CONTACTANOS</h1>
      <Contactanos />
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

export default ContactanosPage;
