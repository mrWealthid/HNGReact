import React from "react";

const Button = ({ btnName, btnContent }) => {
  return (
    <>
      <button className={btnName}>{btnContent}</button>
    </>
  );
};

Button.defaultProps = {
  btnName: "btn",
  btnContent: "Select",
};

export default Button;
