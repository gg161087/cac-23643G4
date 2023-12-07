import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const mySwal = withReactContent(Swal);

import { registerSchema } from './../schemas/registerSchema.js';
import { postRegister } from './../utils/postDinamic.js';

export const Register = () => {

    const [showMessage, setShowMessage] = useState(false)

    const confirmRegister = (values) => {
        Swal.fire({
            title: '¿Estas Seguro/a que deseas registrarte?',
            text: "Seras añadido/a al newletter de promociones!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Deseo registrarme!'
        }).then((result) => {
            if (result.isConfirmed) {                
                postRegister(values).then((res) => {
                    if (res) {
                        Swal.fire(
                            'Registrado!',
                            'Te registraste correctamente.',
                            'success'
                        )
                    } else {
                        Swal.fire(
                            'Lo sentimos! no se registro!',
                            'Error inesperado al registrarse.',
                            'error'
                        )
                    }
                })                
            }
        })
    }
    
    const onSubmit = (values) => {
        setShowMessage(!showMessage)        
        console.log(values);
        confirmRegister(values)
    }

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
		initialValues: {
			name: '',
			last_name: '',
			telephone: '',
			email: '',
			password: '',
			confirmPass: ''
		},
		validationSchema: registerSchema,
		onSubmit,
	})

    return (
        <div className="container d-flex justify-content-center">
            <form onSubmit={handleSubmit} className='loginForm m-5' autoComplete='off'>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Nombre:</label>
                    <input
                        type="text"
                        id="name"
                        className="form-control"
                        aria-describedby="nameHelp"
                        value={values.name}
				        onChange={handleChange}
				        onBlur={handleBlur}
                    />
                    <div id="nameHelp" className="form-text">{errors.name && touched.name ? errors.name : 'John'}</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="last_name" className="form-label">Apellido:</label>
                    <input
                        type="text"
                        id="last_name"
                        className="form-control"
                        aria-describedby="lastNameHelp"
                        value={values.lastName}
				        onChange={handleChange}
				        onBlur={handleBlur}
                    />
                    <div id="lastNameHelp" className="form-text">{errors.last_name && touched.last_name ? errors.last_name : 'Doe'}</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="telephone" className="form-label">Telefono:</label>
                    <input
                        type="number"
                        id="telephone"
                        className="form-control"
                        aria-describedby="telephoneHelp"
                        value={values.telephone}
				        onChange={handleChange}
				        onBlur={handleBlur}
                    />
                    <div id="telephoneHelp" className="form-text">{errors.tel && touched.telephone ? errors.telephone : '542215123478'}</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Correo electrónico:</label>
                    <input
                        type="email"
                        id="email"
                        className="form-control"
                        aria-describedby="emailHelp"
                        value={values.email}
				        onChange={handleChange}
				        onBlur={handleBlur}
                    />
                    <div id="emailHelp" className="form-text">{errors.email && touched.email ? errors.email : 'john.doe@itechnology.com'}</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Contraseña:</label>
                    <input
                        type="password"
                        id="password"
                        className="form-control"
                        aria-describedby="passwordHelpBlock"
                        value={values.password}
				        onChange={handleChange}
				        onBlur={handleBlur}
                    />
                    <div id="passwordHelpBlock" className="form-text">
                        <small>{errors.password && touched.password ? errors.password :'Contraseña1'}</small>
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="confirmPass" className="form-label">Repetir Contraseña:</label>
                    <input
                        type="password"
                        id="confirmPass"
                        className="form-control"
                        aria-describedby="confirmPassHelpBlock"
                        value={values.confirmPass}
				        onChange={handleChange}
				        onBlur={handleBlur}
                    />
                    <div id="confirmPassHelpBlock" className="form-text">
                        <small>{errors.confirmPass && touched.confirmPass ? errors.confirmPass : 'Confirmar Contraseña'}</small>
                    </div>
                </div>
                <div className="d-flex justify-content-around">
                    <Link to='/login'>Volver</Link>
                    <button type="submit" className="btn btn-primary">Registrarse</button>
                </div>
            </form>
        </div>
    )
}