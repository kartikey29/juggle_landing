import Header from "./components/Header/Header";
import classes from "./App.module.css";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <div className={classes.container}>
        <Navbar></Navbar>
        <Header />
        <Body />
        <Footer />
      </div>
    </>
  );
}

export default App;
