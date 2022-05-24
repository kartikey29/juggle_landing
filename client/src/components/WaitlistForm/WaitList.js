import React from "react";
import { useState } from "react";
import classes from "./WaitList.module.css";
import api from "../../api";

const WaitList = (props) => {
  const [email, setEmail] = useState("");

  const changeHandler = (e) => {
    setEmail(e.target.value);
  };

  const clickHandler = async (e) => {
    if (email !== "") {
      const response = await api.post("/waitlist", { email });
      props.changeSubmit();
      console.log(response);
    }
  };

  return (
    <>
      <input
        className={classes.checkbox}
        type="checkbox"
        onClick={clickHandler}
        id="checkbox"
        disabled={props.submitted}
      />
      <div className={classes.formContainer}>
        <form className={classes.form}>
          <input
            className={classes.forminput}
            placeholder="Enter your email"
            type="email"
            onChange={changeHandler}
            value={email}
            pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
            required
          />
          <label className={classes.formbuttonLabel} for="checkbox">
            <button className={classes.formbutton} type="button">
              Join
            </button>
          </label>
          <label
            className={classes.formtoggle}
            for="checkbox"
            data-title={props.submitted ? "Thank You! 😊" : "Register Now"}
          ></label>
        </form>
      </div>
    </>
  );
};

export default WaitList;
