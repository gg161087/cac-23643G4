import { Router } from 'express';

import { getCategory, getCategories, createCategory, updateCategory, deleteCategory } from './../controllers/categoryController.js';

export const categoryRouter = Router();

categoryRouter.get('/:id', getCategory);
categoryRouter.get('/', getCategories);
categoryRouter.post('/:id', createCategory);
categoryRouter.put('/:id', updateCategory);
categoryRouter.delete('/:id', deleteCategory);