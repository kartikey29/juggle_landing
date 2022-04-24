import React from "react";
import WaitList from "../WaitlistForm/WaitList";
import classes from "./FormHolder.module.css";

const FormHolder = () => {
  return (
    <div className={classes.formDiv}>
      <WaitList />
    </div>
  );
};

export default FormHolder;
