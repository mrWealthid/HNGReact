import JoinContent from "./JoinContent";
import Images from "./Image";
import classes from "./Join.module.css";
import ImageJoin from "../Images/Frame 13.png";

const JoinUs = () => {
  return (
    <main className={classes.main}>
      <JoinContent />
      <div className={classes.mainImage}>
        <Images name={classes.mainImg} file={ImageJoin} />
      </div>
    </main>
  );
};

export default JoinUs;
