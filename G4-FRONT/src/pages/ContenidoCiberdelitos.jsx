import atencionFraudeImg from "../assets/botonesCentroAyuda/atencionFraude.png";

const ContenidoCiberdelitos = () => {
  return (
    <>
      <img
        src={atencionFraudeImg}
        alt="Imagen para Ciberdelitos"
        style={{ width: "15%", height: "auto", margin: "20px" }}
      />
      <p>
        Queremos contarte que Cetrogar sólo opera a través de cuentas que se
        encuentran verificadas, es decir que poseen una tilde azul al lado de su
        nombre.
        <br />
        <br />
        Nunca pediremos que nos pases o ingreses en formularios tus claves,
        datos de tu tarjeta de crédito, o nos hagas una transferencia de dinero
        a través de un e-mail, redes sociales, telefónicamente, por cadenas de
        WhatsApp o por SMS.
        <br />
        <br />
        Los sorteos siempre son comunicados en nuestras redes sociales oficiales
        verificadas y la participación es sin obligación de compra, y jamás te
        solicitaremos ningún aporte de dinero para participar.
        <br />
        <br />
        Tampoco llames a números telefónicos o ingreses a links que compartan
        otros usuarios en redes sociales, aunque señalen que son de Cetrogar.
        Los números y contactos son comunicados en las redes oficiales
        verificadas.
        <br />
        <br />
        Reportá y bloqueá cualquier contacto sospechoso en redes.
        <br />
        <br />
        Si fuiste víctima de un ciberdelito, denuncialo a la Unidad Fiscal
        Especializada en Ciberdelincuencia:
        <br />
        Teléfono: (5411) 5071-0040 |{" "}
        <a
          href="https://www.mpf.gob.ar/ufeci/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://www.mpf.gob.ar/ufeci/
        </a>
      </p>
    </>
  );
};

export default ContenidoCiberdelitos;
