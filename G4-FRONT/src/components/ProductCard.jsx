import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { getDinamic } from "./../utils/getDinamic.js";
import "./ProductCard.css";

export const ProductCard = ({ product, allProducts, setAllProducts, countProducts, setCountProducts, total, setTotal }) => {
    let precio = 0;

    if (product.discount > 0) {
        precio = product.price - (product.discount / 100) * product.price;
    }

    const [category, setCategory] = useState([]);

    const onAddProduct = product => {        
        if(allProducts.find(element => element.id === product.id)){            
            const cardProducts = allProducts.map(element =>                
                element.id === product.id ? {...element, quantity: element.quantity + 1} : element
            )                      
            setTotal(total + product.price * product.quantity)
            setCountProducts(countProducts + product.quantity)
            return setAllProducts([...cardProducts])
        }        
        setTotal(total + product.price * product.quantity)
        setCountProducts(countProducts + product.quantity)
        setAllProducts([...allProducts, product])
    }

    useEffect(() => {
        const getCategory = async () => {
            const response = await getDinamic(`categories/${product.category_id}`);
            setCategory(response);
        };
        getCategory();
    }, [product]);

    return (
        <>

            <div className="card border-light">
                <img
                    className="card-img-top"
                    src={product.imgUrl}
                    alt={`Image de ${product.name}`}
                />
                <Link to={`/products/${category.name}/${product.id}`}>
                    <div className="card-body">
                        <h5 className="card-title text-center fs-3">
                            {product.brand} - {product.model}
                        </h5>
                        <ul className="list-group list-group-flush">
                            <li
                                className="list-group-item text-center"
                                style={{ minHeight: 80 }}
                            >
                                {product.description}
                            </li>
                            <li className="list-group-item price fs-2 ">${product.price}</li>
                            <li className="list-group-item">
                                {product.dues} cuotas sin interés
                            </li>
                            {precio > 0 && (
                                <li className="list-group-item ">
                                    ${precio.toFixed(2)} con el <span className="discount">{Math.round(product.discount)}% off</span>
                                </li>
                            )}
                        </ul>
                    </div>
                </Link>
                <div className="chango">
                    <svg onClick={()=> onAddProduct(product)} xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                        <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0"/>
                    </svg>               
                </div>
            </div>
        </>
    );
};