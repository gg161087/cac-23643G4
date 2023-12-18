import { Link } from "react-router-dom";
import "./ComprasOnline.css";

const InformacionCovid = () => {
    return (
        <>
            <div className="accordion-compras-online">
                <h1 className="titulo-compras">InformacionCovid</h1>
                <p>
                    Encontrá aquí la información a tener en cuenta en caso de anunciarse
                    nuevas medidas de restricción y prevención ante el avance del
                    Covid-19. Te informamos que nuestras sucursales se encuentran abiertas
                    para atención al público respetando las actividades y trámites
                    habilitados según cada localidad, con horarios especiales y todas las
                    medidas de seguridad.{" "}
                </p>
                <div className="accordion">
                    <div className="accordion-item" eventKey="0" flush>
                        <div className="accordion-header">
                            ¿QUÉ PASA SI HAY CAMBIOS DE FASES Y NUEVAS RESTRICCIONES DURANTE
                            EL PERÍODO DE ENTREGA DE MI PEDIDO?
                        </div>
                        <div className="accordion-body">                        
                            Si las autoridades de tu ciudad o el gobierno nacional adoptaran
                            nuevas medidas de restricción por el avance del Covid-19, la
                            entrega de tu pedido se concretará con una demora mayor a la
                            informada al momento de realizar la compra.
                            <br /> Si optaste por Retiro en Sucursal, te sugerimos estar
                            atento a los anuncios de las autoridades, ya que cuando vuelvan a
                            habilitar la atención presencial en comercios, podrás acercarte a
                            retirar tu pedido. Recordá que primero tu pedido debe viajar desde
                            nuestro depósito a la sucursal de entrega; cuando esté disponible
                            para retiro, recibirás la notificación por mail. También podés
                            consultar online el estado de tu pedido, ingresando a “Mi cuenta”
                            y luego “Mis Compras”.
                            <br /> Si compraste con la opción de <em>
                                Envío a domicilio,
                            </em>{" "}
                            podés hacer el seguimiento de tu envío online, ingresando a “Mi
                            cuenta” y luego “Mis Compras”. Tené en cuenta que, de haber nuevas
                            medidas de restricción en tu ciudad, la entrega sufrirá una demora
                            adicional a la informada al momento de la compra.
                        </div>
                    </div>

                    <div className="accordion-item" eventKey="1">
                        <div className="accordion-header">
                            CIERRES PREVENTIVOS DE CENTROS LOGÍSTICOS O SUCURSALES
                            INVOLUCRADAS EN LA DISTRIBUCIÓN Y ENTREGA DE TU PEDIDO
                        </div>
                        <div className="accordion-body">
                            En caso de que surjan medidas preventivas que produzcan el cierre
                            momentáneo de alguna sucursal, depósito o centro de distribución
                            involucrado en el proceso de envío de tu compra, la entrega se
                            verá afectada y sufrirá una demora adicional a la informada.
                            <br /> Si tu pedido se viera afectado por alguna medida, te
                            notificaremos por mail para informarte sobre la demora adicional
                            en la entrega y los pasos a seguir.
                        </div>
                    </div>

                    <div className="accordion-item" eventKey="2">
                        <div className="accordion-header">
                            PLAZO DE ENTREGAS COMPRAS ONLINE
                        </div>
                        <div className="accordion-boy">
                            Podrás conocer el plazo de entrega estimado al momento de
                            seleccionar la modalidad de entrega de tu pedido.
                            <br /> Tené en cuenta que, debido a las restricciones de
                            circulación por los cambios de fase que van surgiendo
                            intermitentemente en distintas localidades, las entregas pueden
                            sufrir una demora mayor que la informada al momento de efectuar tu
                            compra.
                            <br /> Agradecemos tu paciencia, y te pedimos disculpas por las
                            molestias que esta demora adicional pueda ocasionarte.
                        </div>
                    </div>

                    <div className="accordion-item" eventKey="3">
                        <div className="accordion-header">
                            QUÉ HACER SI EL PLAZO DE ENTREGA DE TU PEDIDO YA EXCEDIÓ
                        </div>
                        <div className="accordion-body">
                            Contactanos completando el formulario a continuación para que
                            podamos revisar tu caso y darte una pronta solución. Tené en
                            cuenta que estamos recibiendo muchas consultas; tu solicitud
                            ingresa a una bandeja de entrada donde se gestionan los mensajes
                            por orden de llegada. Te daremos una respuesta a la mayor brevedad
                            posible.
                            <br /> <br /> Completá el{" "}
                            <Link to="/centro-de-ayuda/contactanos">formulario aquí.</Link>
                        </div>
                    </div>

                    <div className="accordion-item" eventKey="4">
                        <div className="accordion-header">ENVÍO DE PRODUCTOS</div>
                        <div className="accordion-body">
                            Estamos realizando envíos a domicilio a todo el país (excepto
                            Tierra del Fuego) a través de un operador logístico.
                            <br /> Considerá que hay algunos productos publicados que no están
                            disponibles para envío a domicilio. Si el producto que buscás no
                            tiene esta opción de entrega habilitada, significa que no lo
                            podrás comprar con envío a domicilio.
                        </div>
                    </div>

                    <div className="accordion-item" eventKey="5">
                        <div className="accordion-header">RETIRO EN SUCURSAL </div>
                        <div className="accordion-body">
                            Podrás comprar tu producto con la modalidad de entrega de Retiro
                            en sucursal. Conocé el listado de sucursales habilitadas para
                            retiro al momento de seleccionar la modalidad de entrega de tu
                            pedido.
                            <br /> En caso de que surjan medidas preventivas que produzcan el
                            cierre momentáneo de tu sucursal de entrega, depósito o centro de
                            distribución involucrado en el proceso de envío de tu compra, la
                            entrega se verá afectada y sufrirá una demora adicional a la
                            informada.
                            <br /> Si tu pedido se viera afectado por alguna medida
                            preventiva, te notificaremos por mail para informarte sobre la
                            demora adicional en la entrega y los pasos a seguir.
                        </div>
                    </div>

                    <div className="accordion-item" eventKey="6">
                        <div className="accordion-header">
                            PAGO DE CUOTAS DE CRÉDITO ITECHNOLOGY
                        </div>
                        <div className="accordion-body">
                            Podés realizar el pago de cuotas de Crédito Cetrogar desde nuestro
                            sitio web, a través de Pago Mis Cuentas o en cualquier sucursal de
                            Pago Fácil. Enterate más{" "}
                            <Link to="/credito-itechnology">AQUÍ.</Link> <br /> Además,
                            nuestras sucursales se encuentran abiertas para que puedas pagar
                            las cuotas de tu Crédito Itechnology. Solicitá tu turno de
                            atención
                            <Link to="/centro-de-ayuda/contactanos"> AQUÍ.</Link>
                        </div>
                    </div>

                    <div className="accordion-item" eventKey="7">
                        <div className="accordion-header">POSVENTA DE PRODUCTOS</div>
                        <div className="accordion-body">
                            En cumplimiento con las medidas adoptadas por el gobierno
                            nacional, todos los servicios de reparaciones, service propios y
                            de las marcas que comercializamos se encuentran operando con
                            atención restringida, y en algunos casos están cerrados
                            momentáneamente. De todas formas, si tenés alguna duda puntual
                            podés contactarte con nosotros{" "}
                            <Link to="/centro-de-ayuda/contactanos">aquí</Link> y te
                            brindaremos información para ayudarte.
                        </div>
                    </div>

                    <div className="accordion-item" eventKey="8">
                        <div className="accordion-header">CAMBIOS O DEVOLUCIONES</div>
                        <div className="accordion-body">
                            Para solicitar cambio o devolución de tu compra Online, recordá
                            que tenés 10 días hábiles desde la fecha de entrega de tu
                            producto. Para iniciar el proceso, completá el siguiente
                            <Link to="/centro-de-ayuda/contactanos">
                                formulario.
                            </Link> <br /> Más información sobre Cambios y Devoluciones{" "}
                            <Link to="/cambios-y-devoluciones"> aquí.</Link>
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

export default InformacionCovid;
