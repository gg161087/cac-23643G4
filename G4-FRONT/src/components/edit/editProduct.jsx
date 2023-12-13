import { useParams } from 'react-router-dom';
import { useState, useEffect} from 'react';

import { getDinamic } from './../../utils/getDinamic.js';

export const editProduct = () => {
    const id = useParams();
    const [product, setProduct] = useState('');

    const getProductById = async () => {
        const response = await getDinamic(`products/${id}`)
        setProduct(response)
    }
    
    useEffect(() => {
        getProductById()
    },[id])

    if (!product) {
        return (
            <div className="container">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }

    return (
        <div>editProduct</div>
    )
}