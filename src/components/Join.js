import "../index.css";
import classes from "./Join.module.css";
import JoinUs from "./JoinUs";
import Button from "./Button";
import Header from "./Header";
import Footer from "./Footer";

const Join = () => {
  const articleHeader = "Training Tracks";
  return (
    <>
      <Header />
      <div className={classes.join}>
        <JoinUs />
        <article className={classes.article}>
          <h1>{articleHeader}</h1>
          <div className={classes.articleBtn}>
            <Button btnName={classes.design} btnContent={"UI/UX Design"} />
            <Button btnName={classes.frontend} btnContent={"Frontend Dev"} />
            <Button btnName={classes.backend} btnContent={"Backend Dev"} />
            <Button btnName={classes.machine} btnContent={"Machine Learning"} />
          </div>
          <div className={classes.articleLink}>
            <a className={classes.articleLink} href="../">
              Get started now
            </a>
          </div>
        </article>
      </div>
      <Footer />
    </>
  );
};

export default Join;
