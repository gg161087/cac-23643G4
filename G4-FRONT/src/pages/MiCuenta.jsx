import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

export const MiCuenta = () => {

    const [isLogin, setIsLogin] = useState(false)

    return (
        <Container>
            <h1>MI CUENTA</h1>
            <Link to="/">VOLVER AL INICIO</Link>
        </Container>
    );
};
