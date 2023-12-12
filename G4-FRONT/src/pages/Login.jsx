import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { postLogin } from './../utils/postDinamic.js';

export const Login = () => {
    const navigate = useNavigate()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('')

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const login = async (email, password) => {
        const response = await postLogin('users/login', email, password)
        if (response) {                       
            localStorage.setItem('token', response.token);
            localStorage.setItem('userId', response.id); 
            setToken(localStorage.getItem('token'))
            navigate('/miCuenta')   
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();                               
        login(email, password)
    };    

    return (
        <div className="container d-flex justify-content-center">
            <form onSubmit={handleSubmit} className='loginForm m-5'>
                <div className="mb-3">
                    <label htmlFor="emailLogin" className="form-label">Correo electrónico:</label>
                    <input
                        type="email"
                        id="emailLogin"
                        className="form-control"
                        aria-describedby="emailHelp"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder="Dirección de email (*)"
                    />
                    <div id="emailHelp" className="form-text">No compartiremos tu dirección de email</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Contraseña:</label>
                    <input
                        type="password"
                        id="password"
                        className="form-control"
                        aria-describedby="passwordHelpBlock"
                        value={password}
                        onChange={handlePasswordChange}
                        placeholder="Contraseña"
                    />
                    <div id="passwordHelpBlock" className="form-text">
                        <small>Minimo 5 caracteres, al menos 1 mayúscula y número requerido.</small>
                        <p>
                            <Link to='/forgot_password'>Olvidé mi contraseña</Link>
                        </p>
                    </div>
                </div>
                <div className="d-flex justify-content-around">
                    <Link to='/register'>Registrarse</Link>
                    <button type="submit" className="btn btn-primary">
                        Iniciar sesión
                    </button>
                </div>
            </form>
        </div>
    )
}