export const ProductoCard = ({product}) => {

    return (
        <div className="card" style={{width: '18rem'}}>
            <img src={product.imgUrl} className="card-img-top" alt={`Image de ${product.name}`}/>
            <div className="card-body">
                <h5 className="card-title">{product.brand}</h5>
                <p className="card-text">{product.model}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">{product.description}</li>
                <li className="list-group-item">${product.price}</li>
                <li className="list-group-item">{product.dues} cuotas sin interes</li>
                <li className="list-group-item">{product.discount}% off</li>
            </ul>
            <div className="card-body">
                <a href="#" className="card-link">Card link</a>
                <a href="#" className="card-link">Another link</a>
            </div>
        </div>
    )
}