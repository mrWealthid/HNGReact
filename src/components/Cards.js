import React from "react";
import Image from "./Image";
import classes from "../components/Article.module.css";

const Cards = () => {
  return (
    <div className={classes.cards}>
      <div>
        <Image name={classes.cardsImg} file={"./assets/Frame 1.png"} />
      </div>

      <div>
        <Image name={classes.cardsImg} file={"./assets/Frame 2.png"} />
      </div>
      <div>
        <Image name={classes.cardsImg} file={"./assets/Frame 4.png"} />
      </div>

      <div>
        <Image name={classes.cardsImg} file={"./assets/Frame 5.png"} />
      </div>
    </div>
  );
};

export default Cards;
