import React from "react";
import HandImage from "../../images/mock-main-hand.png";
import Card from "../Card";
import classes from "./Body.module.css";

const Body = () => {
  return (
    <div className={classes.Body}>
      <img className={classes.hand} src={HandImage} alt="handImage" />
      <div className={classes.Bodytext}>
        <h2>Push the envelope</h2>
        <p>
          We believe everyone deserves financial freedom. Where saving is as
          easy as spending. Where automation gives you more control, not less.
          Where expenses are paid and goals are met.
        </p>
        <p>
          We believe in pushing the envelope on the tools available to everyone
          to achieve financial freedom.
        </p>
        <button>Join waitlist</button>
      </div>
      <Card />
    </div>
  );
};

export default Body;
