import React from "react";
import SupportContent from "./SupportContent";
import Image from "./Image";
import Footer from "./Footer";
import Header from "./Header";
import classes from "./Support.module.css";
import ImageSupport from "../Images/Rectangle 28.png";
import ImageSupport1 from "../Images/Rectangle 29.png";
import ImageSupport2 from "../Images/Rectangle 30.png";
import ImageSupport3 from "../Images/Frame 16.png";

const Support = () => {
  return (
    <>
      <Header />
      <div className={classes.Support}>
        <main className={classes.main}>
          <div className={classes.mainGrid}>
            <SupportContent />
            <div className={classes.card1}>
              <Image name={classes.firstCard} file={ImageSupport} />
            </div>

            <div className={classes.card2}>
              <Image name={classes.secondCard} file={ImageSupport1} />
            </div>

            <div classes={classes.card3}>
              <Image name={classes.thirdCard} file={ImageSupport2} />
            </div>
          </div>
        </main>

        <article className={classes.article}>
          <div className={classes.articleWrapper}>
            <h3>
              Give a student
              <br></br>
              hope today.
            </h3>
            <Image name={classes.articleWrapperImg} file={ImageSupport3} />
          </div>
        </article>

        <div className={classes.articles}>
          <div class={classes.articleContent}>
            <h3>
              Support a student today by <br />
              sponsoring them per monthly basis.
            </h3>

            <a href="../">Support the internship</a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Support;
