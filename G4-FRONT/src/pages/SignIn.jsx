import { useState } from 'react';
import { Link } from 'react-router-dom';

export const SignIn = () => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [telephone, setTelephone] = useState(0);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };
    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    };
    const handleTelephoneChange = (e) => {
        setTelephone(e.target.value);
    };
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault(); 
        console.log('Nombre:', name);
        console.log('Apellido:', lastName);
        console.log('Telefono:', telephone);
        console.log('Email:', email);
        console.log('Contraseña:', password);        
    };

    return (
        <div className="container d-flex justify-content-center">
            <form onSubmit={handleSubmit} className='loginForm m-5'>
                <div className="mb-3">
                    <label htmlFor="nameSignIn" className="form-label">Nombre:</label>
                    <input
                        type="text"
                        id="nameSignIn"
                        className="form-control"
                        aria-describedby="nameSignInHelp"
                        value={name}
                        onChange={handleNameChange}
                    />
                    <div id="nameSignInHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="LastNameSignIn" className="form-label">Apellido:</label>
                    <input
                        type="text"
                        id="LastNameSignIn"
                        className="form-control"
                        aria-describedby="LastNameSignInHelp"
                        value={lastName}
                        onChange={handleLastNameChange}
                    />
                    <div id="LastNameSignInHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="LastNameSignIn" className="form-label">Telefono:</label>
                    <input
                        type="number"
                        id="telephoneSignIn"
                        className="form-control"
                        aria-describedby="telephoneSignInHelp"
                        value={telephone}
                        onChange={handleTelephoneChange}
                    />
                    <div id="telephoneSignInHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="emailSignIn" className="form-label">Correo electrónico:</label>
                    <input
                        type="email"
                        id="emailSignIn"
                        className="form-control"
                        aria-describedby="emailHelp"
                        value={email}
                        onChange={handleEmailChange}
                    />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="passwordSignIn" className="form-label">Contraseña:</label>
                    <input
                        type="password"
                        id="passwordSignIn"
                        className="form-control"
                        aria-describedby="passwordSignInHelpBlock"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                    <div id="passwordSignInHelpBlock" className="form-text">
                        <small>Must be 8-20 characters long. </small>                        
                    </div>
                </div>
                <div className="d-flex justify-content-around">
                    <Link to='/login'>Volver</Link>
                    <button type="submit" className="btn btn-primary">
                        Registrarse
                    </button>
                </div>
            </form>
        </div>
    )
}