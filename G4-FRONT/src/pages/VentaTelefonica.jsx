// OtroArchivo.js
import React, { useState, useEffect } from 'react';
import { ModalVentana } from './VentanaModal';

export const VentaTelefonica = () => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
    
  };

  // Muestra el modal automáticamente cuando el componente se monta
  useEffect(() => {
    setShowModal(true);
  }, []);

  return (
    <div>
     
      {/* El modal se muestra automáticamente al montar el componente */}
      <ModalVentana
        show={showModal}
        handleClose={handleCloseModal}
        message="Para compras online comuniquese al 0800-123-456"
      />
      <center><h1> Compras online <br/> Comuniquese a nuetros operadores al: <br/> 0800-123-456 </h1></center>
    </div>
    
  );
};




























{/*import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom"

export const VentaTelefonica = () => {
    return (
        <Container>
            <h1>VENTA TELEFONICA</h1>
            <p>En esta pagina solo ira una ventana modal </p>
            <Link to="/">VOLVER AL INICIO</Link>
        </Container>
    );
};
*/}
