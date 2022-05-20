import React from "react";
// import HandImage from "../../images/mock-main-hand.png";
import Card from "../Card";
import classes from "./Body.module.css";
import CarouselCustom from "./Carousel";

const Body = () => {
  return (
    <div className={classes.Body}>
      <CarouselCustom />
      <div className={classes.Bodytext}>
        <h2>Save time & money</h2>
        <p>
          We believe in making your shopping experience Smart & Frictionless.
        </p>
        <p>Where knowing offers is as simple as ever.</p>
        <p>
          Where more time can be saved by avoiding long queues at the billing
          counter.
        </p>
        <br></br>
        <p>We believe that you don't need to JUGGLE from store to store.</p>
      </div>
      <Card />
    </div>
  );
};

export default Body;
