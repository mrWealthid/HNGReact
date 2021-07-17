import React from "react";
import MainAbout from "./MainAbout";
import Cards from "./Cards";
import Jumbotron from "./jumbotron";
import Image from "./Image";
import classes from "./Article.module.css";
import ImageArt from "../Images/About.png";
import Header from "./Header";
import Footer from "./Footer";

const Article = () => {
  return (
    <>
      <Header />
      <div className={classes.articleBody}>
        <Image name={classes.mainImg} file={ImageArt} />
        <MainAbout />
        <Cards />
        <Jumbotron />
      </div>
      <Footer />
    </>
  );
};

export default Article;
