import logo from "../assets/logo.png";
import "./Header.css";
import { Link } from "react-router-dom";
import { Container, Nav, Form, NavDropdown } from "react-bootstrap";
import { FaPhoneVolume, FaTruckMoving } from "react-icons/fa";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { BiSolidMessage, BiSolidUser } from "react-icons/bi";
import { AiFillHeart } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";

export const Header = () => {
  return (
    <header className="header d-flex flex-wrap">
      {/* ************************************************************************* */}
      <Container
        fluid
        className="container__nav1 d-flex justify-content-between align-items-center p-2"
      >
        <Nav className="">
          <Link
            className="nav1__link text-decoration-none ms-2 me-2"
            to="/centro-de-ayuda"
          >
            <BiSolidMessage className="me-2" />
            Centro de ayuda
          </Link>
          <Link
            className="nav1__link text-decoration-none ms-2 me-2"
            to="/venta-telefonica"
          >
            <FaPhoneVolume className="me-2" />
            Venta telefónica
          </Link>
          <Link
            className="nav1__link text-decoration-none ms-2 me-2"
            to="/sucursales"
          >
            <SiHomeassistantcommunitystore className="me-2" />
            Sucursales
          </Link>
        </Nav>
        <Nav className="nav11">
          <Link
            className="nav1__link text-decoration-none ms-2 me-2"
            to="/envios-domicilio"
          >
            <FaTruckMoving className="me-2 " />
            Envíos a domicilio
          </Link>
        </Nav>
      </Container>
      {/* ************************************************************************* */}
      <Container
        fluid
        className="container__nav2 d-flex justify-content-between align-items-center p-2 "
      >
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
            <h1>Nombre de la Tienda</h1>
          </Link>
        </Nav>
        <Nav className="">
          <Form className="">
            <Form.Control
              type="search"
              placeholder="Buscar producto"
              className=""
            />
          </Form>
        </Nav>
        <Nav className=" d-flex align-items-center">
          <Link
            className="miCuenta__link text-decoration-none ms-2 me-2"
            to="/miCuenta"
          >
            <BiSolidUser /> Mi cuenta
          </Link>
          <Link
            className="miCuenta__link text-decoration-none ms-2 me-2"
            to="/favoritos"
          >
            <AiFillHeart />
          </Link>
          <Link
            className="miCuenta__link text-decoration-none ms-2 me-2"
            to="/miCarrito"
          >
            <BsFillCartFill />
          </Link>
        </Nav>
      </Container>
      {/* ************************************************************************* */}
      <Container
        fluid
        className="container__nav3 d-flex justify-content-between align-items-center p-2"
      >
        <Nav className="">
          <NavDropdown
            className="nav3__link m-0 text-decoration-none"
            title="Categoría "
          >
            <NavDropdown.Item />
            Televisores
            <NavDropdown.Item />
            Celulares
            <NavDropdown.Item />
            Computadoras
            <NavDropdown.Item />
            Tablets
            <NavDropdown.Item />
            Consolas y Videojuegos
            <NavDropdown.Divider />
            <NavDropdown.Item />
            Otras Categorías
          </NavDropdown>
          <Link
            className="nav3__link text-decoration-none ms-2 me-2"
            to="/televisores"
          >
            Televisores
          </Link>
          <Link
            className="nav3__link text-decoration-none ms-2 me-2"
            to="/celulares"
          >
            Celulares
          </Link>
          <Link
            className="nav3__link text-decoration-none ms-2 me-2"
            to="/computadoras"
          >
            Computadoras
          </Link>
          <Link
            className="nav3__link text-decoration-none ms-2 me-2"
            to="/tablets"
          >
            Tablets
          </Link>
          {/* <Link className="nav3__link" to="/videojuegos">
            Consolas y Videojuegos
          </Link> */}
        </Nav>
        <Nav className="">
          <Link
            className="nav3__link text-decoration-none ms-2 me-2"
            to="/exclusivo-online"
          >
            Exclusivos online
          </Link>
          <Link
            className="nav3__link text-decoration-none ms-2 me-2"
            to="/ofertas"
          >
            Ofertas
          </Link>
        </Nav>
      </Container>
    </header>
  );
};
