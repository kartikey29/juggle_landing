import Header from "./components/Header/Header";
import classes from "./App.module.css";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { useState } from "react";

function App() {
  const [submitted, setSubmitted] = useState(false);

  const changeSubmit = () => {
    setSubmitted(true);
  };

  return (
    <>
      <div className={classes.container}>
        <Navbar submitted={submitted} changeSubmit={changeSubmit}></Navbar>
        <Header submitted={submitted} changeSubmit={changeSubmit} />
        <Body />
        <Footer />
      </div>
    </>
  );
}

export default App;
