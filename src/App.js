import FormHolder from "./components/FormHolder/FormHolder";
import Header from "./components/Header/Header";
import classes from "./App.module.css";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div className={classes.container}>
        <Header />
        <FormHolder />
        <Body />
        <Footer />
      </div>
    </>
  );
}

export default App;
