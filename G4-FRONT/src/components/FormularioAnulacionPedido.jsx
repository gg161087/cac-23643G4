import { useState } from "react";
import "./FormularioAnulacionPedido.css";

const FormularioAnulacionPedido = () => {
  const [dni, setDni] = useState("");
  const [nombre, setNombre] = useState("");

  const handleNombreChange = (e) => {
    const newNombre = e.target.value.slice(0, 20);
    setNombre(newNombre);
  };

  const handleDniChange = (e) => {
    const newDni = e.target.value.replace(/\D/g, "").slice(0, 8);
    setDni(newDni);
  };

  const mostrarVentanaEmergente = () => {
    window.alert('¡Hola! Solicitud Enviada.');
  };



  return (
    <>
      <div>
        <p className="title">Solicitud de Anulación de Pedido</p>
        <p style={{ fontSize: "1.5rem" }}>
          Para contactarse con nuestra empresa, ponemos a su disposición el
          siguiente formulario. Los campos con (*) son obligatorios.
        </p>
      </div>
      <form className="form-container">
        <div className="name-row">
          <div className="form-group">
            <label htmlFor="formNombre" className="label-style">Nombre</label>
            <input
              type="text"
              className="form-control"
              id="formNombre"
              placeholder="Nombre (*)"
              style={{
                width: "90%",
                height: "5vh",
                margin: "0 40px 10px 0",
                paddingRight: "20px",
              }}
              value={nombre}
              onChange={handleNombreChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="formApellidos" className="label-style">Apellidos</label>
            <input
              type="text"
              className="form-control"
              id="formApellidos"
              placeholder="Apellidos (*)"
              style={{
                width: "90%",
                height: "5vh",
                margin: "0 40px 10px 0",
                paddingRight: "20px",
              }}
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="formDNI" className="label-style">DNI</label>
          <input
            type="text"
            className="form-control dni-input"
            id="formDNI"
            placeholder="Número de documento (*)"
            value={dni}
            onChange={handleDniChange}
          />
          <small style={{ color: "#ef7f13", fontSize: "1.2rem" }}>
            Máximo de 8 dígitos. Usado actualmente: {dni.length} dígitos.
          </small>
        </div>

        <div className="form-group">
          <label htmlFor="formCorreo" className="label-style">Correo electrónico</label>
          <input
            type="email"
            className="form-control dni-input"
            id="formCorreo"
            placeholder="Dirección de email de contacto (*)"
          />
        </div>

        <div className="form-group">
          <label htmlFor="formComoCompra" className="label-style">¿Cómo realizaste tu compra?</label>
          <select
            className="form-control"
            id="formComoCompra"
            style={{ backgroundColor: "#ffffff", color: "#000000" }}
          >
            <option>Compra Online</option>
            <option>Compra en Sucursal Credito Itechnology</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="formMotivo" className="label-style">Motivo de la solicitud</label>
          <textarea
            className="form-control"
            id="formMotivo"
            placeholder="Indiquenos su solicitud(*)"
            rows={5}
          />
        </div>

        <button
          disabled={(dni === '') || (nombre === '')}
          onClick={mostrarVentanaEmergente}
          className="btn btn-primary"
          type="submit"
          style={{
            transition: "background-color 0.3s",
            border: "none",
            marginTop: "10px",
            width: "10%",
            height: "5vh",
            fontSize: "1.5rem",
          }}
        >
          Enviar
        </button>
      </form>
    </>
  );
};

export default FormularioAnulacionPedido;
