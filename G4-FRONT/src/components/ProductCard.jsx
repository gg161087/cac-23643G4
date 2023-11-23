import { useState, useEffect } from 'react';
import { Link } from "react-router-dom"

import { getCategoryByCategoryId } from './../utils/getDinamic.js';
import "./ProductCard.css";

export const ProductCard = ({ product }) => { 

    let precio = 0

    if (product.discount > 0) {        
        precio = product.price - ((product.discount/100) * product.price);        
    }

    const [category, setCategory] = useState([])

    useEffect(() =>{
        const getCategory = async () => {
            const response = await getCategoryByCategoryId('data/categories.json', product.category_id)
            setCategory(response)                        
        }        
        getCategory()
    },[product])

    return (
        <Link to={`/${category.name}/${product.id}`}>
            <div className="card border-light">
                <img
                    className="card-img-top"
                    src={product.imgUrl}
                    alt={`Image de ${product.name}`}
                />
                <div className="card-body">
                    <h5 className="card-title">{product.brand} - {product.model}</h5>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item" style={{ minHeight: 80 }}>{product.description}</li>
                        <li className="list-group-item price">${product.price}</li>
                        <li className="list-group-item">{product.dues} cuotas sin interes</li>
                        {precio>0 && <li className="list-group-item">${precio.toFixed(2)} con el {product.discount}% off</li>}
                    </ul>
                </div>            
            </div>
        </Link>
    );
};