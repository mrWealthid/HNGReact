import React from "react";
import classes from "./App.module.css";
import Image from "./Image";
import ImageMain from "../Images/Group 1.png";

const MainImage = () => {
  return (
    <div className={classes.mainImage}>
      <Image name={classes.mainImg} file={ImageMain} />
    </div>
  );
};

export default MainImage;
