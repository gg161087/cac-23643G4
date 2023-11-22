import { Link } from "react-router-dom"

import "./ProductoCard.css";

export const ProductoCard = ({ product }) => { 
    let precio = 0

    if (product.discount > 0) {        
        precio = product.price - ((product.discount/100) * product.price);        
    }

    return (
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
            <div className="card-body">
                <Link to='/' >
                    <p className="card-link">Card link</p>
                </Link>                
            </div>
        </div>
    );
};