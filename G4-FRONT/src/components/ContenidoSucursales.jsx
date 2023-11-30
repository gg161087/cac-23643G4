import { useState } from "react";
import { Button, Row, Col } from "react-bootstrap";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import Departamentos from "../pages/Departamentos";
import SucursalModal from "../pages/SucursalModal";

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
      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        {provincias.map((provincia) => (
          <Tab eventKey={provincia.nombre} title={provincia.nombre} key={provincia.nombre}>
            {provincia.departamentos.map((departamento) =>(
              <p>{departamento}</p>
            ))}           
          </Tab>
        ))}        
      </Tabs>
              

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
