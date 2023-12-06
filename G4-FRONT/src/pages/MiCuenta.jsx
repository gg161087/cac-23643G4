import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import { getDinamic } from './../utils/getDinamic.js';

export const MiCuenta = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState(null)

    const localToken = localStorage.getItem('token');
    const localUserId =  localStorage.getItem('userId');

    const getUser = async (id) => {
        const response = await getDinamic(`users/${id}`)
        if (response) {
            setUser(response)
        }
    }

    const logOut = () => {
        localStorage.removeItem('userId');
        localStorage.removeItem('token');
        console.log('borrado');
        navigate('/login')
    }

    useEffect(() => { 
        !localToken && navigate('/login')   
        localUserId && getUser(localUserId)     
    },[]);
    if (!user) {
        return null
    }

    return (
        <Container>
            <h1>MI CUENTA - {user.name}</h1>
            <Link to="/">VOLVER AL INICIO</Link>
            <button onClick={() => logOut()}>Log Out</button>
        </Container>
    );
};
