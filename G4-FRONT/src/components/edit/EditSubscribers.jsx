import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { getDinamic } from '../../utils/getDinamic.js';
import { updateDinamic } from '../../utils/updateDinamic.js';

export const EditSubscribers = ({id}) => {
    const navigate = useNavigate();

    const [subscriber, setSubscriber] = useState('');

    const [email, setEmail] = useState('');

    const getSubscriberById = async () => {
        const response = await getDinamic(`subscribers/${id}`)
        setSubscriber(response)
        setEmail(response.email)    
    }

    useEffect(() => {
        getSubscriberById()
    }, [id])

    const updateSubscribers = async (e) => {
        e.preventDefault()        
        const result = await updateDinamic('subscribers', id, {email:email})
    }

    if (!subscriber) {
        return (
            <div className="container">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }
    return (
        <div className='container'>
            <h1>Editar Suscriptor </h1>
            <form onSubmit={updateSubscribers}>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control"/>
                </div>                
                <button type="submit" className="btn btn-primary">EDITAR</button>
            </form>
        </div>
    )
}