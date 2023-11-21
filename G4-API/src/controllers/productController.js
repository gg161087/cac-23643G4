import { getProduct, getProducts, createProduct, updateProduct, deleteProduct} from './../models/productModel.js';

export const getAllProducts = async (req, res, next) => {
    const dbResponse = await getProducts();
    dbResponse instanceof Error
        ? next(dbResponse)
        : res.status(200).json(dbResponse);
}
export const getProductById = async (req, res, next) => {
    if (notNumber(req.params.id, res)) return;
    const dbResponse = await getProduct(Number(req.params.id));
    if (dbResponse instanceof Error) return next(dbResponse);
    dbResponse.length ? res.status(200).json(dbResponse) : next();
}
export const createNewProduct = async (req, res, next) => {    
    const dbResponse = await createProduct({ ...req.body});
    dbResponse instanceof Error
        ? next(dbResponse)
        : res.status(201).json(`Product ${req.body.name} created!`);
}
export const updateProductById = async (req, res, next) => {
    if (notNumber(req.params.id, res)) return;
    const dbResponse = await updateProduct(req.params.id, req.body);
    if (dbResponse instanceof Error) return next(dbResponse);
    dbResponse.affectedRows ? res.status(200).json(req.body) : next();
}
export const deleteProductById = async (req, res, next) => {
    if (notNumber(req.params.id, res)) return;
    const dbResponse = await deleteProduct(req.params.id);
    console.log(dbResponse);
    if (dbResponse instanceof Error) return next(dbResponse);
    dbResponse.affectedRows ? res.status(204).end() : next();
}