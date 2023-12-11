import { useState, useEffect } from "react";

import { Slider } from "./../components/Slider.jsx";
import { ProductsGrid } from "./../components/ProductsGrid.jsx";

import { getDinamic } from "./../utils/getDinamic.js";

export const Home = () => {
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        const response = await getDinamic('products');
        setProducts(response);
    };

    useEffect(() => {
        getProducts();
    }, []);

    if (!products) {
        return (
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        )
    }

    return (
        <>
            <Slider />
            <ProductsGrid products={products} />
        </>
    );
};