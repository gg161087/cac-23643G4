import { Container } from "react-bootstrap";

import { ProductCard } from './ProductCard.jsx'

import './ProductsGrid.css'

export const ProductsGrid = ({products}) => { 

    return ( 
        <Container>
            <Container className="grid_container">
                {products.map((product) =>(
                    <ProductCard key={product.id} product={product}></ProductCard>              
                ))}
            </Container>
        </Container>
    )
}