import React from "react";
import { Link } from "react-router-dom";
import classes from "./App.module.css";

const HeaderLinks = ({ name, linkText, link }) => {
  return (
    <>
      <Link className={name} to={link}>
        {linkText}
      </Link>
    </>
  );
};

HeaderLinks.defaultProps = {
  link: "/",
  linkText: "test",
  name: classes.link,
};

export default HeaderLinks;
