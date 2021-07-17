import React from "react";
import Image from "./Image";
import classes from "../components/Article.module.css";
import Card from "../Images/Frame 1.png";
import Card1 from "../Images/Frame 2.png";
import Card2 from "../Images/Frame 4.png";
import Card3 from "../Images/Frame 5.png";

const Cards = () => {
  return (
    <div className={classes.cards}>
      <div>
        <Image name={classes.cardsImg} file={Card} />
      </div>

      <div>
        <Image name={classes.cardsImg} file={Card1} />
      </div>
      <div>
        <Image name={classes.cardsImg} file={Card2} />
      </div>

      <div>
        <Image name={classes.cardsImg} file={Card3} />
      </div>
    </div>
  );
};

export default Cards;
