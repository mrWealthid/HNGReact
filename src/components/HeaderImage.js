import React from "react";
import Image from "./Image";
import { Link } from "react-router-dom";
import classes from "./App.module.css";

const HeaderImage = () => {
  return (
    <div className={classes.headerImage}>
      <Link to="/">
        <Image name={classes.headerImg} file={"./assets/Group 9 (1).png"} />
      </Link>
    </div>
  );
};

export default HeaderImage;
