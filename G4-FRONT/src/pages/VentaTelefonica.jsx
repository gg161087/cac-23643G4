import { Link } from "react-router-dom"

export const VentaTelefonica = () => {
    return (
        <div className="container">
            <h1>VENTA TELEFONICA</h1>
            <p>En esta pagina solo ira una ventana modal </p>
            <Link to="/">VOLVER AL INICIO</Link>
        </div>
    );
};
