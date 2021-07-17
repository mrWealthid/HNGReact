import Image from "./Image";
import classes from "./Article.module.css";
import Partners1 from "../Images/Rectangle 18.png";
import Partners2 from "../Images/Rectangle 19.png";
import Partners3 from "../Images/Rectangle 20.png";
import Partners4 from "../Images/Rectangle 21.png";
import Partners5 from "../Images/Rectangle 22.png";
import Partners6 from "../Images/Rectangle 23.png";
import Partners7 from "../Images/Rectangle 24.png";
import Partners8 from "../Images/Rectangle 25.png";
import Partners9 from "../Images/Rectangle 26.png";

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
          <Image name={classes.partnersImg} file={Partners1} />
        </div>
        <div>
          <Image name={classes.partnersImg} file={Partners2} />
        </div>
        <div>
          <Image name={classes.partnersImg} file={Partners3} />
        </div>
        <div>
          <Image name={classes.partnersImg} file={Partners4} />
        </div>
        <div>
          <Image name={classes.partnersImg} file={Partners5} />
        </div>
        <div>
          <Image name={classes.partnersImg} file={Partners6} />
        </div>
        <div>
          <Image name={classes.partnersImg} file={Partners7} />
        </div>
        <div>
          <Image name={classes.partnersImg} file={Partners8} />
        </div>
        <div>
          <Image name={classes.partnersImg} file={Partners9} />
        </div>
      </div>
    </div>
  );
};

export default jumbotron;
