import React from "react";
import classes from "./WaitList.module.css";

const WaitList = () => {
  return (
    <div>
      <form className={classes.form}>
        <input type="text" placeholder="First Name"></input>
        <input type="text" placeholder="last Name"></input>
        <input
          className={classes.email}
          type="email"
          placeholder="Email"
        ></input>
        <button type="submit">Join Waitlist</button>
      </form>
    </div>
  );
};

export default WaitList;
