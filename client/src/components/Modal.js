import { useState } from "react";
import { Modal } from "react-bootstrap";
import api from "../api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "./Modal.css";

const MyVerticallyCenteredModal = (props) => {
  const [email, setEmail] = useState("");

  const changeHandler = (e) => {
    setEmail(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await api.post("/waitlist", { email });
    props.changeSubmit();
    props.onHide();
    console.log(response);
  };

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal"
    >
      <form onSubmit={submitHandler}>
        <Modal.Body className="body">
          <FontAwesomeIcon
            icon={faXmark}
            className="xmark"
            onClick={props.onHide}
          />
          <h2>Get Notified</h2>
          <p>
            Sign up to be notified as soon as Juggle is available in the App
            Store
          </p>
          <input
            type="email"
            placeholder="Enter your email"
            onChange={changeHandler}
            value={email}
          ></input>
          <button type="submit">Join</button>
        </Modal.Body>
      </form>
    </Modal>
  );
};

export default MyVerticallyCenteredModal;
