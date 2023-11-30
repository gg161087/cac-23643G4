import { useState } from "react";
import { Button, Row, Col } from "react-bootstrap";
import Departamentos from "./Departamentos";
import SucursalModal from "./SucursalModal";

const provincias = [
  {
    nombre: "Buenos Aires",
    departamentos: ["Avellaneda", "Pergamino", "San Miguel"],
  },

  {
    nombre: "Córdoba",
    departamentos: ["Córdoba", "Río Cuarto", "Río Segundo"],
  },

  {
    nombre: "Salta",
    departamentos: ["General Güemes", "Orán", "Salta"],
  },

  {
    nombre: "Santa Fe",
    departamentos: ["Rafaela", "Rosario", "Santa Fe"],
  },

  {
    nombre: "Tucumán",
    departamentos: ["Concepción", "Famaillá", "San Miguel de Tucumán"],
  },
];

const ContenidoSucursales = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProvincia, setSelectedProvincia] = useState(null);
  const [selectedDepartamento, setSelectedDepartamento] = useState(null);

  const handleProvinciaClick = (provincia) => {
    setSelectedProvincia(provincia.nombre);
  };

  const handleDepartamentoClick = (departamento) => {
    setSelectedDepartamento(departamento);
    setShowModal(true);
    console.log(showModal);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedDepartamento(null);
  };

  return (
    <div>
      <Row>
        {provincias.map((provincia) => (
          <Col key={provincia.nombre} xs={4}>
            <Button
              variant="primary"
              style={{ width: "100%", marginBottom: "10px" }}
              onClick={() => handleProvinciaClick(provincia)}
            >
              {provincia.nombre}
            </Button>
          </Col>
        ))}
      </Row>

      {selectedProvincia && (
        <Departamentos
          provincia={selectedProvincia}
          onDepartamentoClick={handleDepartamentoClick}
        />
      )}

      {/* Modal para mostrar detalles de la sucursal */}
      {selectedDepartamento && (
        <SucursalModal
          departamento={selectedDepartamento}
          handleCloseModal={handleCloseModal}
        />
      )}
    </div>
  );
};

export default ContenidoSucursales;
