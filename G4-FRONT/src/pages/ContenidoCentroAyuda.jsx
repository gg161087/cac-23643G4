import BotonCentroAyuda from "./BotonCentroAyuda";

const ContenidoCentroAyuda = () => {
  const handleButtonClick = (titulo) => {};

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

      <BotonCentroAyuda
        imagenSrc="../../assets/botonesCentroAyuda/comoComprarOnline.jpg"
        altTexto="Cómo Comprar Online"
        titulo="Cómo comprar online?"
        onClick={() =>
          handleButtonClick("Cómo comprar online?", "/como-comprar-online")
        }
        linkTo="/como-comprar-online"
      />
    </>
  );
};

export default ContenidoCentroAyuda;
