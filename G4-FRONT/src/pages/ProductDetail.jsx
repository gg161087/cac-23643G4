import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDinamic, getDinamicById } from "../utils/getDinamic.js";
import { ProductsGrid } from "../components/ProductsGrid.jsx";
import { Container, Row, Col } from "react-bootstrap";
import "./ProductDetail.css";

export const ProductDetail = () => {
  const { id } = useParams();

  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState("");

  useEffect(() => {
    const getProduct = async () => {
      const findProduct = await getDinamicById("data/products.json", id);
      setProduct(findProduct);
      console.log(product);
    };
    getProduct();
    const getProducts = async () => {
      const response = await getDinamic("data/products.json");
      setProducts(response);
    };
    getProducts();
  }, [id]);

  if (!product) {
    return <p>Cargando...</p>;
  }

  return (
    <>
      <Container className="contenedor">
        <Row>
          <Col md={8} className=" p-5 d-flex flex-column">
            <h1 className=" text-center fw-bold">{product.brand}</h1>
            <img src={product.imgUrl} alt="" className="m-auto" />
            <section className="d-flex justify-content-evenly  mt-2">
              <div>
                <img src={product.imgsUrl.imgUrl1} />
              </div>
              <div>
                <img src={product.imgsUrl.imgUrl2} />
              </div>
              <div>
                <img src={product.imgsUrl.imgUrl3} />
              </div>
              <div>
                <img src={product.imgsUrl.imgUrl4} />
              </div>
              <div>
                <img src={product.imgsUrl.imgUrl5} />
              </div>
            </section>
          </Col>
          {console.log(product.imgsUrl)}
          <Col md={4} className="d-flex flex-column justify-content-center">
            <span>Nuevo | +100 vendidos</span>
            <h1>
              {product.brand} - {product.model}
            </h1>
            <span>4.8</span> ⭐⭐⭐⭐ <span>(3)</span>
            <p className="price">${product.price}</p>
            <p>{product.dues} sin interes</p>
            <p>Pagando en efecto un {product.discount}% off</p>
            <p>{product.description}</p>
            <p>Codigo: {product.sku}</p>
            <div className="btn-group">
              <button className="btn-dark">Comprar ahora</button>
              <button className="btn-light">Agregar al carrito</button>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <h1>Productos que te puede interesar:</h1>
        <ProductsGrid products={products} />
      </Container>
    </>
  );
};
