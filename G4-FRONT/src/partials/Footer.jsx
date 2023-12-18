import { useState } from "react";
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
import { useFormik } from "formik";
import Swal from "sweetalert2";

import { subscriberSchema } from "./../schemas/subscriberSchema.js";
import { postSubscriber } from "./../utils/postDinamic.js";
import "./Footer.css";

export const Footer = () => {
    const [showMessage, setShowMessage] = useState(false);

    const confirmSubscriber = (email) => {
        Swal.fire({
            title: "¿Estas Seguro/a que deseas subscribirte?",
            text: "Seras añadido/a al newletter de promociones!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, Deseo subscribirme!",
        }).then((result) => {
            if (result.isConfirmed) {
                postSubscriber(email).then((result) => {
                    if (result) {
                        Swal.fire(
                            "Subscripto!",
                            "Te subscribiste correctamente.",
                            "success"
                        );
                    } else {
                        Swal.fire("Error!", "corrego electronico ya registrado", "error");
                    }
                });
            }
        });
    };

    const onSubmit = (values) => {
        setShowMessage(!showMessage);
        confirmSubscriber(values);
    };

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
        useFormik({
            initialValues: {
                email: "",
            },
            validationSchema: subscriberSchema,
            onSubmit,
        });

    return (
        <footer className="container-fluid footer">
            <div className="container">
                <div className="row mt-4">
                    <div className="col mt-5">
                        <h3 className="">Recibí Ofertas y Promociones</h3>
                    </div>
                    <div className="col">
                        <div className="row">
                            <label htmlFor="emailSubscriber" className="form-label">Email address</label>
                        </div>
                        <div className="row">
                            <form
                                onSubmit={handleSubmit}
                                autoComplete="off"
                                className="subscribe"
                            >
                                <input
                                    type="email"
                                    id="emailSubscriber"
                                    name='email'
                                    placeholder={
                                        errors.email && touched.email
                                            ? errors.email
                                            : "name@example.com"
                                    }
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={errors.email && touched.email ? "form-control input-error" : "form-control"}
                                    aria-describedby="emailHelp"
                                />
                                <button type="submit" id="btn_subscribe" className="btn btn-primary">Suscribirme</button>
                            </form>
                        </div>
                    </div>
                    <div className="col text-end mt-5">
                        <AiFillFacebook className="link__footer fs-2 me-2 pe" />
                        <AiFillInstagram className="link__footer fs-2 me-2" />
                        <AiFillTwitterCircle className="link__footer fs-2 me-2" />
                        <AiFillYoutube className="link__footer fs-2 me-2" />
                        <AiFillLinkedin className="link__footer fs-2 me-2" />
                    </div>
                </div>
                <div className="row mt-4" id="footer__contendor">
                    <div className="col footer__contendor__column">
                        <h4>ITECHNOLOGY</h4>
                        <p>Acerca de Nosotros </p>
                        <p>Trabaja con Nosotros</p>
                        <p>Beneficios</p>
                        <p>Revistas</p>
                        <p>Servicios</p>
                        <p>Marcas</p>
                    </div>
                    <div className="col footer__contendor__column">
                        <div className="row row-cols-2 d-flex ">
                            <div className="col">
                                <h4 className="mb-4">Centro de Ayuda</h4>
                                <p>¿Cómo Comprar? </p>
                                <p>Preguntas Frecuentes</p>
                                <p>Nuestras Tiendas</p>
                                <p>Cambios y Devoluciones</p>
                                <p>Medios de Pago Habilitados</p>
                            </div>
                            <div className="col">
                                <h4 className=" mb-4">Información Legal</h4>
                                <p>Términos y Condiciones </p>
                                <p>
                                    Contratos de Adhesión-Ley N° 24.240 de Defensa del Consumidor
                                </p>
                                <p>Información al Usuario Financiero</p>
                                <button className="btn btn-outline-warning mb-2">
                                    Solicitud de Baja
                                </button>
                                <button className="btn btn-outline-danger mb-2">
                                    Botón de Arrepentimiento
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col text-end footer__contendor__column">
                        <div>
                            <h4>Contactános</h4>
                            <p><AiOutlineWhatsApp className="me-2" />5491187654321</p>
                            <p>
                                <AiFillPhone className="me-2" />
                                0800-123-45678
                            </p>
                            <p>
                                <AiFillMail className="me-2" />
                                atencionarg@correo.com
                            </p>
                            <p>
                                <AiOutlineOrderedList className="me-2" />
                                Contacto
                            </p>
                        </div>
                    </div>
                </div>               
            </div>
            <div className="container-fluid copyright">
                <div className="container text-center">
                    <small>
                        Copyright © 2023 | Todos los derechos reservados ITECHNOLOGY S.A |
                        Capital Federal | Argentina
                    </small>
                </div>                   
            </div>           
        </footer>
    );
};
