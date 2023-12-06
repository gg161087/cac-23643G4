import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';

export const MiCuenta = () => {
    const navigate = useNavigate()
    const [name, setName] = useState('')   

    useEffect(() => {
        const localToken = localStorage.getItem('token');
        const localName =  localStorage.getItem('name');
        setName(localName)     
        if (!localToken) {
            console.log(localToken);
            navigate('/login')                        
        }    
    },[]);
    if (!name) {
        return null
    }

    return (
        <Container>
            <h1>MI CUENTA - {name}</h1>
            <Link to="/">VOLVER AL INICIO</Link>
        </Container>
    );
};
