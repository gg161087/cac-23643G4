import { Link } from "react-router-dom"
import Carousel from "react-bootstrap/Carousel"

import slide1 from "../assets/slider/slide1.jpg"
import slide2 from "../assets/slider/slide2.webp"
import slide3 from "../assets/slider/slide3.webp"

import "./Slider.css";

export const Slider = () => {
    return (
        <div className=" mt-4">
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
        </div>
    );
};
