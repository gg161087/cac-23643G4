import { getCategories, getCategory, createCategory, updateCategory, deleteCategory } from './../models/categoryModel.js';

export const getAllCategories = async (req, res, next) => {
    const dbResponse = await getCategories();
    dbResponse instanceof Error
        ? next(dbResponse)
        : res.status(200).json(dbResponse);
}
export const getCategoryById = async (req, res, next) => {
    if (notNumber(req.params.id, res)) return;
    const dbResponse = await getCategory(Number(req.params.id));
    if (dbResponse instanceof Error) return next(dbResponse);
    dbResponse.length ? res.status(200).json(dbResponse) : next();
}
export const createNewCategory = async (req, res, next) => {    
    const dbResponse = await createCategory({ ...req.body});
    dbResponse instanceof Error
        ? next(dbResponse)
        : res.status(201).json(`Category ${req.body.name} created!`);
}
export const updateCategoryById = async (req, res, next) => {
    if (notNumber(req.params.id, res)) return;
    const dbResponse = await updateCategory(req.params.id, req.body);
    if (dbResponse instanceof Error) return next(dbResponse);
    dbResponse.affectedRows ? res.status(200).json(req.body) : next();
}
export const deleteCategoryById = async (req, res, next) => {
    if (notNumber(req.params.id, res)) return;
    const dbResponse = await deleteCategory(req.params.id);
    if (dbResponse instanceof Error) return next(dbResponse);
    dbResponse.affectedRows ? res.status(204).end() : next();
}