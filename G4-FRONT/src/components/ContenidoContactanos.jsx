import "./FormularioAnulacionPedido.css";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";

const ContenidoContactanos = () => {
  const [dni, setDni] = useState("");
  const [pedido, setPedido] = useState("");
  const [motivo, setMotivo] = useState("");

  const handleDniChange = (e) => {
    const newDni = e.target.value.replace(/\D/g, "").slice(0, 8);
    setDni(newDni);
  };

  const handlePedidoChange = (e) => {
    const newPedido = e.target.value.replace(/\D/g, "").slice(0, 11);
    setPedido(newPedido);
  };

  const handleMotivoChange = (e) => {
    const newMotivo = e.target.value.slice(0, 500);
    setMotivo(newMotivo);
  };

  return (
    <>
      <div>
        <p className="title">Contactate con nosotros</p>
        <p style={{ fontSize: "1.5rem" }}>
          Para contactarse con nuestra empresa, ponemos a su disposición el
          siguiente formulario. Los campos con (*) son obligatorios.
        </p>
      </div>
      <Form className="form-container">
        <div className="name-row">
          <Form.Group controlId="formNombre">
            <Form.Label className="label-style">Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nombre"
              style={{
                width: "90%",
                height: "5vh",
                margin: "0 40px 10px 0",
                paddingRight: "20px",
              }}
              required
            />
          </Form.Group>

          <Form.Group controlId="formApellidos">
            <Form.Label className="label-style">Apellidos</Form.Label>
            <Form.Control
              type="text"
              placeholder="Apellidos"
              style={{
                width: "90%",
                height: "5vh",
                margin: "0 40px 10px 0",
                paddingRight: "20px",
              }}
              required
            />
          </Form.Group>
        </div>

        <Form.Group controlId="formDNI">
          <Form.Label className="label-style">DNI</Form.Label>
          <Form.Control
            type="text"
            placeholder="Número de documento"
            className="dni-input"
            value={dni}
            onChange={handleDniChange}
            required
          />
          <small style={{ color: "#ef7f13", fontSize: "1.2rem" }}>
            Máximo de 8 dígitos. Usado actualmente: {dni.length} dígitos.
          </small>
        </Form.Group>

        <Form.Group controlId="formCorreo">
          <Form.Label className="label-style">Correo electrónico</Form.Label>
          <Form.Control
            type="email"
            placeholder="Dirección de email de contacto"
            className="dni-input"
            required
          />
        </Form.Group>

        <Form.Group controlId="formTelefono">
          <Form.Label className="label-style">Número de teléfono</Form.Label>
          <Form.Control type="tel" className="dni-input" />
        </Form.Group>

        <Form.Group controlId="formLocalidad">
          <Form.Label className="label-style">Localidad</Form.Label>
          <Form.Control type="text" className="dni-input" />
        </Form.Group>

        <Form.Group controlId="formConsulta">
          <Form.Label className="label-style">Motivo de tu consulta</Form.Label>
          <Form.Control
            as="select"
            style={{ backgroundColor: "#ffffff", color: "#000000" }}
            className="dni-input"
          >
            <option selected>Consulta por Compra Online</option>
            <option>Cómo Pagar mi Cuota de Crédito Argonauta</option>
            <option>Consulta por Compra en Nuestras Sucursales</option>
            <option>Otras Consultas</option>
            <option>Consulta sobre Crédito Argonauta</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formSaber">
          <Form.Label className="label-style">
            ¿Qué necesitas saber de tu pedido Online?
          </Form.Label>
          <Form.Control
            as="select"
            style={{ backgroundColor: "#ffffff", color: "#000000" }}
            className="dni-input"
          >
            <option selected>Conocer el estado de mi pedido</option>
            <option>Reclamo por Entregas/Envíos</option>
            <option>Problemas con mi Compra/Pago</option>
            <option>Reclamo por Fallas</option>
            <option>Otros</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formNroPedido">
          <Form.Label className="label-style">Número de Pedido</Form.Label>
          <Form.Control
            type="text"
            placeholder="Sólo números sin guines ni espacios"
            className="dni-input"
            value={pedido}
            onChange={handlePedidoChange}
            required
          />
          <small style={{ color: "#ef7f13", fontSize: "1.2rem" }}>
            Ingresa de <strong>9</strong> a <strong>11</strong> dígitos. Usado
            actualmente: {pedido.length} dígitos.
          </small>
        </Form.Group>

        <Form.Group controlId="formMotivo">
          <Form.Label className="label-style">Consulta/Mensaje</Form.Label>
          <Form.Control
            as="textarea"
            rows={15}
            placeholder="Ingrese aquí sus comentarios. En caso de compras on-line, aclarar Número de Pedido"
            className="textarea-input"
            value={motivo}
            onChange={handleMotivoChange}
            required
          />
          <small style={{ color: "#ef7f13", fontSize: "1.2rem" }}>
            Ingresa de <strong>4</strong> a <strong>500</strong> caracteres.
            Usado actualmente: {motivo.length} caracteres.
          </small>
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          style={{
            // backgroundColor: "#ef7f13",
            // color: "#ffffff",
            transition: "background-color 0.3s",
            border: "none",
            marginTop: "10px",
            width: "10%",
            height: "5vh",
            fontSize: "1.5rem",
          }}
        >
          Enviar
        </Button>
      </Form>
    </>
  );
};

export default ContenidoContactanos;
