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
      const findProduct = await getDinamicById("api/products", id);
      setProduct(findProduct);
      console.log(product);
    };
    getProduct();
    const getProducts = async () => {
      const response = await getDinamic("api/products");
      setProducts(response);
    };
    getProducts();
  }, [id]);

  if (!product) {
    return <p>Cargando...</p>;
  }

  return (
    <>
      <Container className="contenedor  ">
        <Row className="">
          <Col md={8} className=" p-5 d-flex flex-column ">
            <img
              src={product.imgUrl}
              alt={product.model}
              className="m-auto h-75"
            />
            <section className="d-flex justify-content-evenly  mt-2">
              {product.product_imgsurls &&
                product.product_imgsurls.map((product) => (
                  <div>
                    <img
                      src={product.img_url}
                      onMouseEnter={() => console.log("Cambiar imagen")}
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
              <button className="btn-light">Agregar al carrito</button>
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
        <ProductsGrid products={products} />
      </Container>
    </>
  );
};
