import { useState, useEffect } from "react";
import { Accordion, Col, Container, Row } from "react-bootstrap";

import FormularioAnulacionPedido from "./../components/FormularioAnulacionPedido";
import ContenidoCentroAyuda from "./../components/CentroAyuda";
import ContenidoCiberdelitos from "./../components/Ciberdelitos";
import ContenidoContactanos from "../components/Contactanos";
import ContenidoInstitucional from "./../components/Institucional";
import ContenidoPoliticaDePrivacidad from "./../components/PoliticaDePrivacidad";
import ContenidoSucursales from "../components/DivSucursales";
import TerminosYCondiciones from "./../components/TerminosYCondiciones";

import "./CentroAyuda.css";

const CentroAyuda = () => {
  // Estado para gestionar el contenido que se muestra
  const [contenido, setContenido] = useState("");
  const [titulo, setTitulo] = useState("Centro de Ayuda");
  // Función para manejar el cambio de contenido
  const handleItemClick = (nuevoContenido, nuevoTitulo) => {
    setContenido(nuevoContenido);
    setTitulo(nuevoTitulo);
  };
  // Funciones para definir el contenido
  const contenidoArrepentimiento = () => <FormularioAnulacionPedido />;
  const contenidoCentroAyuda = () => <ContenidoCentroAyuda />;
  const contenidoCiberdelitos = () => <ContenidoCiberdelitos />;
  const contenidoContactanos = () => <ContenidoContactanos />;
  const contenidoInstitucional = () => <ContenidoInstitucional />;
  const contenidoPoliticaDePrivacidad = () => <ContenidoPoliticaDePrivacidad />;
  const contenidoSucursales = () => <ContenidoSucursales />;
  const contenidoTerminosYCondiciones = () => <TerminosYCondiciones />;

  useEffect(() => {
    handleItemClick(contenidoCentroAyuda(), "Centro de Ayuda");
  }, []);

  return (
    <Container className="mt-5">
      <Row>
        <Col sm={3}>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="1">
              <Accordion.Header
                onClick={() =>
                  handleItemClick(
                    contenidoArrepentimiento(),
                    "Arrepentimiento de Compra"
                  )
                }
              >
                Arrepentimiento de Compra
              </Accordion.Header>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header
                onClick={() =>
                  handleItemClick(contenidoCentroAyuda(), "Centro de Ayuda")
                }
              >
                Centro de Ayuda
              </Accordion.Header>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
              <Accordion.Header
                onClick={() =>
                  handleItemClick(contenidoCiberdelitos(), "Ciberdelitos")
                }
              >
                Ciberdelitos
              </Accordion.Header>
            </Accordion.Item>

            <Accordion.Item eventKey="4">
              <Accordion.Header
                onClick={() =>
                  handleItemClick(contenidoContactanos(), "Contactanos")
                }
              >
                Contactanos
              </Accordion.Header>
            </Accordion.Item>

            <Accordion.Item eventKey="5">
              <Accordion.Header
                onClick={() =>
                  handleItemClick(contenidoInstitucional(), "Institucional")
                }
              >
                Institucional
              </Accordion.Header>
            </Accordion.Item>

            <Accordion.Item eventKey="6">
              <Accordion.Header
                onClick={() =>
                  handleItemClick(
                    contenidoPoliticaDePrivacidad(),
                    "Política de Privacidad"
                  )
                }
              >
                Política de Privacidad
              </Accordion.Header>
            </Accordion.Item>

            <Accordion.Item eventKey="7">
              <Accordion.Header
                onClick={() =>
                  handleItemClick(contenidoSucursales(), "Sucursales")
                }
              >
                Sucursales
              </Accordion.Header>
            </Accordion.Item>

            <Accordion.Item eventKey="8">
              <Accordion.Header
                onClick={() =>
                  handleItemClick(
                    contenidoTerminosYCondiciones(),
                    "Términos y Condiciones"
                  )
                }
              >
                Términos y Condiciones
              </Accordion.Header>
            </Accordion.Item>
          </Accordion>
        </Col>

        <Col sm={9}>
          <div>
            <h2 className="title-arrepentimiento">{titulo}</h2>
            <p>{contenido}</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CentroAyuda;
