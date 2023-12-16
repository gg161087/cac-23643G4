import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";
import imgPagoFacil from "../assets/imgFormasDePago/imgPagoFacil.jpg";
import "./ComprasOnline.css";

const CreditoItechnology = () => {
  return (
    <>
      <div className="accordion-compras-online">
        <h1 className="titulo-compras">Crédito Itechnology</h1>
        <p>
          Con Crédito Itechnology te ofrecemos la financiación más conveniente,
          a la medida de tus necesidades. Te esperamos en la sucursal
          Itechnology más cercana para asesorarte sobre las alternativas
          disponibles para acceder a tu crédito. Consultá las direcciones y
          horarios de atención
          <Link to="/sucursales"> aquí.</Link>
        </p>
        <Accordion>
          <Accordion.Item eventKey="0" flush>
            <Accordion.Header>
              ¿PUEDO COMPRAR ONLINE CON CRÉDITO CETROGAR?
            </Accordion.Header>
            <Accordion.Body>
              Crédito Itechnology está disponible únicamente en nuestras
              sucursales. No podrás comprar online con esta modalidad de pago.
              Te esperamos en la sucursal Itechnology más cercana para
              asesorarte sobre las alternativas disponibles para acceder a tu
              crédito. Consultá las direcciones y horarios de atención{" "}
              <Link to="/sucursales">aquí:</Link>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>
              ¿CÓMO Y DONDE PODÉS ABONAR LAS CUOTAS DE TU CRÉDITO ITECHNOLOGY?
            </Accordion.Header>
            <Accordion.Body>
              <b> 1) SUCURSALES ITECHNOLOGY:</b> todas nuestras sucursales se
              encuentran abiertas para el cobro de cuotas de Crédito
              Itechnology. <em>IMPORTANTE:</em>
              Las personas mayores de 60 años y grupos de riesgo tendrán a
              disposición una fila de atención prioritaria. La operación se
              realiza respetando los protocolos de higiene y prevención para la
              salud de todos, colaboradores y clientes <br />
              <b>2) DE MANERA ONLINE:</b>
              Desde MacroClick podrás abonar las cuotas de tu crédito ingresando
              <Link to="/ttps://pagos.macroclickpago.com.ar/SearchDeuda/%20796727%20">
                aquí.
              </Link>{" "}
              <br />
              <b>3) PAGO FÁCIL:</b> Ahora también podés pagar en efectivo o
              Tarjeta de Débito en Pago Fácil. Para hacerlo, acercate a
              cualquier sucursal Pago Fácil del país con tu DNI / CUIL y podrás
              ver las cuotas disponibles para abonar. También podrás pagar en
              https://pagosenlinea.pagofacil.com.ar/. Opción: “Pago sin
              Factura”, seleccioná servicio “Itechnology SA” y con tu DNI / CUIL
              podrás ver las cuotas disponibles para abonar. Mirá el{" "}
              <a href={imgPagoFacil} target="_blank" rel="noopener noreferrer">
                instructivo aquí.
              </a>{" "}
              <br />
              <b>4) RAPI PAGO:</b> También podés pagar en efectivo o Tarjeta de
              Débito en Rapi Pago. Para hacerlo, acercate a cualquier sucursal
              Rapi Pago del país con tu DNI / CUIL y podrás ver las cuotas
              disponibles para abonar.
              <br /> <b>5) PAGO MIS CUENTAS:</b> Podés abonar desde{" "}
              <Link to="/https://pagomiscuentas.com/">aqui.</Link>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>
              INFORMACIÓN IMPORTANTE PARA EL PAGO DE CUOTAS - COVID-19
            </Accordion.Header>
            <Accordion.Body>
              En cumplimiento con la disposición del Banco Central “A” 6958,
              todas nuestras{" "}
              <b>
                sucursales se encuentran abiertas para el cobro de cuotas de
                Crédito Itechnology.
              </b>{" "}
              Habilitamos un sistema de turnos online para una atención más
              ágil. Reservá tu turno{" "}
              <Link to="/centro-de-ayuda/contactanos">aquí.</Link> <br />
              <br />
              IMPORTANTE: Las personas mayores de 60 años y grupos de riesgo
              tendrán a disposición una fila de atención prioritaria. La
              operación se realiza respetando los protocolos de higiene y
              prevención para la salud de todos, colaboradores y clientes.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header>
              ¿CUÁLES SON LOS REQUISITOS PARA SACAR UN CRÉDITO?
            </Accordion.Header>
            <Accordion.Body>
              Para acceder a tu Crédito Itechnology solo necesitás presentar tu
              <b>DNI,</b> un <b>Recibo de sueldo/Jubilación</b> y una{" "}
              <b>Boleta de servicio.</b>
              Acercate a nuestras sucursales, nuestros colaboradores podrán
              brindarte asesoramiento.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="4">
            <Accordion.Header>
              ¿DÓNDE PUEDO CONSULTAR MI RESUMEN DE CRÉDITO ITECHNOLOGY?
            </Accordion.Header>
            <Accordion.Body>
              Ahora podés consultar tu resumen de cuenta de Crédito Itechnology
              <b>desde nuestra web,</b> ingresando a Mi Cuenta &gt; Crédito
              Itechnology, o hace clic en el siguiente enlace.
              <br /> <br />{" "}
              <em>
                Aclaración: recientemente actualizamos nuestro sitio, por lo
                cual serás redirigido a una plataforma anterior que te
                solicitará volver a ingresar tus datos para acceder a tus
                resúmenes. El usuario y clave son los mismos con los que
                ingresabas antes. Si restableciste la contraseña en esta nueva
                plataforma, no modificará el acceso a la anterior. Si no
                recordás la contraseña, podés reestablecerla en el mismo paso.
              </em>{" "}
              <br />
              <br /> Mirá cómo ingresar a tu cuenta y consultar tus resúmenes
              aquí.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="5">
            <Accordion.Header>
              NECESITO CONTACTARME CON EL SECTOR DE COBRANZAS ITECHNOLOGY
            </Accordion.Header>
            <Accordion.Body>
              Para envío de comprobantes de pago de cuotas, comunicarse con el{" "}
              <Link to="/centro-de-ayuda/contactanos">siguiente enlace.</Link>{" "}
              Si tenés alguna duda o inconveniente con tu resumen de Crédito
              Itechnology, también podés contactarte con el sector de Cobranzas
              a través del siguiente{" "}
              <Link to="/centro-de-ayuda/contactanos">formulario</Link> y un
              asesor te responderá a la brevedad: Consulta Crédito Itechnology.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Link to="/centro-de-ayuda">
          <div className="volver-container">
            <button className="volver-button">Volver</button>
          </div>
        </Link>
      </div>
    </>
  );
};

export default CreditoItechnology;
