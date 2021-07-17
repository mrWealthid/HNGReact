import React from "react";
import Image from "./Image";
import classes from "./Intern.module.css";


const InternCard = ({
  name,
  internImg,
  content,
  filepath,
  stack,
  profession,
}) => {
  return (
    <div className={classes.cards}>
      <Image name={classes.internImg} file={filepath} />
      <h4>{name}</h4>
      <p>{content}</p>
      <small>{stack}</small>
      <p>{profession}</p>
    </div>
  );
};

InternCard.defaultProps = {
  name: "",
  stack: "",
  profession: "",
  content:
    "The HNG internship was a great boost to my career. It trained me ready for real world problems. I was also able to build a valuable network. I recommend the training to anyone",
  filepath: "./assets/Traindemy.png",
};

export default InternCard;
