import Contactanos from "../components/Contactanos.jsx";
import { Link } from "react-router-dom";

const ContactanosPage = () => {
  return (
    <div className="container">
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
    </div>
  );
};

export default ContactanosPage;
