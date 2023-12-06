import { Router } from 'express';

import { getProvinceById, getAllProvinces, createProvince, updateProvinceById, deleteProvinceById } from '../controllers/provinceController.js';

export const provinceRouter = Router();

provinceRouter.get('/:id', getProvinceById);
provinceRouter.get('/', getAllProvinces);
provinceRouter.post('/', createProvince);
provinceRouter.put('/:id', updateProvinceById);
provinceRouter.delete('/:id', deleteProvinceById);