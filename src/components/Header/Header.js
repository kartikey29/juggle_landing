import React from "react";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.header}>
      <span className={classes.headingWrapper}>
        <h1 className={classes.mainHeading}>App Name</h1>
        <h1 className={classes.subHeading}>Sub Heading</h1>
      </span>
    </div>
  );
};

export default Header;
