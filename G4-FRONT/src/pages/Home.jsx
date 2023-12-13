import { useState, useEffect } from "react";

import { Slider } from "./../components/Slider.jsx";
import { ProductsGrid } from "./../components/ProductsGrid.jsx";

import { getDinamic } from "./../utils/getDinamic.js";

export const Home = ({allProducts, setAllProducts, countProducts, setCountProducts, total, setTotal }) => {
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        const response = await getDinamic('products');
        const Allproducts = response.filter(producto => producto.category_id !== 6);
        setProducts(Allproducts);
    };

    useEffect(() => {
        getProducts();
    }, []);

    if (!products) {
        return (
            <div className="container">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }

    return (
        <>
            <Slider />
            <ProductsGrid 
                products={products} 
                allProducts={allProducts} 
                setAllProducts={setAllProducts}
                countProducts={countProducts}
                setCountProducts={setCountProducts}
                total={total} 
                setTotal={setTotal} 
            />
        </>
    );
};