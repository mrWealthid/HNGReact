import JoinContent from "./JoinContent";
import Images from "./Image";
import classes from "./Join.module.css";

const JoinUs = () => {
  return (
    <main className={classes.main}>
      <JoinContent />
      <div className={classes.mainImage}>
        <Images name={classes.mainImg} file="./assets/Frame 13.png" />
      </div>
    </main>
  );
};

export default JoinUs;
