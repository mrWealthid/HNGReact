import React from "react";
import HeaderLinks from "./HeaderLinks";
import HeaderImage from "./HeaderImage";
import classes from "./App.module.css";
// import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={classes.header}>
      <HeaderImage />

      <div className={classes.headerLinks}>
        <HeaderLinks link="/Article" linkText={"About"} />
        <HeaderLinks link="/Interns" linkText={"Interns"} />
        <HeaderLinks link="/Support" linkText={"Support"} />
        <HeaderLinks
          name={classes.activeLink}
          link="/Join"
          linkText={"Join Us"}
        />
      </div>
    </header>
  );
};

export default Header;
