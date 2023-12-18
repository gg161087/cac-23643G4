import "./ComprasOnline.css";
import { Link } from "react-router-dom";

const ComprasOnline = () => {
  return (
    <>
      <div className="accordion-compras-online">
        <h1 className="titulo-compras">Comprar Online</h1>
        <div className="accordion">
          <div className="accordion-item" eventKey="0" flush>
            <div className="accordion-header">¿CÓMO COMPRAR EN ITECHNOLOGY?</div>
            <div className="accordion-body">
              Seleccioná tus productos Podés elegir los productos por
              categorías, aplicando filtros por marca, precio y características
              destacadas. Una vez que seleccionaste tu producto, hace clic en
              “Comprar”. Serás redireccionado a “Mi carrito”. Carrito de compras
              En el carrito verás el listado de productos pre-seleccionados
              hasta el momento. Además, podrás calcular el monto de las cuotas y
              el costo de envío. Haciendo clic en el botón “Continuar comprando”
              podés seguir recorriendo nuestro sitio y agregar todos los
              productos que desees. Si tenés un Cupón de Descuento, ingresalo en
              este paso. Cuando completes la elección de productos, presioná el
              botón “Finalizar Mi Pedido”. Seleccioná la Forma de Entrega Elegí
              la modalidad de entrega de tu preferencia, podés optar entre
              “Retiro en sucursal” (sin costo), Retiro en Punto de Entrega
              Pickit, o “Envío a domicilio”. Seleccioná el Medio de Pago Elegí
              el medio de pago y completá todos los datos solicitados. Si todos
              los datos son verificados, tu compra se habrá realizado con éxito.
              Factura digital y Notificaciones Cuando el pago haya sido
              aprobado, recibirás en tu e-mail la factura digital. Además,
              recibirás por la misma vía todas las notificaciones sobre el
              estado de tu pedido.
            </div>
          </div>

          <div className="accordion-item" eventKey="1">
            <div className="accordion-header">
              ¿CUÁLES SON LAS FORMAS DE PAGO DISPONIBLES?
            </div>
            <div className="accordion-body">
              Podés abonar tus compras online con los siguientes medios de pago:
              Tarjetas de Crédito Tarjetas de Débito Mercado Pago Pago en
              efectivo: a través de Rapipago o Pago Fácil. Para más información
              sobre Formas de Pago disponibles, clic aquí.
            </div>
          </div>

          <div className="accordion-item" eventKey="2">
            <div className="accordion-header">
              ¿CUÁLES SON LAS FORMAS DE ENTREGA PARA COMPRAS ONLINE?
            </div>
            <div className="accordion-body">
              Tenés disponible las siguientes opciones de entrega para tus
              compras de Itechnology: Retiro en Sucursal: Esta modalidad de
              entrega no tiene costo. Elegí en qué sucursal querés retirar tu
              compra y cuando esté disponible te notificaremos para que pases a
              retirar tu producto. Retiro en Punto Pickit: Esta modalidad de
              entrega está disponible en productos seleccionados. Si el producto
              que elegiste no tiene esta opción de entrega significa que no está
              disponible para ser retirado por esta modalidad. Los envíos de
              Pickit se realizan a través de un operador logístico externo y
              tienen costo. Envío a Domicilio: Realizamos envíos a todo el país,
              excepto a Tierra del Fuego, a través de operadores logísticos. Los
              envíos a domicilio tienen costo adicional. Podrás calcular el
              costo de envío en el carrito, cuando ingreses el código postal. Te
              informaremos sobre los tiempos de entrega vigentes al seleccionar
              la modalidad de envío a domicilio durante el proceso de compra.
              Para más información sobre Entregas de tus Compras, clic aquí.
            </div>
          </div>

          <div className="accordion-item" eventKey="3">
            <div className="accordion-header">
              ¿CÓMO HAGO EL SEGUIMIENTO DE MI COMPRA?:
            </div>
            <div className="accordion-body">
              Podés ver el estado actualizado de tu pedido desde tu cuenta,
              ingresando a “Mis compras”. Seleccioná la compra sobre la que
              querés realizar la consulta y hacé clic en “Seguir mi compra”. Si
              seleccionaste la opción de “Envío a domicilio” o “Envío a Punto
              Pickit” podés realizar el seguimiento del envío desde tu cuenta,
              haciendo clic en el número de tracking del operador logístico que
              aparece en el detalle de tu compra.
            </div>
          </div>

          <div className="accordion-item" eventKey="4">
            <div className="accordion-header">
              ¿QUÉ HAGO SI TODAVÍA NO RECIBÍ MI COMPRA?
            </div>
            <div className="accordion-body">
              Si se ha vencido el plazo de entrega informado al momento de la
              compra, podés comunicarte con nosotros completando el siguiente
              Formulario. Te contactaremos para una respuesta a la mayor
              brevedad posible. Recordá que podés hacer el seguimiento del envío
              de tu compra desde tu cuenta, ingresando a “Mis compras”.
            </div>
          </div>

          <div className="accordion-item" eventKey="5">
            <div className="accordion-header">¿DÓNDE ENCUENTRO MI FACTURA?</div>
            <div className="accordion-body">
              La factura de compra se enviará automáticamente a tu casilla de
              e-mail cuando la transacción esté aprobada. No obstante, podés
              descargarla desde tu cuenta, ingresando a “Mis compras”.
            </div>
          </div>

          <div className="accordion-item" eventKey="6">
            <div className="accordion-header">
              ¿PUEDO OBTENER UNA FACTURA “A” DE MI COMPRA?
            </div>
            <div className="accordion-body">
              Sí, podés solicitar Factura A. Durante el proceso de compra,
              cuando solicitemos los datos de facturación, marcá la opción
              Factura A y completá con los datos de la empresa. La factura se
              enviará automáticamente a tu casilla de e-mail cuando la
              transacción esté aprobada.
            </div>
          </div>

          <div className="accordion-item" eventKey="7">
            <div className="accordion-header">
              ¿MI COMPRA ESTÁ GARANTIZADA Y PROTEGIDA?
            </div>
            <div className="accordion-body">
              En Itechnology te garantizamos la seguridad de todas tus compras
              online, manteniendo tus datos bajo la más estricta
              confidencialidad. Gracias al respaldo de SSL (Secure Socket Layer)
              el sistema de seguridad utilizado por Itechnology, te aseguramos
              cada transacción electrónica que realices en nuestra página web.
              Tu información personal será cifrada y no podrá ser leída ni
              utilizada por terceros. A su vez, Itechnology te asegura que tus
              datos personales se manejan con absoluta confidencialidad y
              conforme a lo dispuesto por la legislación vigente. Nuestro sitio
              cuenta con certificados de seguridad y cifrado SSL brindados por
              DigiCert. También asociados y auditados por la Cámara Argentina de
              Comercio Electrónico bajo el sello e-confianza.com. Para mayor
              información, visitá Términos y Condiciones
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

export default ComprasOnline;
