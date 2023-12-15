import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";
import imgPagoFacil from "../assets/imgFormasDePago/imgPagoFacil.jpg";
import imgTarjetas from "../assets/imgFormasDePago/imgTarjetas.jpg";
import imgTarjetasDebito from "../assets/imgFormasDePago/imgTarjetasDebito.jpg";
import imgEfectivo from "../assets/imgFormasDePago/imgEfectivo.jpg";
import imgMercadoPago from "../assets/imgFormasDePago/imgMercadoPago.jpg";
import "./FormasDePago.css";

const FormasDePago = () => {
  return (
    <>
      <div className="accordion-pagos">
        <h1 className="titulo-pagos">Formas de Pago</h1>
        <Accordion>
          <Accordion.Item eventKey="0" flush>
            <Accordion.Header>
              TARJETAS DE CRÉDITO - DE TODOS LOS BANCOS{" "}
            </Accordion.Header>
            <Accordion.Body>
              <img src={imgTarjetas} alt="Imágenes de Tarjetas de Crédito" />
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>
              TARJETAS DE DÉBITO – DE TODOS LOS BANCOS
            </Accordion.Header>
            <Accordion.Body>
              <img
                src={imgTarjetasDebito}
                alt="Imágenes de Tarjetas de Débito"
              />
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>PAGOS EN EFECTIVO</Accordion.Header>
            <Accordion.Body>
              <img
                src={imgEfectivo}
                alt="Imágenes de Formas de Pago en Efectivo"
              />{" "}
              <br />
              Podés abonar tus compras online en efectivo a través de Rapipago o
              Pago Fácil. Primero, tendrás que generar un recibo de pago. Para
              hacerlo, al momento de la compra, seleccioná la opción de Pago en
              Efectivo y serás redirigido a la plataforma PayU donde podrás
              optar entre Pago Fácil o Rapipago, elegí el que prefieras y luego
              hacé clic en “Generar recibo de pago”. Imprimí tu comprobante y
              acercate para realizar el pago, dentro de las 48 horas siguientes,
              a cualquier sucursal de Pago Fácil o Rapipago. Vencido el plazo de
              48 hs, si no efectuás el pago, tu pedido será cancelado. <br />
              <a href={imgPagoFacil} target="_blank" rel="noopener noreferrer">
                Instructivo Pago Fácil.
              </a>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header>MERCADO PAGO</Accordion.Header>
            <Accordion.Body>
              <img src={imgMercadoPago} alt="Imágen del logo de Mercado Pago" />
              <br />
              Podés abonar tus compras utilizando alguna de las alternativas de
              pago disponibles con Mercado Pago: Tarjetas de Crédito y Débito.
              Pagos en efectivo en puntos de pago Dinero en Mercado Pago Para
              consultar las condiciones vigentes de Mercado Pago, dirigite a su{" "}
              <Link to="https://www.mercadopago.com.ar/ayuda/medios-de-pago-y-promociones_264">
                sitio web.
              </Link>
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

export default FormasDePago;
