import React from "react";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.header}>
      <span className={classes.headingWrapper}>
        <h1 className={classes.mainHeading}>Juggle</h1>
        <h1 className={classes.subHeading}>
          Reinventing Your Shopping Experience
        </h1>
      </span>
    </div>
  );
};

export default Header;
