import React from "react";
import logo from "../assets/logo.png";
import "./Header.css";
import { Link } from "react-router-dom";
import { Container, Nav, Form, NavDropdown } from "react-bootstrap";
import { FaPhoneVolume, FaTruckMoving } from "react-icons/fa";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { BiSolidMessage, BiSolidUser } from "react-icons/bi";
import { AiFillHeart } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { TbCategoryFilled } from "react-icons/tb";

export const Header = () => {
  return (
    <header className="header">
      {/* ************************************************************************* */}
      <Container fluid className="container__nav1">
        <Nav className="nav1">
          <Link className="nav1__link" to="/centro-de-ayuda">
            <BiSolidMessage className="icon" />
            Centro de ayuda
          </Link>
          <Link className="nav1__link" to="/venta-telefonica">
            <FaPhoneVolume className="icon" />
            Venta telefónica
          </Link>
          <Link className="nav1__link" to="/sucursales">
            <SiHomeassistantcommunitystore className="icon" />
            Sucursales
          </Link>
        </Nav>
        <Nav className="nav11">
          <Link className="nav1__link" to="/envios-domicilio">
            <FaTruckMoving className="icon" />
            Envíos a domicilio
          </Link>
        </Nav>
      </Container>
      {/* ************************************************************************* */}
      <Container fluid className="container__nav2 ">
        <Nav className="nav2 ">
          <Link className="nav2__logo" to="/">
            <img
              className="logo__img"
              src={logo}
              alt="Logo"
              style={{ width: "70px" }}
            />
            <h1>Nombre de la Tienda</h1>
          </Link>
          <Form className="nav2__inputSearch">
            <Form.Control
              type="search"
              placeholder="Buscar producto"
              className=""
            />
          </Form>
          <Nav className="nav2__miCuenta">
            <Link className="miCuenta__link" to="/miCuenta">
              <BiSolidUser /> Mi cuenta
            </Link>
            <Link className="miCuenta__link" to="/favoritos">
              <AiFillHeart />
            </Link>
            <Link className="miCuenta__link" to="/miCarrito">
              <BsFillCartFill />
            </Link>
          </Nav>
        </Nav>
      </Container>
      {/* ************************************************************************* */}
      <Container fluid className="container__nav3">
        <Nav className="nav3">
          {/* <Link className="nav3__link">
            <TbCategoryFilled className="icon" />
            Categorías
          </Link> */}
          <NavDropdown className="nav3__link" title="Categoría">
            <NavDropdown.Item />
            Televisores
            <NavDropdown.Item />
            Celulares
            <NavDropdown.Item />
            Computadoras
            <NavDropdown.Divider />
            <NavDropdown.Item />
            Otras Categorías
          </NavDropdown>
          <Link className="nav3__link" to="/televisores">
            Televisores
          </Link>
          <Link className="nav3__link" to="/celulares">
            Celulares
          </Link>
          <Link className="nav3__link" to="/computadoras">
            Computadoras
          </Link>
        </Nav>
        <Nav>
          <Link className="nav3__link" to="/exclusivo-online">
            Exclusivos online
          </Link>
          <Link className="nav3__link" to="/ofertas">
            Ofertas
          </Link>
        </Nav>
      </Container>
    </header>
  );
};
