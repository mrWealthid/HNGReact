import React from "react";
import InternsCards from "./InternsCards";
import classes from "./Intern.module.css";

const Slide = () => {
  return (
    <div className={classes.slide}>
      <InternsCards />
      {/* <InternsCards />
      <InternsCards /> */}
    </div>
  );
};

export default Slide;
