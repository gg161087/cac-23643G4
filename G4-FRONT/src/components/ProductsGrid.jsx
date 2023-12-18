import { ProductCard } from './ProductCard.jsx'

import './ProductsGrid.css'

export const ProductsGrid = ({products, allProducts, setAllProducts, countProducts, setCountProducts, total, setTotal }) => { 
    return ( 
        <div className='container'>
            <div className="grid_container">
                {products.map((product) =>(
                    <ProductCard 
                        key={product.id} 
                        product={product}
                        products={products} 
                        allProducts={allProducts} 
                        setAllProducts={setAllProducts}
                        countProducts={countProducts}
                        setCountProducts={setCountProducts}
                        total={total} 
                        setTotal={setTotal}                        
                    >                        
                    </ProductCard>              
                ))}
            </div>
        </div>
    )
}