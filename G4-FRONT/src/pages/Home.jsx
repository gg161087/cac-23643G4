import { useState, useEffect } from "react";

import { Slider } from "./../components/Slider.jsx";
import { ProductsGrid } from "./../components/ProductsGrid.jsx";

import { getDinamic } from "./../utils/getDinamic.js";

export const Home = () => {
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        const response = await getDinamic("data/products.json");
        setProducts(response);
    };

    useEffect(() => {        
        getProducts();
    }, []);

    return (
        <>
            <Slider />
            <ProductsGrid products={products} />
        </>
    );
};