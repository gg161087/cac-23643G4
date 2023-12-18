import Ciberdelitos from "../components/Ciberdelitos.jsx";
import { Link } from "react-router-dom";

const CiberdelitosPage = () => {
  return (
    <div className="container">
      <h1>CIBERDELITOS</h1>
      <Ciberdelitos />
      <Link to="/centro-de-ayuda">
        <div className="volver-container">
          <button className="volver-button">Volver</button>
        </div>
      </Link>
    </div>
  );
};

export default CiberdelitosPage;
