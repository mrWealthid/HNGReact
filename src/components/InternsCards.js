import React from "react";
import classes from "./Intern.module.css";
import InternCard from "./InternCard";

const InternsCards = () => {
  return (
    <div className={classes.myCard}>
      <InternCard
        name={"Iheonye Chukwuemeka"}
        filepath={"./assets/Traindemy.png"}
        profession={"UX Designer - Traindemy"}
        stack={"HTML/CSS/FIGMA/PS/XD/Ai"}
      />

      <InternCard
        name={"Motunrayo Da-costa"}
        filepath={"./assets/Motun.jpg"}
        profession={"Interface Developer - Softcom"}
        stack={"HTML/CSS/JS"}
      />

      <InternCard
        name={"Namnso Ukpanah"}
        filepath={"./assets/avatar_wy9ax8.jpg"}
        profession={"Product Designer - Flutterwave"}
        stack={"UI/UX/Figma/Adobe"}
      />
    </div>
  );
};

export default InternsCards;
