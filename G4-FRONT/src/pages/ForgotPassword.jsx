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
                    <div id="emailForgotHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>                
                <div className="d-flex justify-content-around">                        
                    <Link to='/login'>Volver</Link>
                    <button type="submit" className="btn btn-primary">
                        Iniciar sesión
                    </button>
                </div>
            </form>
        </div>
    )
}