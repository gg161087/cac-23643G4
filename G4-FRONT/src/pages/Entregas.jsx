import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";

import "./Entregas.css";

const Entregas = () => {
  return (
    <>
      <div className="accordion-entregas">
        <h1 className="titulo-entregas">Entregas</h1>
        <Accordion>
          <Accordion.Item eventKey="0" flush>
            <Accordion.Header>RETIRO EN SUCURSAL ITECHNOLOGY </Accordion.Header>
            <Accordion.Body>
              Podés comprar cualquier producto de la página y retirarlo desde la
              sucursal Itechnology de tu ciudad, SIN CARGO. Recibirás una
              notificación por e-mail cuando tu producto esté disponible en la
              sucursal elegida para la entrega. <br />
              <br />
              <em>
                {" "}
                Aclaración: Si la sucursal Itechnology de tu ciudad no aparece
                en el listado como opción para retiro, significa que la misma no
                está habilitada para esta modalidad de entrega. En ese caso,
                deberás optar por otra forma de entrega.
              </em>{" "}
              <br />
              <br />
              <b>PLAZOS Y HORARIOS DE ENTREGA:</b>
              <br /> Tu pedido estará disponible en el plazo indicado al momento
              de confirmar tu compra. En ocasiones, el plazo de entrega puede
              llegar a ser menor si la sucursal que elegiste cuenta con stock
              existente del producto que adquiriste. Recordá que te
              notificaremos por e-mail cuando puedas acercarte a retirar tu
              compra.
              <br />
              <br /> Las entregas se realizan de Lunes a Sábados en los horarios
              de atención de cada sucursal. Consultá direcciones y horarios
              aquí.
              <br />
              <br /> <b>¿QUÉ DOCUMENTACIÓN ES REQUERIDA PARA LA ENTREGA?</b>
              <br /> La compra podrá ser retirada por el titular de la tarjeta o
              por la persona, mayor de 18 años, que hayas autorizado presentando
              la siguiente documentación para acreditar la identidad: <br />
              Factura digital impresa.
              <br /> DNI del titular de la tarjeta.
              <br /> Tarjeta utilizada para abonar la compra.
              <br />
              <br /> Si deseás autorizar a otra persona a que retire tu compra,
              por favor completá este{" "}
              <Link to="/autorizacion-retiro">formulario.</Link>
              <br />
              <br /> <b>¿CÓMO REALIZO EL SEGUIMIENTO DE MI COMPRA?</b>
              <br /> Podés realizar el seguimiento de tu pedido en todo momento,
              ingresando a “Mis compras”. Seleccioná la compra sobre la que
              querés realizar la consulta y podrás verificar y hacer el
              seguimiento del estado actualizado de la misma.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>ENVÍOS A DOMICILIO</Accordion.Header>
            <Accordion.Body>
              Realizamos envíos a todo el territorio argentino, excepto la Isla
              de Tierra del Fuego, a través de operadores logísticos. Esta
              modalidad de entrega tiene costo, el mismo varía según el/los
              productos elegidos y la localidad de entrega.
              <br />
              <br /> Para seleccionar esta forma de entrega de tu compra, seguí
              los pasos que se indican a continuación:
              <br />
              <br /> Elegí el producto que querés comprar y hacé clic en
              “Comprar”. Revisá tu selección y luego hacé clic en “Finalizar Mi
              Pedido”
              <br /> Seleccioná la opción &quot;Envío a domicilio&quot; y elegí
              la dirección de entrega. En este paso, podrás visualizar el costo
              de envío de tu pedido y los tiempos de entrega actualizados.
              <br /> Continuá la compra completando los datos requeridos para el
              pago.
              <br />
              <br /> Algunos productos de la página no están disponibles para la
              modalidad de Envío a Domicilio. Por lo tanto, si no ves la opción
              de Envío a domicilio en el producto que seleccionaste para
              comprar, significa que no podrás adquirirlo con esta modalidad, y
              deberás seleccionar otra forma de entrega disponible.
              <br />
              <br /> <b>SEGUIMIENTO DE ENVÍOS:</b>
              <br /> Podés realizar el seguimiento del envío de tus compras
              ingresando a “Mis compras”. Seleccioná la compra sobre la que
              querés realizar la consulta, podrás verificar el estado actual de
              la misma y realizar el seguimiento del envío con el número de
              tracking del operador logístico.
              <br />
              <br /> <b>PLAZOS Y HORARIOS DE ENTREGA:</b>
              <br /> El plazo de entrega es el informado al momento de la
              compra. Las entregas se realizan de Lunes a Viernes y los días
              Sábados, de 8 a 20 hs. Domingos y Feriados no se realizan
              entregas.
              <br />
              <br />{" "}
              <b>¿QUÉ DOCUMENTACIÓN ES REQUERIDA AL MOMENTO DE LA ENTREGA?</b>
              <br /> La compra sólo podrá ser recibida por el titular la
              tarjeta, presentando su DNI y tarjeta con la que se realizó el
              pedido.
              <br /> Al momento de la entrega, verificá el buen estado del
              producto antes de firmar el remito. La firma, aclaración y DNI al
              momento de la entrega será muestra de tu conformidad.
              <br /> En algunos casos el operador logístico podrá solicitarte
              una palabra clave que te llegará al mail con el que realizaste la
              compra. Revisar por favor la casilla de correos no deseados
              (spam).
              <br />
              <br />{" "}
              <em>
                IMPORTANTE: No se realizarán cambios por detalle estético cuando
                el remito de entrega haya sido firmado.
              </em>
              <br />
              <br /> <b>¿QUÉ HAGO SI NO ESTABA EN EL MOMENTO DE LA ENTREGA?</b>
              <br /> Si no estás en el domicilio al momento de la visita, el
              correo te notificará y te dará las instrucciones a seguir para
              coordinar una nueva entrega.
              <br />
              <br /> <b>¿PUEDO RECHAZAR EL PRODUCTO?</b>
              <br /> Si el producto no se encuentra en condiciones o no cumple
              con tus expectativas, podés rechazarlo al momento de la entrega.
              Deberás ponerte en contacto con nuestro equipo de atención para
              coordinar los próximos pasos. Contactate AQUÍ
              <br />
              <br /> Para más información sobre Cambios y Devoluciones, revisá
              el siguiente enlace.
              <br />
              <br /> <b>¿PROBLEMAS CON LA ENTREGA DE TU COMPRA?</b>
              <br /> Si tuviste algún problema con la entrega de tu pedido,
              contactanos AQUÍ. Te contactaremos a la mayor brevedad posible.
              Para más información sobre Cambios y Devoluciones, revisá el
              siguiente enlace.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>
              RETIRO EN PUNTO DE ENTREGA PICKIT
            </Accordion.Header>
            <Accordion.Body>
              Los puntos Pickit son una red de comercios de todo el país
              habilitados para entregas de compras online. Los envíos se
              realizan a través de un operador logístico externo y tienen costo.
              Podrás comprar con retiro en puntos Pickit únicamente los
              productos habilitados para esta modalidad, si no encontrás esta
              opción al seleccionar tu producto significa que el mismo no está
              disponible para este método de entrega. En ese caso, podés optar
              por otra forma de entrega. SEGUIMIENTO DE ENVÍOS: Podés realizar
              el seguimiento del envío a puntos Pickit ingresando a “Mis
              compras”. Seleccioná la compra sobre la que querés realizar la
              consulta y podrás verificar el estado actual de la misma y
              realizar el seguimiento del envío con el número de tracking del
              operador logístico. PLAZOS Y HORARIOS DE ENTREGA: El plazo de
              entrega será el informado al momento de la compra. Cuando tu
              pedido llegue al Punto Pickit, recibirás un mail de confirmación
              con un código de seguimiento. Podrás pasar a retirar tu pedido en
              los días y horarios de atención del punto Pickit que hayas
              seleccionado. Podés consultar esta información en la página de
              Pickit. ¿QUÉ DOCUMENTACIÓN ES REQUERIDA AL MOMENTO DE LA ENTREGA?
              La compra podrá ser retirada por el titular de la misma o por la
              persona que hayas autorizado para retirarla, presentando DNI y
              código de seguimiento Pickit que recibiste en la confirmación de
              recepción. Al momento de la entrega, verificá el buen estado del
              producto antes de firmar el remito. La firma, aclaración y DNI al
              momento de la entrega será muestra de tu conformidad. IMPORTANTE:
              No se realizarán cambios por detalle estético cuando el remito de
              entrega haya sido firmado. Para información sobre Cambios y
              Devoluciones, revisá el siguiente enlace.
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

export default Entregas;
