import { Link } from "react-router-dom";

export const EnviosDomicilio = () => {
  return (
    <div className="container">
      <h1>ENVIOS A DOMICILIO</h1>
      Realizamos envíos a todo el territorio argentino, excepto la Isla de
      Tierra del Fuego, a través de operadores logísticos. Esta modalidad de
      entrega tiene costo, el mismo varía según el/los productos elegidos y la
      localidad de entrega.
      <br />
      <br /> Para seleccionar esta forma de entrega de tu compra, seguí los
      pasos que se indican a continuación:
      <br />
      <br /> Elegí el producto que querés comprar y hacé clic en “Comprar”.
      Revisá tu selección y luego hacé clic en “Finalizar Mi Pedido”
      <br /> Seleccioná la opción &quot;Envío a domicilio&quot; y elegí la
      dirección de entrega. En este paso, podrás visualizar el costo de envío de
      tu pedido y los tiempos de entrega actualizados.
      <br /> Continuá la compra completando los datos requeridos para el pago.
      <br />
      <br /> Algunos productos de la página no están disponibles para la
      modalidad de Envío a Domicilio. Por lo tanto, si no ves la opción de Envío
      a domicilio en el producto que seleccionaste para comprar, significa que
      no podrás adquirirlo con esta modalidad, y deberás seleccionar otra forma
      de entrega disponible.
      <br />
      <br /> <b>SEGUIMIENTO DE ENVÍOS:</b>
      <br /> Podés realizar el seguimiento del envío de tus compras ingresando a
      “Mis compras”. Seleccioná la compra sobre la que querés realizar la
      consulta, podrás verificar el estado actual de la misma y realizar el
      seguimiento del envío con el número de tracking del operador logístico.
      <br />
      <br /> <b>PLAZOS Y HORARIOS DE ENTREGA:</b>
      <br /> El plazo de entrega es el informado al momento de la compra. Las
      entregas se realizan de Lunes a Viernes y los días Sábados, de 8 a 20 hs.
      Domingos y Feriados no se realizan entregas.
      <br />
      <br /> <b>¿QUÉ DOCUMENTACIÓN ES REQUERIDA AL MOMENTO DE LA ENTREGA?</b>
      <br /> La compra sólo podrá ser recibida por el titular la tarjeta,
      presentando su DNI y tarjeta con la que se realizó el pedido.
      <br /> Al momento de la entrega, verificá el buen estado del producto
      antes de firmar el remito. La firma, aclaración y DNI al momento de la
      entrega será muestra de tu conformidad.
      <br /> En algunos casos el operador logístico podrá solicitarte una
      palabra clave que te llegará al mail con el que realizaste la compra.
      Revisar por favor la casilla de correos no deseados (spam).
      <br />
      <br />{" "}
      <em>
        IMPORTANTE: No se realizarán cambios por detalle estético cuando el
        remito de entrega haya sido firmado.
      </em>
      <br />
      <br /> <b>¿QUÉ HAGO SI NO ESTABA EN EL MOMENTO DE LA ENTREGA?</b>
      <br /> Si no estás en el domicilio al momento de la visita, el correo te
      notificará y te dará las instrucciones a seguir para coordinar una nueva
      entrega.
      <br />
      <br /> <b>¿PUEDO RECHAZAR EL PRODUCTO?</b>
      <br /> Si el producto no se encuentra en condiciones o no cumple con tus
      expectativas, podés rechazarlo al momento de la entrega. Deberás ponerte
      en contacto con nuestro equipo de atención para coordinar los próximos
      pasos. Contactate <Link to="/centro-de-ayuda/contactanos"> AQUÍ</Link>
      <br />
      <br /> Para más información sobre Cambios y Devoluciones, revisá el
      siguiente enlace.
      <br />
      <br /> <b>¿PROBLEMAS CON LA ENTREGA DE TU COMPRA?</b>
      <br /> Si tuviste algún problema con la entrega de tu pedido, contactanos
      AQUÍ. Te contactaremos a la mayor brevedad posible. Para más información
      sobre Cambios y Devoluciones, revisá el{" "}
      <Link to="/centro-de-ayuda/contactanos">siguiente enlace.</Link> <br />
      <br />
      <Link to="/">VOLVER AL INICIO</Link>
    </div>
  );
};
