import Button from "./Button";
import classes from "./Join.module.css";

const JoinContent = () => {
  return (
    <div className={classes.mainText}>
      <h5>Become an Intern</h5>

      <h1>Refine your tech skills and prepare for the real world</h1>

      <small>
        Boost your career with us. Our next cohort begins in August 2021. Click
        below to register
      </small>

      <div>
        <a href="./form-field.html">
          <Button btnName={classes.mainBtn} btnContent="Join HNG" />
        </a>
      </div>
    </div>
  );
};

export default JoinContent;
