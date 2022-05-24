import React from "react";
import WaitList from "../WaitlistForm/WaitList";
import classes from "./FormHolder.module.css";

const FormHolder = (props) => {
  return (
    <div className={classes.formDiv}>
      <WaitList submitted={props.submitted} changeSubmit={props.changeSubmit} />
    </div>
  );
};

export default FormHolder;
