import React, { Component } from "react";
import img1 from "./images/slider1.jpg";
import img2 from "./images/slider2.jpg";
import img3 from "./images/slider3.jpg";
class Slider extends Component {
  render() {
    return (
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-ride="carousel"
        style={{ marginTop: "50px" }}
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-interval={2000}>
            <img src={img1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-interval={2000}>
            <img src={img2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-interval={2000}>
            <img src={img3} className="d-block w-100" alt="..." />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleInterval"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleInterval"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}

export default Slider;
