import React from "react";
import { Carousel } from "react-bootstrap";
import classes from "./Carousel.module.css";
import Phone1 from "../../images/_-Dark-Purple-Juggle-V2_3_.svg";
import Phone2 from "../../images/_-Dark-Purple-Juggle-V2_1_1_.svg";
import Phone3 from "../../images/_-Dark-Purple-Juggle-V2_2_1_.svg";

const CarouselCustom = () => {
  return (
    <div className={classes.Bodytext}>
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
    </div>
  );
};

export default CarouselCustom;
