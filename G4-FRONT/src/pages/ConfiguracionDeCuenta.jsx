import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";
import "./ComprasOnline.css";

const ConfiguracionDeCuenta = () => {
  return (
    <>
      <div className="accordion-compras-online">
        <h1 className="titulo-compras">Configuración de Cuenta</h1>
        <Accordion>
          <Accordion.Item eventKey="0" flush>
            <Accordion.Header>¿CÓMO ME REGISTRO?</Accordion.Header>
            <Accordion.Body>
              Completá el formulario con tus datos personales en la sección
              &quot;Mi Cuenta&quot;. El usuario para ingresar será el e-mail que
              indiques y la contraseña que elijas en el formulario. Como usuario
              registrado podrás seleccionar productos como favoritos, recibir
              información sobre nuestros descuentos y promociones, agregar y
              modificar tus datos de facturación y de envío, así como también
              visualizar, seguir y administrar tus pedidos.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>
              ¿CÓMO PUEDO EDITAR MIS DATOS PERSONALES?
            </Accordion.Header>
            <Accordion.Body>
              Para editar tus datos personales: email, teléfono de contacto,
              datos de facturación y tu dirección principal de envío, tenés que
              seguir los siguientes pasos: Iniciá sesión en Itechnology. Ingresá
              en “Mi Cuenta” Modificá lo que necesites y guardá la información.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>OLVIDÉ MI CONTRASEÑA</Accordion.Header>
            <Accordion.Body>
              Si olvidaste tu contraseña, seguí los siguientes pasos para
              reestablecerla: Hacé clic en “Mi Cuenta” y luego en “Olvidé mi
              contraseña” Ingresá el email con el que te habías registrado y
              luego clic en Restablecer mi Contraseña. Revisá tu e-mail,
              recibirás un correo para restablecer tu contraseña. Hacé clic en
              “Nueva Contraseña” Ingresá tu nueva contraseña. Recordá que debe
              ser mayor o igual a 8 caracteres y contener un mínimo de 3 clases
              de caracteres: mayúscula, minúscula, número o caracter especial.
              Clic en nueva contraseña y ¡listo!
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header>QUIERO RECIBIR OFERTAS POR MAIL</Accordion.Header>
            <Accordion.Body>
              ¡No te pierdas todas las ofertas y promociones que tenemos para
              vos! Al pie de página, dejanos tu email en la opción “Suscribite y
              recibí las mejores ofertas y beneficios” y empezá a disfrutar más
              con Itechnology.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="4">
            <Accordion.Header>
              ¿CÓMO HAGO PARA ENVIAR UNA SUGERENCIA, RECLAMO O CONSULTA?
            </Accordion.Header>
            <Accordion.Body>
              Tu opinión sobre la experiencia de compra en Itechnology nos sirve
              para mejorar. Por eso, si tenés una sugerencia o reclamo completá
              el{" "}
              <Link to="/centro-de-ayuda/contactanos">
                siguiente formulario.
              </Link>{" "}
              Te daremos una respuesta a la mayor brevedad posible.
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

export default ConfiguracionDeCuenta;
