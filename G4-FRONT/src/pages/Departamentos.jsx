import { useState } from "react";
import { Accordion, Card, Button } from "react-bootstrap";

const Departamentos = ({ provincias, provincia, onDepartamentoClick }) => {
  const [showDepartamentos, setShowDepartamentos] = useState(false);

  // Encuentra la provincia seleccionada
  const provinciaSeleccionada =
    provincias && provincias.find((p) => p.nombre === provincia);

  if (!provinciaSeleccionada) {
    return <div>Provincia no encontrada</div>;
  }

  return (
    <div>
      <Button
        variant="primary"
        onClick={() => setShowDepartamentos(!showDepartamentos)}
      >
        Mostrar Departamentos
      </Button>

      {showDepartamentos && provinciaSeleccionada.departamentos && (
        <Accordion>
          {provinciaSeleccionada.departamentos.map((departamento) => (
            <Card key={departamento}>
              <Accordion.Toggle as={Card.Header} eventKey={departamento}>
                {departamento}
              </Accordion.Toggle>
              <Accordion.Collapse eventKey={departamento}>
                <Card.Body>
                  {provinciaSeleccionada.departamentos
                    .find((d) => d.nombre === departamento)
                    ?.sucursales.map((sucursal) => (
                      <Button
                        key={sucursal.direccion}
                        variant="outline-secondary"
                        onClick={() => onDepartamentoClick(sucursal)}
                      >
                        {sucursal.direccion}
                      </Button>
                    ))}
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          ))}
        </Accordion>
      )}
    </div>
  );
};

export default Departamentos;
