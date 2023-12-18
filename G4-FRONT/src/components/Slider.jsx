import { Link } from "react-router-dom";

import slide4 from "../assets/slider/slider4.jpg";
import slide5 from "../assets/slider/slider5.jpg";
import slide6 from "../assets/slider/slider6.jpg";

import "./Slider.css";

export const Slider = () => {
    return (
        <div className="container-fluid">
            <div className="carousel slide ">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <Link to="">
                            <img className="imagen__carousel" src={slide4} alt="" />
                        </Link>
                    </div>
                    <div className="carousel-item">
                        <Link to="">
                            <img className="imagen__carousel" src={slide5} alt="" />
                        </Link>
                    </div>
                    <div className="carousel-item">
                        <Link to="">
                            <img className="imagen__carousel" src={slide6} alt="" />
                        </Link>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};