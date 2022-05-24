import classes from "./Navbar.module.css";
import { useState } from "react";
import Modal from "../Modal";

const Navbar = (props) => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Modal
        changeSubmit={props.changeSubmit}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <div className={classes.Navbar}>
        <div className={classes.Navholder}>
          <h2>Juggle</h2>
          <button disabled={props.submitted} onClick={() => setModalShow(true)}>
            {props.submitted ? "Thank You! 😊" : "Register Now"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
