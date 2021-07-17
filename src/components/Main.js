import React from "react";

import MainContent from "./MainContent";
import classes from "./App.module.css";
import MainImage from "./MainImage";

const Main = () => {
  return (
    <main className={classes.main}>
      <MainContent />
      <MainImage />
    </main>
  );
};

// Main.defaultProps = {};
export default Main;
