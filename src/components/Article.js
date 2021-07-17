import React from "react";
import MainAbout from "./MainAbout";
import Cards from "./Cards";
import Jumbotron from "./jumbotron";
import Image from "./Image";
import classes from "./Article.module.css";

const Article = () => {
  return (
    <div className={classes.articleBody}>
      <Image name={classes.mainImg} file={"./assets/About.png"} />
      <MainAbout />
      <Cards />
      <Jumbotron />
    </div>
  );
};

export default Article;
