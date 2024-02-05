import React from "react";
import TemporaryDrawer from "./drawer";
import Button from "../Button";
import { Link } from "react-router-dom";
import CustomizedSwitches from "../ThemeButton";
import { ThemeProvider } from "../../LandingPage/ThemeContext";
import "./style.css";

function Header() {
  return (
    <ThemeProvider>
      <div className="navbar">
        <h1 className="logo">
          Crypto Tracker<span style={{ color: "var(--blue)" }}>.</span>
        </h1>
        <div className="links">
          <CustomizedSwitches />
          <Link to="/">
            <p className="link">Home</p>
          </Link>
          <Link to="/compare">
            <p className="link">Compare</p>
          </Link>
          <Link to="/watchlist">
            <p className="link">Watchlist</p>
          </Link>
          <Link to="/dashboard">
            <Button
              text={"Dashboard"}
              onClick={() => console.log("btn Clicked")}
            />
          </Link>
        </div>
        <div className="mobile-drawer">
          <TemporaryDrawer />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default Header;
