import slide1 from "../assets/slider/slide1.jpg";
import slide2 from "../assets/slider/slide2.webp";
import slide3 from "../assets/slider/slide3.webp";
import Carousel from "react-bootstrap/Carousel";
import "./Slider.css";
import { Link } from "react-router-dom";

export const Slider = () => {
  return (
    <Carousel>
      <Carousel.Item className="carousel">
        <Link to="/celulares">
          <img className="imagen__carousel" src={slide1} alt="" />
        </Link>
      </Carousel.Item>
      <Carousel.Item className="carousel">
        <Link to="/televisores">
          <img className="imagen__carousel" src={slide3} alt="" />
        </Link>
      </Carousel.Item>
      <Carousel.Item className="carousel">
        <Link to="/computadoras">
          <img className="imagen__carousel" src={slide2} alt="" />
        </Link>
      </Carousel.Item>
    </Carousel>
  );
};
