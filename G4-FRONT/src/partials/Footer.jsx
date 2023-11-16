import "./Footer.css";
import { Container, Row, Col, FormControl, Button } from "react-bootstrap";
import {
    AiFillFacebook,
    AiFillTwitterCircle,
    AiFillYoutube,
    AiFillInstagram,
    AiFillLinkedin,
    AiOutlineWhatsApp,
    AiFillPhone,
    AiFillMail,
    AiOutlineOrderedList,
} from "react-icons/ai";

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>                
                <Row className="row1 d-flex align-items-center">                    
                    <Col className="" xl={4}>
                        <h3 className="">Recibí Ofertas y Promociones</h3>
                    </Col>                   
                    <Col className="d-flex" xl={5}>
                        <FormControl type="text" placeholder="Tu Email" className="me-3" />
                        <Button type="submit">Suscribirme</Button>
                    </Col>                    
                    <Col className="" xl={3}>
                        <AiFillFacebook className="link__footer fs-2 me-2 pe" />
                        <AiFillInstagram className="link__footer fs-2 me-2" />
                        <AiFillTwitterCircle className="link__footer fs-2 me-2" />
                        <AiFillYoutube className="link__footer fs-2 me-2" />
                        <AiFillLinkedin className="link__footer fs-2 me-2" />
                    </Col>                    
                </Row>                
                <Row className="row2 ">                   
                    <Col className="lh-sm mt-4" xl={4}>
                        <h4 className="mb-4">Nombre de la tienda</h4>
                        <p>Acerca de Nosotros </p>
                        <p>Responsabilidad Social Nombre de la tienda</p>
                        <p>Trabaja con Nosotros</p>
                        <p>Beneficios Nombre de la tienda</p>
                        <p> Mega Puntos Nombre de la tienda</p>
                        <p>Revistas</p>
                        <p>Servicios</p>
                        <p>Proveedores</p>
                        <p>Marcas</p>
                    </Col>                    
                    <Col className="lh-sm mt-4" xl={5}>
                        <div className="row row-cols-2 d-flex ">
                            <div className="col-6">
                                <h4 className="mb-4">Centro de Ayuda</h4>
                                <p>¿Cómo Comprar? </p>
                                <p>Preguntas Frecuentes</p>
                                <p>Nuestras Tiendas</p>
                                <p>Cambios y Devoluciones</p>
                                <p>Medios de Pago Habilitados</p>
                            </div>
                            <div className="col-6">
                                <h4 className=" mb-4">Información Legal</h4>
                                <p>Términos y Condiciones </p>
                                <p>Contratos de Adhesión-Ley N° 24.240 de Defensa del Consumidor</p>
                                <p>Información al Usuario Financiero</p>
                                <Button className=" btn-sm" variant="outline-warning">Solicitud de Baja</Button>
                                <Button className=" btn-sm" variant="outline-danger">Botón de Arrepentimiento</Button>
                            </div>
                        </div>
                    </Col>                    
                    <Col className="lh-sm mt-4" xl={3}>
                        <h4 className=" mb-4">Contactános</h4>
                        <p><AiOutlineWhatsApp className="me-2"/>5491187654321</p>
                        <p><AiFillPhone className="me-2"/>0800-123-45678</p>
                        <p><AiFillMail className="me-2"/>atencionarg@correo.com</p>
                        <p><AiOutlineOrderedList className="me-2"/>Contacto</p>
                    </Col>                    
                </Row>                
            </Container>
            <Container fluid className="row3">                    
                <Container>
                    <Row className="justify-content-md-center">
                        <Col md="auto">                            
                            <small>Copyright © 2023 | Todos los derechos reservados Nombre de la tienda S.A | Capital Federal | Argentina</small>
                        </Col>
                    </Row>
                </Container>                    
            </Container>
        </footer>
    );
};
