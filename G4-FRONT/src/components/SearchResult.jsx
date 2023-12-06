import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './SearchResult.css';
import { getDinamicByModel } from './../utils/getDinamic.js';

export const SearchResult = ({ result }) => {  
    const navigate = useNavigate()  
    const [product, setProduct] = useState('')

    const getProductByModel = async (model) => {
        const response = await getDinamicByModel('products', model);
        setProduct(response);        
    };
    const handleClick = (content) => {        
        getProductByModel(content)
        if(!product){
            return null
        }
        navigate(`products/${product.category.name}/${product.id}`)
    }
    return (
        <div
            className="search-result"
            onClick={(e) => handleClick(e.target.textContent)}>
            {result}
        </div>
    );
};
