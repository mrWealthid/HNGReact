import React from "react";
import classes from "./App.module.css";
import Image from "./Image";

const MainImage = () => {
  return (
    <div className={classes.mainImage}>
      <Image name={classes.mainImg} file={"../assets/Group 1.png"} />
    </div>
  );
};

export default MainImage;
