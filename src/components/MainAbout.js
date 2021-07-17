import React from "react";
import Image from "./Image";
import classes from "./Article.module.css";

const MainAbout = () => {
  return (
    <article className={classes.article}>
      <div className={classes.articleContent}>
        <h1>We find the most talented African developers</h1>
        <small>
          The internship is a 3-month remote internship designed to find and
          develop the most talented software developers. At HNG internship,
          everyone is welcome to participate (there is no entrance exam). Anyone
          can sign up using their laptops. Each week, we give tasks. Those who
          complete them advance forward. We pay the interns weekly. The intern
          coders are introduced to complex programming frameworks, and get to
          work on real world software. The finalists are connected to the best
          companies in the tech ecosystem and get full time jobs and contracts
          immediately.
        </small>

        <h6>See what we offer in the training</h6>
      </div>

      <div class={classes.articleImg}>
        <Image
          name={classes.articleImage}
          file={"./assets/Telework-rafiki 1.png"}
        />
      </div>
    </article>
  );
};

export default MainAbout;
