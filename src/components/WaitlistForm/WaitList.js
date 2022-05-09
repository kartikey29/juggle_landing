import React from "react";
import classes from "./WaitList.module.css";

const WaitList = () => {
  return (
    <>
      <input class={classes.checkbox} type="checkbox" id="checkbox" />
      <div class={classes.formContainer}>
        <form class={classes.form} action="">
          <input
            class={classes.forminput}
            placeholder="E-mail"
            type="email"
            pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
            required
          />
          <label class={classes.formbuttonLabel} for="checkbox">
            <button class={classes.formbutton} type="button">
              Join
            </button>
          </label>
          <label
            class={classes.formtoggle}
            for="checkbox"
            data-title="Join Waitlist"
          ></label>
        </form>
      </div>
    </>
  );
};

export default WaitList;
