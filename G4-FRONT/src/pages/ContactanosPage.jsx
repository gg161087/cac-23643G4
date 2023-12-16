import { Container } from "react-bootstrap";
import Contactanos from "../components/Contactanos.jsx";
import { Link } from "react-router-dom";

const ContactanosPage = () => {
  return (
    <Container>
      <h1>CONTACTANOS</h1>
      <Contactanos />
      <Link to="/centro-de-ayuda">
        <div className="volver-container">
          <button
            className="volver-button"            
          >
            Volver
          </button>
        </div>
      </Link>
    </Container>
  );
};

export default ContactanosPage;
