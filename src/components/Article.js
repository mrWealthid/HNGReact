import React from "react";
import MainAbout from "./MainAbout";
import Cards from "./Cards";
import Jumbotron from "./jumbotron";
import Image from "./Image";
import classes from "./Article.module.css";
import ImageArt from "../Images/About.png";

const Article = () => {
  return (
    <div className={classes.articleBody}>
      <Image name={classes.mainImg} file={ImageArt} />
      <MainAbout />
      <Cards />
      <Jumbotron />
    </div>
  );
};

export default Article;
