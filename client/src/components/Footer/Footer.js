import React from "react";
import classes from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import icon from "../../images/juggleIcon.png";
import {
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import TransitionDiv from "../UI/TransitionDiv";
const Footer = () => {
  return (
    <TransitionDiv>
      <div className={classes.container}>
        <div className={classes.footer}>
          <img src={icon} alt="juggle icon"></img>
          <h3>Juggle</h3>
          <p>
            services are provided by <span>Juggle Inc.</span>
          </p>
          <p className={classes.icongrp}>
            <FontAwesomeIcon
              icon={faInstagram}
              className={classes.icon}
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              icon={faLinkedin}
              className={classes.icon}
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              icon={faTwitter}
              className={classes.icon}
            ></FontAwesomeIcon>
          </p>
        </div>
        <div className={classes.copywrite}>
          <p>Copyright © 2022 Juggle,Inc. All rights reserved.</p>
        </div>
      </div>
    </TransitionDiv>
  );
};

export default Footer;
