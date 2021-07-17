import React from "react";
import Image from "./Image";
import { Link } from "react-router-dom";
import classes from "./App.module.css";
import ImageHeader from "../Images/Group 9 (1).png";

const HeaderImage = () => {
  return (
    <div className={classes.headerImage}>
      <Link to="/">
        <Image name={classes.headerImg} file={ImageHeader} />
      </Link>
    </div>
  );
};

export default HeaderImage;
