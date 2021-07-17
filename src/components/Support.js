import React from "react";
import SupportContent from "./SupportContent";
import Image from "./Image";
import classes from "./Support.module.css";
const Support = () => {
  return (
    <div className={classes.Support}>
      <main className={classes.main}>
        <div className={classes.mainGrid}>
          <SupportContent />
          <div className={classes.card1}>
            <Image
              name={classes.firstCard}
              file={"../assets/Rectangle 28.png"}
            />
          </div>

          <div className={classes.card2}>
            <Image
              name={classes.secondCard}
              file={"../assets/Rectangle 30.png"}
            />
          </div>

          <div classes={classes.card3}>
            <Image
              name={classes.thirdCard}
              file={"../assets/Rectangle 29.png"}
            />
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
          <Image
            name={classes.articleWrapperImg}
            file={"../assets/Frame 16.png"}
          />
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
  );
};

export default Support;
