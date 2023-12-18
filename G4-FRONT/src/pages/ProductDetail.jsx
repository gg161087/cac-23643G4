import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDinamic } from "../utils/getDinamic.js";
import { ProductsGrid } from "../components/ProductsGrid.jsx";
import "./ProductDetail.css";

export const ProductDetail = ({allProducts, setAllProducts, countProducts, setCountProducts, total, setTotal }) => {
    const { id } = useParams();

    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState('');
    const [categoryId, setCategoryId] = useState(null)
    const [image, setImage] = useState('')

    const getProductsByCategoryId = async () => {
        const response = await getDinamic('products'); 
        const dataFilter = await response.filter((element => element.category_id == categoryId))       
        setProducts(dataFilter);
    };

    const getProductById = async () => {
        const response = await getDinamic(`products/${id}`)        
        setProduct(response);
        setCategoryId(product.category_id)
        getProductsByCategoryId();
        setImage(response.imgUrl)            
    };

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
        getProductById();         
    }, [id, categoryId]);

    if (!product && products) {
        return <p>Cargando...</p>;
    }

    return (
        <>
            <div className="container contenedor">
                <div className="row">
                    <div className="col p-5 d-flex flex-column">
                        <img
                            src={image}
                            alt={product.model}
                            className="m-auto h-75 imgs1"
                        />
                        <section className="d-flex justify-content-evenly mt-2 sectionImgs">
                            {product.product_imgsurls &&
                                product.product_imgsurls.map((product) => (
                                    <div key={product.id} className="imgs">
                                        <img
                                            src={product.img_url}
                                            alt={product.model}
                                            className=""
                                            onMouseEnter={() => setImage(product.img_url)}
                                        />
                                    </div>
                                ))}
                        </section>
                    </div>
                    <div className="col d-flex flex-column info-card justify-content-center">
                        <span>Nuevo | +100 vendidos</span>
                        {/* Este campo tiene que ser dinamico */}
                        <h1>
                            {product.brand} - {product.model}
                        </h1>
                        <div className="rating"><span>4.8</span> <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-regular fa-star"></i> <span>(3)</span></div>
                        {/* Este campo tiene que ser dinamico */}
                        <p className="price"><span className="price-discount">${product.price}</span> <br /> ${Number.parseFloat(product.price*((100-product.discount)/100)).toFixed(2)} </p>
                        <p className="discount">-{Math.round(product.discount)}% off</p>
                        <p>Hasta {product.dues} cuotas sin interés</p>
                        <p>{product.description}</p>
                        <p>Codigo: {product.sku}</p>
                        <div className="btn-group">
                            <button className="btn-dark">Comprar ahora</button>
                            <button className="btn-light" onClick={()=> onAddProduct(product)}>Agregar al carrito</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <h1>
                        {product.brand} - {product.model}
                    </h1>
                </div>
                <div className="row">
                    <h3>Descripción</h3>
                </div>
                <div className="row">
                    <div className="col">{product.description}</div>                    
                </div>
                {product.product_specifications && <h3>Caracteristicas</h3>}                
                {product.product_specifications && product.product_specifications.map((specification)=> (
                    <div className="row">
                    <div className="col">{specification.name}</div>
                    <div className="col">{specification.value}</div>
                </div>
                ))}                
            </div>
            <div className="container contenedor mt-5 p-5">
                <h1>Productos que te puede interesar:</h1>
                <ProductsGrid products={products}/>                
            </div>
        </>
    );
};
