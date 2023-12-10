import { useState } from 'react';
import { Link } from 'react-router-dom';

export const ForgotPassword = () => {
    const [email, setEmail] = useState('');    

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();        
        console.log('Email:', email);
    };

    const mostrarVentanaEmergente = () => {
        window.alert('¡Hola! Solicitud Enviada.');
      };
    

    return (
        <div className="container d-flex justify-content-center">
            <form onSubmit={handleSubmit} className='loginForm m-5'>
                <div className="mb-3">
                    <label htmlFor="emailForgot" className="form-label">Correo electrónico:</label>
                    <input
                        type="email"
                        id="emailForgot"
                        className="form-control"
                        aria-describedby="emailForgotHelp"
                        value={email}
                        onChange={handleEmailChange}
                    />
                    <div id="emailForgotHelp" className="form-text">Le enviaremos al correo las instrucciones para recuperar la cuenta</div>
                </div>                
                <div className="d-flex justify-content-around">                        
                    <Link to='/login'>Volver</Link>
                    <button type="submit" className="btn btn-primary" onClick={mostrarVentanaEmergente}>
                        Enviar
                    </button>
                </div>
            </form>
        </div>
    )
}