import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Nav, NavDropdown } from "react-bootstrap";
import { FaPhoneVolume, FaTruckMoving } from "react-icons/fa";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { BiSolidMessage, BiSolidUser } from "react-icons/bi";
import { AiFillHeart } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";

import { SearchBar } from "../components/SearchBar";
import { SearchResultsList } from "../components/SearchResultsList";
import { getDinamic } from "./../utils/getDinamic.js";

import logo from "/logo.png";
import "./Header.css";

export const Header = ({ categories }) => {
  const [results, setResults] = useState([]);

  return (
    <header className="header d-flex flex-wrap ">
      <Container fluid className="container__nav1">
        <Container className="d-flex justify-content-between align-items-center p-2 ">
          <Nav className="">
            <Link
              className="nav1__link text-decoration-none ms-3 me-3 "
              to="centro-de-ayuda"
            >
              <BiSolidMessage className="me-3" />
              Centro de ayuda
            </Link>
            <Link
              className="nav1__link text-decoration-none ms-3 me-3 "
              to="venta-telefonica"
            >
              <FaPhoneVolume className="me-3" />
              Venta telefónica
            </Link>
            <Link
              className="nav1__link text-decoration-none ms-3 me-3 "
              to="sucursales"
            >
              <SiHomeassistantcommunitystore className="me-3" />
              Sucursales
            </Link>
          </Nav>
          <Nav className="nav11">
            <Link
              className="nav1__link text-decoration-none ms-3 me-3 "
              to="envios-domicilio"
            >
              <FaTruckMoving className="me-3 " />
              Envíos a domicilio
            </Link>
          </Nav>
        </Container>
      </Container>
      {/* ************************************************************************* */}
      <Container fluid className="container__nav2">
        <Container className="">
          <Container className="d-flex align-items-center p-2">
            <Nav className="">
              <Link
                className="nav2__logo d-flex align-items-center p-1 text-decoration-none"
                to="/"
              >
                <img
                  className=" me-3"
                  src={logo}
                  alt="Logo"
                  style={{ width: "70px" }}
                />
                <h1>Argonauta</h1>
              </Link>
            </Nav>
            <Container className="header__search">
              <div className="search-bar-container">
                <SearchBar setResults={setResults} />
                {results && results.length > 0 && (
                  <SearchResultsList results={results} />
                )}
              </div>
            </Container>
            <Nav className="d-flex justify-content-end  w-50">
              <Link
                className="miCuenta__link text-decoration-none ms-3 me-3"
                to="miCuenta "
              >
                <BiSolidUser /> Mi cuenta
              </Link>
              <Link
                className="miCuenta__link text-decoration-none ms-3 me-3"
                to="favoritos"
              >
                <AiFillHeart />
              </Link>
              <Link
                className="miCuenta__link text-decoration-none ms-3 me-3"
                to="miCarrito"
              >
                <BsFillCartFill />
              </Link>
            </Nav>
          </Container>
        </Container>
      </Container>
      {/* ************************************************************************* */}
      <Container fluid className="container__nav3">
        <Container className="d-flex justify-content-between align-items-center p-2">
          <Nav className="">
            <NavDropdown
              className="nav3__link m-0 text-decoration-none"
              title="Categorías"
            >
              {categories.map((category) => (
                <NavDropdown.Item key={category.id}>
                  <Link
                    className="nav3__link text-decoration-none ms-3 me-3"
                    to={category.name}
                  >
                    {category.name}
                  </Link>
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
          <Nav className="">
            <Link
              className="nav3__link text-decoration-none ms-3 me-3"
              to="exclusivo-online"
            >
              Exclusivos online
            </Link>
            <Link
              className="nav3__link text-decoration-none ms-3 me-3"
              to="ofertas"
            >
              Ofertas
            </Link>
          </Nav>
        </Container>
      </Container>
    </header>
  );
};
