import React from "react";
import Button from "../Button";
import { Link } from "react-router-dom";
import "./style.css";

const ErrorComponent = () => {
  return (
    <div>
      <div className="error-div">
        <div className="content-div">
          <h1 className="error-heading"> HTTP 429 ERROR</h1>
          <h3 className="error-heading-2">Too Many Response</h3>
          <p className="error-para">Thank You For Visiting😊.</p>
          <p className="error-para-2">
            Soory For Inconvenience😞. Please Wait For 7 Mintus!!! Go To
            HomePage.👇👇
          </p>
          <Link to="/">
            <Button text={"Home"} onClick={() => console.log("btn Clicked")} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorComponent;
