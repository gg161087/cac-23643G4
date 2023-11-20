//import { BsDisplay } from "react-icons/bs";
import "./ProductoCard.css";

export const ProductoCard = ({ product }) => {
  return (
    <div className="card border-light" style={{ width: "24rem" }}>
      <center>
        <img
          src={product.imgUrl}
          style={{ maxHeight:150}}
          alt={`Image de ${product.name}`}
        />
      </center>
      <div className="card-body">
        <h5 className="card-title">{product.brand}</h5>
        <p className="card-text">{product.model}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item" style={{minHeight:80}}>{product.description}</li>
        <li className="list-group-item price">${product.price}</li>
        <li className="list-group-item">{product.dues} cuotas sin interes</li>
        <li className="list-group-item">{product.discount}% off</li>
      </ul>
      <div className="card-body">
        <a href="#" className="card-link">
          Card link
        </a>
        <a href="#" className="card-link">
          Another link
        </a>
      </div>
    </div>
  );
};
