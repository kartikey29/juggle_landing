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
          We believe everyone deserves financial freedom. Where saving is as
          easy as spending. Where automation gives you more control, not less.
          Where expenses are paid and goals are met.
        </p>
        <p>
          We believe in pushing the envelope on the tools available to everyone
          to achieve financial freedom.
        </p>
      </div>
      <Card />
    </div>
  );
};

export default Body;
