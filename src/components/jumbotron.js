import Image from "./Image";
import classes from "./Article.module.css";

const jumbotron = () => {
  return (
    <div className={classes.partners}>
      <h2>Our Hiring Partners</h2>

      <small>
        At HNG internship, we believe the decision you make to invest in your
        future is worth it! One of the ways <br />
        we ensure this is that our finalists are connected to the best tech
        companies for full-time jobs and contracts.
      </small>

      <div className={classes.partnersGallery}>
        <div>
          <Image
            name={classes.partnersImg}
            file={"./assets/Rectangle 18.png"}
          />
        </div>
        <div>
          <Image
            name={classes.partnersImg}
            file={"./assets/Rectangle 19.png"}
          />
        </div>
        <div>
          <Image
            name={classes.partnersImg}
            file={"./assets/Rectangle 20.png"}
          />
        </div>
        <div>
          <Image
            name={classes.partnersImg}
            file={"./assets/Rectangle 21.png"}
          />
        </div>
        <div>
          <Image
            name={classes.partnersImg}
            file={"./assets/Rectangle 22.png"}
          />
        </div>
        <div>
          <Image
            name={classes.partnersImg}
            file={"./assets/Rectangle 23.png"}
          />
        </div>
        <div>
          <Image
            name={classes.partnersImg}
            file={"./assets/Rectangle 24.png"}
          />
        </div>
        <div>
          <Image
            name={classes.partnersImg}
            file={"./assets/Rectangle 25.png"}
          />
        </div>
        <div>
          <Image
            name={classes.partnersImg}
            file={"./assets/Rectangle 26.png"}
          />
        </div>
      </div>
    </div>
  );
};

export default jumbotron;
