import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Nav, NavDropdown } from "react-bootstrap";
import { FaPhoneVolume, FaTruckMoving } from "react-icons/fa";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { BiSolidMessage, BiSolidUser } from "react-icons/bi";

import { SearchBar } from "../components/SearchBar";
import { SearchResultsList } from "../components/SearchResultsList";

import { getDinamic } from './../utils/getDinamic.js';

import logo from "/logo3.png";
import "./Header.css";

export const Header = ({
    allProducts,
    setAllProducts,
    total,
    countProducts,
    setCountProducts,
    setTotal
}) => {
    const [results, setResults] = useState([]);
    const [categories, setCategories] = useState([]);
    const [active, setActive] = useState(false)

    const getCategories = async () => {
        const response = await getDinamic('categories');
        setCategories(response);
    };

    const onDeleteProduct = product => {
        const results = allProducts.filter(
            element => element.id !== product.id
        );
        setTotal(total - product.price * product.quantity);
        setCountProducts(countProducts - product.quantity);
        setAllProducts(results);
    };

    const onCleanCart = () => {
        setAllProducts([]);
        setTotal(0);
        setCountProducts(0);
    };

    useEffect(() => {
        getCategories();
    }, []);

    if (!categories) {
        return (
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        )
    }

    return (
        <header className="header align-items-center">
            <div className="container-fluid header__nav1">
                <div className="container text-center d-flex d-flex align-items-center gap-5 pt-2 pb-2">
                    <Link className="nav1__link text-decoration-none d-flex align-items-center mr-3" to="centro-de-ayuda">
                        <BiSolidMessage className="me-3" />
                        Centro de ayuda
                    </Link>
                    <Link className="nav1__link text-decoration-none d-flex align-items-center mr-3" to="venta-telefonica">
                        <FaPhoneVolume className="me-3" />
                        Venta telefónica
                    </Link>
                    <Link className="nav1__link text-decoration-none d-flex align-items-center mr-3" to="sucursales">
                        <SiHomeassistantcommunitystore className="me-3" />
                        Sucursales
                    </Link>
                    <Link className="nav1__link text-decoration-none  d-flex align-items-center ms-auto" to="envios-domicilio">
                        <FaTruckMoving className="me-3" />
                        Envíos a domicilio
                    </Link>                    
                </div>
            </div>
            <div className="container-fluid header__nav2">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-6 col-md-3">
                            <Nav>
                                <Link
                                    className="nav2__logo d-flex align-items-center p-1 text-decoration-none"
                                    to="/"
                                >
                                    <img
                                        className=" me-3"
                                        src={logo}
                                        alt="Logo"
                                        style={{ width: "80px" }}
                                    />
                                    <h1>ITECHNOLOGY</h1>
                                </Link>
                            </Nav>
                        </div>
                        <div className="col-6 col-md-6">
                            <div className="header__search">
                                <div className="search-bar-container">
                                    <SearchBar setResults={setResults} />
                                    {results && results.length > 0 && (
                                        <SearchResultsList results={results} />
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-3">
                            <Nav className="d-flex flex-nowrap justify-content-end align-items-center gap-3">
                                <Link
                                    className="miCuenta__link text-decoration-none ms-3 me-3 "
                                    to="miCuenta "
                                >
                                    <BiSolidUser /> <span className="cuenta">Mi cuenta</span>
                                </Link>
                                <div className='container-icon'>
                                    <div
                                        className='container-cart-icon'
                                        onClick={() => setActive(!active)}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-cart-fill" viewBox="0 0 16 16">
                                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                                        </svg>
                                        <div className='count-products'>
                                            <span id='contador-productos'>{countProducts}</span>
                                        </div>
                                    </div>

                                    <div className={`container-cart-products ${active ? '' : 'hidden-cart'}`}>
                                        {allProducts.length ? (
                                            <>
                                                <div className='row-product'>
                                                    {allProducts.map(product => (
                                                        <div className='cart-product' key={product.id}>
                                                            <div className='info-cart-product'>
                                                                <span className='cantidad-producto-carrito'>
                                                                    {product.quantity}
                                                                </span>
                                                                <p className='titulo-producto-carrito'>
                                                                    {product.model}
                                                                </p>
                                                                <span className='precio-producto-carrito'>
                                                                    ${product.price}
                                                                </span>
                                                            </div>
                                                            <svg
                                                                xmlns='http://www.w3.org/2000/svg'
                                                                fill='none'
                                                                viewBox='0 0 24 24'
                                                                strokeWidth='1.5'
                                                                stroke='currentColor'
                                                                className='icon-close'
                                                                onClick={() => onDeleteProduct(product)}
                                                            >
                                                                <path
                                                                    strokeLinecap='round'
                                                                    strokeLinejoin='round'
                                                                    d='M6 18L18 6M6 6l12 12'
                                                                />
                                                            </svg>
                                                        </div>
                                                    ))}
                                                </div>
                                                <div className='cart-total'>
                                                    <h3>Total:</h3>
                                                    <span className='total-pagar'>${total}</span>
                                                </div>
                                                <button className='btn-clear-all' onClick={onCleanCart}>
                                                    Vaciar Carrito
                                                </button>
                                            </>
                                        ) : (
                                            <p className='cart-empty'>El carrito está vacío</p>
                                        )}
                                    </div>
                                </div>
                            </Nav>
                        </div>
                    </div>
                </div>
            </div>
            <div fluid className="container-fluid header__nav3">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center p-3 ">
                        <Nav>
                            <NavDropdown
                                className="m-0 text-decoration-none"
                                title="Categorías"
                            >
                                {categories.map((category) => (
                                    <Link key={category.id}
                                        className="text-decoration-none ms-3 me-3  d-flex fs-4 categoryList"
                                        to={`products/${category.name}`}
                                    >
                                        {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
                                    </Link>
                                ))
                                }
                            </NavDropdown>
                        </Nav>
                        <Nav className="ultima">
                            <Link
                                className="nav3__link text-decoration-none ms-3 me-3 "
                                to="exclusivo-online "
                            >
                                Exclusivos online
                            </Link>
                            <Link
                                className="nav3__link text-decoration-none ms-3 me-3 "
                                to="ofertas"
                            >
                                Ofertas
                            </Link>
                        </Nav>
                    </div>
                </div>
            </div>
        </header>
    );
};