import { Modal, Button } from "react-bootstrap";
import Map from "./Map";

const SucursalModal = ({ departamento, handleCloseModal }) => {
  return (
    <Modal show={true} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>{departamento.direccion}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Dirección: {departamento.direccion}</p>
        <p>Teléfono: {departamento.telefono}</p>
        <p>Horario: {departamento.horario}</p>
        <Map ubicacion={departamento.ubicacion} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SucursalModal;
