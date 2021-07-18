import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./App.module.css";

const HeaderLinks = ({ name, linkText, link, activeStyle }) => {
  // const activeStyle = { color: " rgba(0, 174, 255, 1)" }; using navlinks to attach styles to active links.
  return (
    <>
      <NavLink activeStyle={activeStyle} className={name} to={link}>
        {linkText}
      </NavLink>
    </>
  );
};

HeaderLinks.defaultProps = {
  link: "/",
  linkText: "test",
  name: classes.link,
  activeStyle: { color: " rgba(0, 174, 255, 1)" },
};

export default HeaderLinks;
