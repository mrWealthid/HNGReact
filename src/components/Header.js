import React from "react";
import HeaderLinks from "./HeaderLinks";
import HeaderImage from "./HeaderImage";
import classes from "./App.module.css";

const Header = () => {
  const activeStyles = {
    color: " rgba(0, 174, 255, 1)",
    backgroundColor: "white",
    border: "1px solid  rgba(0, 174, 255, 1)",
  };
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
          activeStyle={activeStyles}
          linkText={"Join Us"}
        />
      </div>
    </header>
  );
};

export default Header;
