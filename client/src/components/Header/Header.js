import React from "react";
import classes from "./Header.module.css";
import FormHolder from "../FormHolder/FormHolder";

const Header = (props) => {
  return (
    <>
      <div className={classes.header}>
        <span className={classes.headingWrapper}>
          <h1 className={classes.mainHeading}>Juggle</h1>
          <h1 className={classes.subHeading}>
            Reinventing Your Shopping Experience
          </h1>
        </span>
      </div>
      <div className={classes.callToAction}>
        <p className={classes.headerPara}>
          Register now to get 20% Discount on your First Purchase!
        </p>
        <FormHolder
          submitted={props.submitted}
          changeSubmit={props.changeSubmit}
        />
      </div>
    </>
  );
};

export default Header;
