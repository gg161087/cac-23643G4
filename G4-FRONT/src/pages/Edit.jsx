import { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom"

import { EditProduct } from './../components/edit/EditProduct.jsx';

export const Edit = () => {
    const { category } = useParams();
    const { id } = useParams();
    const [component, setComponent] = useState('')

    const getParam = (category) => {
        switch (category) {
            case 'products':
                return <EditProduct id={id}/>                
                break;       
            default:
                return <div>Default</div>                
        }
    }
    useEffect(() =>{               
        setComponent(getParam(category))        
    },[category])
    if (!component) {
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
           {component}
        </div>
    )
}