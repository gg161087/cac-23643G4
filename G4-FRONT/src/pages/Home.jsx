import { Slider } from './../components/Slider.jsx'
import { ProductosGrid } from './../components/ProductosGrid.jsx';

import products from './../data/products.json';

export const Home = () => {
    return (
        <>        
            <Slider/>  
            <ProductosGrid products={products}/>       
        </>
    )
}