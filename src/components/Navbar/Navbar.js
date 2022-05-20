import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={classes.Navbar}>
      <div className={classes.Navholder}>
        <h2>Juggle</h2>
        <button>Join Waitlist</button>
      </div>
    </div>
  );
};

export default Navbar;
