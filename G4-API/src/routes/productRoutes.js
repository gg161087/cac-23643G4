import { Router } from 'express';

import { getProduct, getProducts, createProduct, updateProduct, deleteProduct } from './../controllers/productController.js';

export const productRouter = Router();

productRouter.get('/:id', getProduct);
productRouter.get('/', getProducts);
productRouter.post('/:id', createProduct);
productRouter.put('/:id', updateProduct);
productRouter.delete('/:id', deleteProduct);