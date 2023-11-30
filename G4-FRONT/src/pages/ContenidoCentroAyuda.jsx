import "./ContenidoCentroAyuda.css";
import BotonCentroAyuda from "./BotonCentroAyuda";
import comoComprarOnlineImg from "../assets/botonesCentroAyuda/comoComprarOnline.jpg";
import formasDePagoImg from "../assets/botonesCentroAyuda/formasDePago.jpg";
import entregasImg from "../assets/botonesCentroAyuda/entregas.jpg";
import cambiosYDevolucionesImg from "../assets/botonesCentroAyuda/cambiosYDevoluciones.jpg";
import ciberdelitosImg from "../assets/botonesCentroAyuda/ciberdelitos.jpg";
import configuracionDeCuentaImg from "../assets/botonesCentroAyuda/configuracionDeCuenta.jpg";
import consultasYReclamosImg from "../assets/botonesCentroAyuda/consultasYReclamos.jpg";
import creditoArgonautaImg from "../assets/botonesCentroAyuda/creditoArgonauta.jpg";
import informacionCovidImg from "../assets/botonesCentroAyuda/informacionCovid.jpg";

const ContenidoCentroAyuda = () => {
  const handleButtonClick = () => {};

  return (
    <>
      <p className="contenido-texto">
        Si tenés algún inconveniente o consulta sobre tu compra, contactanos al
        <strong>0800-123-45678</strong>.
        <br />
        Nuestros horarios de atención son de lunes a sábado de 9 a 21hs, con
        excepción de los feriados. Te pedimos que tengas tu número de pedido a
        mano, vamos a solicitártelo para poder analizar tu caso. (El mismo
        cuenta con 11 dígitos y comienza con 800 o 900). También podés
        escribirnos completando este formulario, y un agente se estará
        comunicando con vos dentro de las próximas 48hs hábiles.
        <br />
        Encontrá la información que necesitás para crear una cuenta, comprar
        online, hacer seguimiento de tu envío y mucho más.
      </p>
      <div className="contenedor-botones">
        <BotonCentroAyuda
          imagenSrc={comoComprarOnlineImg}
          altTexto="Cómo Comprar Online"
          titulo="Cómo comprar online?"
          onClick={() =>
            handleButtonClick("Cómo comprar online?", "/como-comprar-online")
          }
          linkTo="/como-comprar-online"
        />

        <BotonCentroAyuda
          imagenSrc={formasDePagoImg}
          altTexto="Formas de Pago"
          titulo="Formas de Pago"
          onClick={() => handleButtonClick("Formas de Pago", "/formas-de-pago")}
          linkTo="/formas-de-pago"
        />

        <BotonCentroAyuda
          imagenSrc={entregasImg}
          altTexto="Entregas"
          titulo="Entregas"
          onClick={() => handleButtonClick("Entregas", "/entregas")}
          linkTo="/entregas"
        />

        <BotonCentroAyuda
          imagenSrc={cambiosYDevolucionesImg}
          altTexto="Cambios y Devoluciones"
          titulo="Cambios y Devoluciones"
          onClick={() =>
            handleButtonClick(
              "Cambios y Devoluciones",
              "/cambios-y-devoluciones"
            )
          }
          linkTo="/cambios-y-devoluciones"
        />

        <BotonCentroAyuda
          imagenSrc={configuracionDeCuentaImg}
          altTexto="Configuración de Cuenta"
          titulo="Configuración de Cuenta"
          onClick={() =>
            handleButtonClick(
              "Cambios y Devoluciones",
              "/configuracion-de-cuenta"
            )
          }
          linkTo="/configuracion-de-cuenta"
        />

        <BotonCentroAyuda
          imagenSrc={creditoArgonautaImg}
          altTexto="Crédito Argonauta"
          titulo="Crédito Argonauta"
          onClick={() =>
            handleButtonClick("Crédito Argonauta", "/credito-argonauta")
          }
          linkTo="/credito-argonauta"
        />

        <BotonCentroAyuda
          imagenSrc={consultasYReclamosImg}
          altTexto="Consultas y Reclamos"
          titulo="Consultas y Reclamos"
          onClick={() =>
            handleButtonClick("Consultas y Reclamos", "/consultas-y-reclamos")
          }
          linkTo="/consultas-y-reclamos"
        />

        <BotonCentroAyuda
          imagenSrc={ciberdelitosImg}
          altTexto="Ciberdelitos"
          titulo="Ciberdelitos"
          onClick={() => handleButtonClick("Ciberdelitos", "/ciberdelitos")}
          linkTo="/ciberdelitos"
        />

        <BotonCentroAyuda
          imagenSrc={informacionCovidImg}
          altTexto="Información Covid"
          titulo="Información Covid"
          onClick={() =>
            handleButtonClick("Información Covid", "/informacion-covid")
          }
          linkTo="/informacion-covid"
        />
      </div>
    </>
  );
};

export default ContenidoCentroAyuda;
