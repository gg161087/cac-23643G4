import { productModel, productSpecificationsModel, productImgsurlsModel } from './../models/productModel.js';

export const getAllProducts = async (req, res, next) => {
    try {
        const response = await productModel.findAll({ 
            include: [
                { model: productSpecificationsModel },
                /* { model: productImgsUrlModel}  */                               
            ]
        });
        if (!response) {
            return res.status(400).json({
                success: false,
                message: 'Bad request.',
                results: null
            })
        }       
        res.status(200).json({
            success: true,
            message: 'Products obtained correctly.',
            results: response
        });

    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: 'Error getting all products.',
            results: null
        })
    }
};

export const getProductById = async (req, res, next) => {
    const { id } = req.params
    try {
        const response = await productModel.findByPk(id, { 
            include: [
                { model: productSpecificationsModel },
                { model: productImgsurlsModel}                                
            ]
        });
        if (!response) {
            res.status(400).json({
                success: false,
                message: 'Bad request.',
                results: null
            })
        }
        res.status(200).json({
            success: true,
            message: 'Product obtained correctly.',
            results: response
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: 'Error getting product.',
            results: null
        })
    }
};

export const createProduct = async (req, res) => {    
    const { brand, model, description, price, 
        stock, discount, sku, dues, imgUrl, category_id } = req.body;
    if (!brand || !model || !description|| !price|| !stock || 
        !discount || !sku || !dues|| !imgUrl|| !category_id) {
        return res.status(400).json({
            success: false,
            message: 'Bad request.',
            results: null
        });
    };
    const newProduct = {
        brand:brand,
        model:model,
        description:description,
        price:price,
        stock:stock,
        discount:discount,
        sku:sku,
        dues:dues,
        imgUrl:imgUrl,
        category_id:category_id
    };
    try {
        const response = await productModel.create({newProduct});
        if (!response) {
            return res.status(403).json({
                success: false,
                message: 'Error trying to create the product.',
                results: null
            });
        };
        res.status(201).json({
            success: true,
            message: 'Product created successfully.',
            results: newProduct
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Unexpected error with the server.',
            results: null
        });
    };
};

export const updateProductById = async (req, res) => {
    const { id } = req.params;
    const { brand, model, description, price, 
        stock, discount, sku, dues, imgUrl, category_id } = req.body;
    if (!brand || !model || !description|| !price|| !stock || 
        !discount || !sku || !dues|| !imgUrl|| !category_id) {
        return res.status(400).json({
            success: false,
            message: 'Bad request.',
            results: null
        });
    };
    const updateProduct = {
            brand:brand,
            model:model,
            description:description,
            price:price,
            stock:stock,
            discount:discount,
            sku:sku,
            dues:dues,
            imgUrl:imgUrl,
            category_id:category_id
    };
    try {
        const response = await productModel.update(
            { updateProduct },
            { where: { id: id } }
        );
        if (response[0] === 0 || !response) {
            return res.status(400).json({
                success: false,
                message: 'Error trying to update/find the product.',
                results: null
            });
        };
        res.status(200).json({
            success: true,
            message: 'Product updated correctly.',
            results: updateProduct
        });
    } catch (error) {
        console.error(error);        
        res.status(500).json({
            success: false,
            message: 'Error when updating product.',
            results: null
        });
    };
};

export const deleteProductById = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await productModel.destroy({
            where: { id: id }
        });
        if (response === 0) {
            return res.status(400).json({
                success: false,                
                message: 'Product not found or cannot be deleted.'
            });
        };
        res.status(200).json({
            success: true,            
            message: 'Product deleted successfully.'
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,            
            message: 'Error when trying to delete.'
        });
    };
};