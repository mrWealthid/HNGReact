import React from "react";
import Button from "./Button";
import classes from "./App.module.css";

const MainContent = () => {
  return (
    <>
      <div className={classes.mainText}>
        <h5>The HNG Internship</h5>

        <h1>Perfection is Always Under Construction</h1>

        <small>
          The HNG Internship is an ambitious attempt to change the way education
          is done in Africa. It’s the bridge between learning to code, and
          becoming the best in the world.
        </small>

        <div>
          <a href="./join.html">
            <Button btnName={classes.mainBtn} btnContent="Join us" />
          </a>
        </div>
      </div>
    </>
  );
};

export default MainContent;
