import React from "react";
import classes from "./Support.module.css";

const SupportContent = () => {
  const Content =
    "Through sponsorship, you help a student by connecting them to resources that will assist them in the training where the will recieve laptops, money to pay the interns or to take one of our interns to your organisation. Outside of that, you can co-financean internship. we will use your product as part of the internship then (its good to have you product in front of 4000 learning developers), and probably be the first tool they ever use.";

  return (
    <div className={classes.mainContent}>
      <h3>
        Answer the call for HNG this <br />
        year to assist a
        <span className={classes.mainColored}>student in need.</span>
      </h3>
      <p>{Content}</p>
    </div>
  );
};

export default SupportContent;
