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
        <div className="accordion">
          <div className="accordion-item" eventKey="0" flush>
            <div className="accordion-header">
              ¿CUÁLES SON LOS PLAZOS Y CONDICIONES DE CAMBIO Y DEVOLUCIÓN PARA
              UNA COMPRA ONLINE?
            </div>
            <div className="accordion-body">
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
            </div>
          </div>

          <div className="accordion-item" eventKey="1">
            <div className="accordion-header">
              ¿CUÁLES SON LOS PLAZOS Y CONDICIONES DE CAMBIO Y DEVOLUCIÓN PARA
              UNA COMPRA REALIZADA EN SUCURSAL?
            </div>
            <div className="accordion-body">
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
            </div>
          </div>

          <div className="accordion-item" eventKey="2">
            <div className="accordion-header">
              EXCEPCIONES PARA CAMBIOS Y DEVOLUCIONES
            </div>
            <div className="accordion-body">
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
            </div>
          </div>

          <div className="accordion-item" eventKey="3">
            <div className="accordion-header">DETALLE ESTÉTICO EN PRODUCTOS</div>
            <div className="accordion-body">
              Al momento de la entrega, recordá siempre verificar el buen estado
              del producto antes de firmar el remito. No se realizarán cambios
              por detalle estético cuando el remito haya sido firmado en
              conformidad.
            </div>
          </div>

          <div className="accordion-item" eventKey="4">
            <div className="accordion-header">
              ¿CÓMO SOLICITAR LA ANULACIÓN DE UNA COMPRA?
            </div>
            <div className="accordion-body">
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
            </div>
          </div>
        </div>
        <Link to="/centro-de-ayuda">
          <div className="volver-container">
            <button className="volver-button">Volver</button>
          </div>
        </Link>
      </div>
    </>
  );
};

export default CambiosYDevoluciones;
