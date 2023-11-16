export const ProductoCard = ({producto}) => {

    return (
        <div className="card" style={{width: '18rem'}}>
            <img src='' className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{producto.name}</h5>
                <p className="card-text">{producto.modelo}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">{producto.product_description}</li>
                <li className="list-group-item">A second item</li>
                <li className="list-group-item">A third item</li>
            </ul>
            <div className="card-body">
                <a href="#" className="card-link">Card link</a>
                <a href="#" className="card-link">Another link</a>
            </div>
        </div>
    )
}