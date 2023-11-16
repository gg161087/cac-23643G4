import { Header } from './../partials/Header.jsx'
import { Slider } from './../components/Slider.jsx'
import { ProductosGrid } from './../components/ProductosGrid.jsx';
import { Footer } from './../partials/Footer.jsx'

import products from './../data/products.json';

export const Home = () => {
    return (
        <>
            <Header/>
            <Slider/>  
            <ProductosGrid products={products}/>            
            <Footer/>
        </>
    )
}