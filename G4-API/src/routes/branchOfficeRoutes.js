import { Router } from 'express';

import { getAllBranchOffices, getBranchOfficeById, createBranchOffice, updateBranchOfficeById, deleteBranchOfficeById } from './../controllers/branchOfficeController.js';

export const branchOfficeRouter = Router();

branchOfficeRouter.get('/:id', getBranchOfficeById);
branchOfficeRouter.get('/', getAllBranchOffices);
branchOfficeRouter.post('/:id', createBranchOffice);
branchOfficeRouter.put('/:id', updateBranchOfficeById);
branchOfficeRouter.delete('/:id', deleteBranchOfficeById);