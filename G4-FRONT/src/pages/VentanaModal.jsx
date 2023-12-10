// ModalComponent.js
import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export const ModalVentana = ({ show, handleClose, message }) => {
  
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>ITECHNOLOGY</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p><h1>{message}</h1></p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};


