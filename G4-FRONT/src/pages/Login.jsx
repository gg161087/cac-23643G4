import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();        
        console.log('Email:', email);
        console.log('Contraseña:', password);
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
                    />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
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
                    />
                    <div id="passwordHelpBlock" className="form-text">
                        <small>Must be 8-20 characters long. </small>
                        <p>
                            <Link to='/forgot_password'>Olvidé mi contraseña</Link>
                        </p>
                    </div>
                </div>
                <div className="d-flex justify-content-around">
                    <Link to='/signin'>Registrarse</Link>
                    <button type="submit" className="btn btn-primary">
                        Iniciar sesión
                    </button>
                </div>
            </form>
        </div>
    )
}