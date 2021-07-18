import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const PageDontExist = () => {
  return (
    <div className="errorPage">
      <h1>Page Doesn't Exist</h1>
      <div className="btnDiv">
        {" "}
        <Link to="/">
          <Button btnName={"mybtn"} btnContent={"Homepage"} />
        </Link>
      </div>
    </div>
  );
};

export default PageDontExist;
