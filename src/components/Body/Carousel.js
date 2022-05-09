import React from "react";
import { Carousel } from "react-bootstrap";
import classes from "./Carousel.module.css";
import Phone1 from "../../images/___-Dark-Purple-Juggle-V2.png";
import Phone2 from "../../images/___-Dark-Purple-Juggle-V2__1_.png";
import Phone3 from "../../images/___-Dark-Purple-Juggle-V2__2_.png";

const CarouselCustom = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img className={classes.image} src={Phone1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className={classes.image} src={Phone2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className={classes.image} src={Phone3} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselCustom;
