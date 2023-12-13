import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { getDinamic } from '../../utils/getDinamic.js';
import { updateDinamic } from '../../utils/updateDinamic.js';

export const EditProduct = ({id}) => {
    console.log(id);
    const [product, setProduct] = useState('');

    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [stock, setStock] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [sku, setSku] = useState('');
    const [dues, setDues] = useState(0);
    const [imgUrl, setImgUrl] = useState('');
    const [categoryId, setCategoryId] = useState(0);

    const getProductById = async () => {
        const response = await getDinamic(`products/${id}`)
        setProduct(response)
        setBrand(response.brand)
        setModel(response.model)
        setDescription(response.description)
        setPrice(response.price)
        setDiscount(response.discount)
        setSku(response.sku)
        setDues(response.dues)
        setImgUrl(response.imgUrl)
        setCategoryId(response.category_id)        
    }

    useEffect(() => {
        getProductById()
    }, [id])

    const updateProduct = async (e) => {
        e.preventDefault()
        const updateProduct = {
            brand: brand,
            model: model,
            description: description,
            price: price,
            stock: stock,
            discount: discount,
            sku: sku,
            dues: dues,
            imgUrl: imgUrl,
            category_id: categoryId
        }
        updateDinamic('products', updateProduct)
    }

    if (!product) {
        return (
            <div className="container">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }
    return (
        <div className='container'>
            <h1>Editar Producto </h1>
            <form onSubmit={updateProduct}>
                <div className="mb-3">
                    <label className="form-label">Marca</label>
                    <input
                        type="text"
                        value={brand}
                        onChange={(e) => setBrand(e.target.value)}
                        className="form-control"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Modelo</label>
                    <input
                        type="text"
                        value={model}
                        onChange={(e) => setModel(e.target.value)}
                        className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Descripcción</label>
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="form-control"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Precio</label>
                    <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="form-control"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Stock</label>
                    <input
                        type="number"
                        value={stock}
                        onChange={(e) => setStock(e.target.value)}
                        className="form-control"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Descuento</label>
                    <input
                        type="number"
                        value={discount}
                        onChange={(e) => setDiscount(e.target.value)}
                        className="form-control"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Codigo</label>
                    <input
                        type="text"
                        value={sku}
                        onChange={(e) => setSku(e.target.value)}
                        className="form-control"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Cuotas</label>
                    <input
                        type="number"
                        value={dues}
                        onChange={(e) => setDues(e.target.value)}
                        className="form-control"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Imagen URL</label>
                    <input
                        type="text"
                        value={imgUrl}
                        onChange={(e) => setImgUrl(e.target.value)}
                        className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Categoria ID</label>
                    <input
                        type="number"
                        value={categoryId}
                        onChange={(e) => setCategoryId(e.target.value)}
                        className="form-control"/>
                </div>
                <button type="submit" className="btn btn-primary">EDITAR</button>
            </form>
        </div>
    )
}