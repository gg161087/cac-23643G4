import { Form, Button } from "react-bootstrap";
import "./FormularioAnulacionPedido.css";

const FormularioAnulacionPedido = () => {
  return (
    <>
      <div>
        <p className="title">Solicitud de Anulación de Pedido</p>
        <p style={{ fontSize: "1.5rem", color: "#0505d9" }}>
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
              className="name-input"
            />
          </Form.Group>

          <Form.Group controlId="formApellidos">
            <Form.Label className="label-style">Apellidos</Form.Label>
            <Form.Control
              type="text"
              placeholder="Apellidos"
              className="name-input"
            />
          </Form.Group>
        </div>

        <Form.Group controlId="formDNI">
          <Form.Label className="label-style">DNI</Form.Label>
          <Form.Control
            type="text"
            placeholder="Número de documento"
            className="dni-input"
          />
          <small style={{ color: "#ef7f13", fontSize: "1.2rem" }}>
            Máximo de 8 dígitos. Usado actualmente: 0 dígitos.
          </small>
        </Form.Group>

        <Form.Group controlId="formCorreo">
          <Form.Label className="label-style">Correo electrónico</Form.Label>
          <Form.Control
            type="email"
            placeholder="Dirección de email de contacto"
            className="dni-input"
          />
        </Form.Group>

        <Form.Group controlId="formComoCompra">
          <Form.Label className="label-style">
            ¿Cómo realizaste tu compra?
          </Form.Label>
          <Form.Control
            as="select"
            style={{ backgroundColor: "#ffffff", color: "#0505d9" }}
          >
            <option>Compra Online</option>
            <option>Compra en Sucursal Credito Argonauta</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formMotivo">
          <Form.Label className="label-style">
            Motivo de la solicitud
          </Form.Label>
          <Form.Control as="textarea" rows={5} />
        </Form.Group>

        <Button
          type="submit"
          style={{
            backgroundColor: "#ef7f13",
            color: "#ffffff",
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

export default FormularioAnulacionPedido;
