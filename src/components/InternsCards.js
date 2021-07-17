import React from "react";
import classes from "./Intern.module.css";
import InternCard from "./InternCard";
import Intern1 from "../Images/Traindemy.png";
import Intern2 from "../Images/Motun.jpg";
import Intern3 from "../Images/avatar_wy9ax8.jpg";

const InternsCards = () => {
  return (
    <div className={classes.myCard}>
      <InternCard
        name={"Iheonye Chukwuemeka"}
        filepath={Intern1}
        profession={"UX Designer - Traindemy"}
        stack={"HTML/CSS/FIGMA/PS/XD/Ai"}
      />

      <InternCard
        name={"Motunrayo Da-costa"}
        filepath={Intern2}
        profession={"Interface Developer - Softcom"}
        stack={"HTML/CSS/JS"}
      />

      <InternCard
        name={"Namnso Ukpanah"}
        filepath={Intern3}
        profession={"Product Designer - Flutterwave"}
        stack={"UI/UX/Figma/Adobe"}
      />
    </div>
  );
};

export default InternsCards;
