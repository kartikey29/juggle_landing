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
        <p>
          You don’t have to go from store to store to know the best Deals &
          Offers.
        </p>
        <p>You don’t have to stand in Long Queues for billing.</p>
      </div>
      <Card />
    </div>
  );
};

export default Body;
