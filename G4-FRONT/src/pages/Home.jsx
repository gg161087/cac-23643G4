import { Container } from "react-bootstrap";

import { Slider } from './../components/Slider.jsx'
import { ProductosGrid } from './../components/ProductosGrid.jsx';

import products from './../data/products.json';

export const Home = () => {
    return (
        <Container>        
            <Slider/>  
            <ProductosGrid products={products}/>       
        </Container>
    )
}