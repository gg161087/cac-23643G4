import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const mySwal = withReactContent(Swal);

import { CrudsAdmin } from '../components/crud/CrudsAdmin.jsx';

import { registerSchema } from './../schemas/registerSchema.js';

import { postRegister } from './../utils/postDinamic.js';
import { getDinamic } from './../utils/getDinamic.js';

export const MiCuenta = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState(null)
    const [name, setName] = useState('')
    const [last_name, setLast_name] = useState('')
    const [telephone, setTelephone] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isAdmin, setIsAdmin] = useState(false)

    const localToken = localStorage.getItem('token');
    const localUserId = localStorage.getItem('userId');

    const getUser = async (id) => {
        const response = await getDinamic(`users/${id}`)
        if (response) {
            setUser(response)
            setName(response.name)
            setLast_name(response.last_name)
            setTelephone(response.telephone)
            setEmail(response.email)
            setPassword(response.password)
            response.roles.some(role => role.name === 'administrator') && setIsAdmin(!isAdmin)                        
        }        
    }

    const logOut = () => {
        localStorage.removeItem('userId');
        localStorage.removeItem('token');
        navigate('/login')
    }

    useEffect(() => {
        !localToken && navigate('/login')
        localUserId && getUser(localUserId)
    }, []);
    if (!user) {
        return null
    }

    return (
        <div className="container d-flex justify-content-center flex-column">
            <div className='justify-content-center d-flex gap-3 mt-4'>
                <h1>MI CUENTA - {user.name}</h1>
                
            </div>
            <div className='justify-content-center d-flex gap-3 mt-4'>
                <p>{user.name} {user.last_name}</p>                
                <p>{user.email}</p>                
            </div>                       
            {isAdmin&& <CrudsAdmin></CrudsAdmin>}
            <div className='justify-content-center d-flex flex-column align-items-center gap-3 mt-4 mb-4'>
                <div>
                    <button className='btn btn-danger btn-lg' onClick={() => logOut()}>Log Out</button> 
                </div>
                <Link to="/">VOLVER AL INICIO</Link>
            </div>
        </div>
    );
};
