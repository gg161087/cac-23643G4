import { useState, useEffect } from "react";

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
    <div className="container">
      <div className="row">
        <div className="col col-sm-3">
          <div className="accordion" defaultActiveKey="0">
            <div className="accordion-item" eventKey="1">
              <div className="accordion-header"
                onClick={() =>
                  handleItemClick(
                    contenidoArrepentimiento(),
                    "Arrepentimiento de Compra"
                  )
                }
              >
                Arrepentimiento de Compra
              </div>
            </div>

            <div className="accordion-item" eventKey="2">
              <div className="accordion-header"
                onClick={() =>
                  handleItemClick(contenidoCentroAyuda(), "Centro de Ayuda")
                }
              >
                Centro de Ayuda
              </div>
            </div>

            <div className="accordion-item" eventKey="3">
              <div className="accordion-header"
                onClick={() =>
                  handleItemClick(contenidoCiberdelitos(), "Ciberdelitos")
                }
              >
                Ciberdelitos
              </div>
            </div>

            <div className="accordion-item" eventKey="4">
              <div className="accordion-header"
                onClick={() =>
                  handleItemClick(contenidoContactanos(), "Contactanos")
                }
              >
                Contactanos
              </div>
            </div>

            <div className="accordion-item" eventKey="5">
              <div className="accordion-header"
                onClick={() =>
                  handleItemClick(contenidoInstitucional(), "Institucional")
                }
              >
                Institucional
              </div>
            </div>

            <div className="accordion-item" eventKey="6">
              <div className="accordion-header"
                onClick={() =>
                  handleItemClick(
                    contenidoPoliticaDePrivacidad(),
                    "Política de Privacidad"
                  )
                }
              >
                Política de Privacidad
              </div>
            </div>

            <div className="accordion-item" eventKey="7">
              <div className="accordion-header"
                onClick={() =>
                  handleItemClick(contenidoSucursales(), "Sucursales")
                }
              >
                Sucursales
              </div>
            </div>

            <div className="accordion-item" eventKey="8">
              <div className="accordion-header"
                onClick={() =>
                  handleItemClick(
                    contenidoTerminosYCondiciones(),
                    "Términos y Condiciones"
                  )
                }
              >
                Términos y Condiciones
              </div>
            </div>
          </div>
        </div>

        <div className="col col-sm-9">
          <div>
            <h2 className="title-arrepentimiento">{titulo}</h2>
            <p>{contenido}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CentroAyuda;
