import React from "react";
import { Carousel } from "react-bootstrap";
import logo from "../assets/logo.jpg";
import laiton from "../assets/laiton.jpeg";
import zamic from "../assets/zamic.webp";

const CarouselC = () => {
  return (
    <Carousel interval={3000}>
      <Carousel.Item>
        <div className="image-container2">
          <img className="d-block " src={logo} alt="First slide" />
        </div>
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="image-container2">
          <img className="d-block " src={laiton} alt="Second slide" />
        </div>
        <Carousel.Caption>
          <h3>Laiton Jaune</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="image-container2">
          <img className="d-block " src={zamic} alt="t slide" />
        </div>
        <Carousel.Caption>
          <h3>dechets zamac</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselC;
