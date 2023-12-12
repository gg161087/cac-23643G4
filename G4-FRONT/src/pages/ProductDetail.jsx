import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDinamic } from "../utils/getDinamic.js";
import { ProductsGrid } from "../components/ProductsGrid.jsx";
import { Container, Row, Col } from "react-bootstrap";
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

    console.log(allProducts);

    return (
        <>
            <Container className="contenedor">
                <Row className="">
                    <Col md={8} className="p-5 d-flex flex-column">
                        <img
                            src={image}
                            alt={product.model}
                            className="m-auto h-75 imgs1"
                        />
                        <section className="d-flex justify-content-evenly mt-2 sectionImgs">
                            {product.product_imgsurls &&
                                product.product_imgsurls.map((product) => (
                                    <div key={product.img_url} className="imgs">
                                        <img
                                            src={product.img_url}
                                            alt={product.model}
                                            className=""
                                            onMouseEnter={() => setImage(product.img_url)}
                                        />
                                    </div>
                                ))}
                        </section>
                    </Col>
                    <Col md={4} className="d-flex flex-column justify-content-center">
                        <span>Nuevo | +100 vendidos</span>
                        {/* Este campo tiene que ser dinamico */}
                        <h1>
                            {product.brand} - {product.model}
                        </h1>
                        <span>4.8</span> ⭐⭐⭐⭐ <span>(3)</span>
                        {/* Este campo tiene que ser dinamico */}
                        <p className="price">{product.price}</p>
                        <p>{product.dues} </p>
                        <p>{product.discount}</p>
                        <p>{product.description}</p>
                        <p>Codigo: {product.sku}</p>
                        <div className="btn-group">
                            <button className="btn-dark">Comprar ahora</button>
                            <button className="btn-light" onClick={()=> onAddProduct(product)}>Agregar al carrito</button>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <h1>
                        {product.brand} - {product.model}
                    </h1>
                </Row>
                <Row>
                    <h3>Caracteristicas tecnicas</h3>
                </Row>
                <Row>
                    <Col>Pantalla</Col>
                    <Col>Dynamic AMOLED 2X, 6.2 pulgadas</Col>
                </Row>
                <Row>
                    <Col>Procesador</Col>
                    <Col>Exynos 990</Col>
                </Row>
                <Row>
                    <Col>RAM</Col>
                    <Col>8 GB</Col>
                </Row>
                <Row>
                    <Col>Almacenamiento interno</Col>
                    <Col>128 GB</Col>
                </Row>
                <Row>
                    <Col>Camara</Col>
                    <Col>
                        Doble cámara trasera: 12 MP (principal) + 12 MP (ultra gran angular)
                    </Col>
                </Row>
            </Container>
            <Container className="contenedor mt-5 p-5">
                <h1>Productos que te puede interesar:</h1>
                <ProductsGrid products={products}/>                
            </Container>
        </>
    );
};
