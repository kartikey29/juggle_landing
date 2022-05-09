import React from "react";
import classes from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <>
      <div className={classes.footer}>
        <h3>Juggle</h3>
        <p>
          services are provided by <span>Envelope Money, Inc.</span>
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
        <p>Juggle © 2022</p>
      </div>
    </>
  );
};

export default Footer;
