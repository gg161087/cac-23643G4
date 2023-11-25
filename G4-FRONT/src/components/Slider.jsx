import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

import slide4 from "../assets/slider/slider4.jpg";
import slide5 from "../assets/slider/slider5.jpg";
import slide6 from "../assets/slider/slider6.jpg";

import "./Slider.css";

export const Slider = () => {
  return (
    <div className="mt-4 ">
      <Carousel>
        <Carousel.Item className="carousel">
          <Link to="">
            <img className="imagen__carousel" src={slide4} alt="" />
          </Link>
        </Carousel.Item>
        <Carousel.Item className="carousel">
          <Link to="">
            <img className="imagen__carousel" src={slide5} alt="" />
          </Link>
        </Carousel.Item>
        <Carousel.Item className="carousel">
          <Link to="">
            <img className="imagen__carousel" src={slide6} alt="" />
          </Link>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
