import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";
import "./ComprasOnline.css";

const CambiosYDevoluciones = () => {
  return (
    <>
      <div className="accordion-compras-online">
        <h1 className="titulo-compras">Cambios y Devoluciones</h1>
        <p>
          Podés realizar el cambio o devolución del producto si no estás
          conforme con el mismo. Tené en cuenta que los productos instalables no
          tienen devolución una vez abiertos, tampoco los pequeños
          electrodomésticos de cuidado personal. Los plazos y procedimientos
          varían según donde hayas realizado la compra. Revisá la información de
          plazos y procedimientos a continuación.
        </p>
        <Accordion>
          <Accordion.Item eventKey="0" flush>
            <Accordion.Header>
              ¿CUÁLES SON LOS PLAZOS Y CONDICIONES DE CAMBIO Y DEVOLUCIÓN PARA
              UNA COMPRA ONLINE?
            </Accordion.Header>
            <Accordion.Body>
              Si no estás conforme con tu producto, podrás solicitar el cambio o
              devolución dentro de los diez (10) días corridos contados a partir
              de la fecha en la que lo recibiste/retiraste. Para iniciar el
              proceso de cambio y devolución completá este formulario. A la
              brevedad, te contactaremos para indicarte los pasos a seguir. Tené
              en cuenta que para poder realizar el cambio o devolución, es
              condición necesaria que el producto y su empaque original estén en
              perfectas condiciones, con accesorios y manuales completos.
              Vencido el plazo de 10 días corridos desde la entrega de tu
              compra, si tu producto presenta una falla, deberás comunicarte con
              el servicio técnico oficial del fabricante. Te sugerimos revisar
              las instrucciones del certificado de garantía de tu producto que
              encontrarás junto al manual de uso. También podés visitar el sitio
              web del fabricante para obtener información sobre el servicio
              técnico oficial de la marca. Algunos productos no admiten cambios
              una vez abiertos. Consultá las Excepciones para Cambios y
              Devoluciones.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>
              ¿CUÁLES SON LOS PLAZOS Y CONDICIONES DE CAMBIO Y DEVOLUCIÓN PARA
              UNA COMPRA REALIZADA EN SUCURSAL?
            </Accordion.Header>
            <Accordion.Body>
              Si compraste tu producto en alguna de nuestras sucursales, podrás
              solicitar el cambio o devolución de tu producto dentro de las 72
              horas corridas desde que retiraste tu compra. Acercate a tu
              sucursal Itechnology y consultá con nuestro asesor de Posventa,
              quien te ayudará con el proceso. Tené en cuenta que para poder
              realizar el cambio o devolución, es condición necesaria que el
              producto y su empaque original estén en perfectas condiciones, con
              accesorios y manuales completos. Vencido el plazo de 72 hs, si tu
              producto presenta una falla, deberás comunicarte con el servicio
              técnico oficial del fabricante. Te sugerimos revisar las
              instrucciones del certificado de garantía de tu producto que
              encontrarás junto al manual de uso. También podés visitar el sitio
              web del fabricante para obtener información sobre el servicio
              técnico oficial de la marca. Algunos productos no admiten cambios
              una vez abiertos. Consultá las Excepciones para Cambios y
              Devoluciones.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>
              EXCEPCIONES PARA CAMBIOS Y DEVOLUCIONES
            </Accordion.Header>
            <Accordion.Body>
              Los productos instalables como aires acondicionados, calefones,
              termotanques, anafes, cocinas, hornos, campanas, lavarropas,
              lavasecarropas, lavavajillas, heladeras, freezers, cavas y
              exhibidoras, una vez instalados no tienen devolución. En caso de
              presentar fallas de funcionamiento, deberás comunicarte con el
              servicio técnico oficial del fabricante. Te sugerimos revisar la
              información del procedimiento en la garantía de tu producto. Los
              pequeños electrodomésticos de Cuidado Personal solo admiten
              cambios por falla de funcionamiento. No se admiten devoluciones
              para este tipo de productos. En el caso de impresoras, sólo se
              admitirá la devolución con el envoltorio de los cartuchos o
              tonners cerrados y originales.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header>DETALLE ESTÉTICO EN PRODUCTOS</Accordion.Header>
            <Accordion.Body>
              Al momento de la entrega, recordá siempre verificar el buen estado
              del producto antes de firmar el remito. No se realizarán cambios
              por detalle estético cuando el remito haya sido firmado en
              conformidad.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="4">
            <Accordion.Header>
              ¿CÓMO SOLICITAR LA ANULACIÓN DE UNA COMPRA?
            </Accordion.Header>
            <Accordion.Body>
              Para solicitar la anulación de la compra, completá el{" "}
              <Link to="/centro-de-ayuda/contactanos">
                {" "}
                siguiente formulario
              </Link>{" "}
              especificando el N° de Pedido y el motivo de la solicitud de
              anulación. Considerá que las anulaciones pueden demorar hasta 96
              horas hábiles en procesarse. El reembolso se verá reflejado en la
              cuenta de la tarjeta utilizada en la compra. El plazo de
              devolución dependerá de los tiempos de procesamiento de cada
              Tarjeta o Banco emisor.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <div className="volver-container">
          <button
            className="volver-button"
            onClick={() => (window.location.href = "/centro-de-ayuda")}
          >
            Volver
          </button>
        </div>
      </div>
    </>
  );
};

export default CambiosYDevoluciones;
