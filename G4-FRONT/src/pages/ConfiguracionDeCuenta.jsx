import { Link } from "react-router-dom";
import "./ComprasOnline.css";

const ConfiguracionDeCuenta = () => {
  return (
    <>
      <div className="accordion-compras-online">
        <h1 className="titulo-compras">Configuración de Cuenta</h1>
        <div className="accordion">
          <div className="accordion-item" eventKey="0" flush>
            <div className="accordion-header">¿CÓMO ME REGISTRO?</div>
            <div className="accordion-body">
              Completá el formulario con tus datos personales en la sección
              &quot;Mi Cuenta&quot;. El usuario para ingresar será el e-mail que
              indiques y la contraseña que elijas en el formulario. Como usuario
              registrado podrás seleccionar productos como favoritos, recibir
              información sobre nuestros descuentos y promociones, agregar y
              modificar tus datos de facturación y de envío, así como también
              visualizar, seguir y administrar tus pedidos.
            </div>
          </div>

          <div className="accordion-item" eventKey="1">
            <div className="accordion-header">
              ¿CÓMO PUEDO EDITAR MIS DATOS PERSONALES?
            </div>
            <div className="accordion-body">
              Para editar tus datos personales: email, teléfono de contacto,
              datos de facturación y tu dirección principal de envío, tenés que
              seguir los siguientes pasos: Iniciá sesión en Itechnology. Ingresá
              en “Mi Cuenta” Modificá lo que necesites y guardá la información.
            </div>
          </div>

          <div className="accordion-item" eventKey="2">
            <div className="accordion-header">OLVIDÉ MI CONTRASEÑA</div>
            <div className="accordion-body">
              Si olvidaste tu contraseña, seguí los siguientes pasos para
              reestablecerla: Hacé clic en “Mi Cuenta” y luego en “Olvidé mi
              contraseña” Ingresá el email con el que te habías registrado y
              luego clic en Restablecer mi Contraseña. Revisá tu e-mail,
              recibirás un correo para restablecer tu contraseña. Hacé clic en
              “Nueva Contraseña” Ingresá tu nueva contraseña. Recordá que debe
              ser mayor o igual a 8 caracteres y contener un mínimo de 3 clases
              de caracteres: mayúscula, minúscula, número o caracter especial.
              Clic en nueva contraseña y ¡listo!
            </div>
          </div>

          <div className="accordion-item" eventKey="3">
            <div className="accordion-header">QUIERO RECIBIR OFERTAS POR MAIL</div>
            <div className="accordion-body">
              ¡No te pierdas todas las ofertas y promociones que tenemos para
              vos! Al pie de página, dejanos tu email en la opción “Suscribite y
              recibí las mejores ofertas y beneficios” y empezá a disfrutar más
              con Itechnology.
            </div>
          </div>

          <div className="accordion-item" eventKey="4">
            <div className="accordion-headr">
              ¿CÓMO HAGO PARA ENVIAR UNA SUGERENCIA, RECLAMO O CONSULTA?
            </div>
            <div className="accordion-body">
              Tu opinión sobre la experiencia de compra en Itechnology nos sirve
              para mejorar. Por eso, si tenés una sugerencia o reclamo completá
              el{" "}
              <Link to="/centro-de-ayuda/contactanos">
                siguiente formulario.
              </Link>{" "}
              Te daremos una respuesta a la mayor brevedad posible.
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

export default ConfiguracionDeCuenta;
