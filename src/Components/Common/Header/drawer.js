import { React, useState } from "react";
import { Link } from "react-router-dom";
import DehazeIcon from "@mui/icons-material/Dehaze";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import CustomizedSwitches from "../ThemeButton";
import { ThemeProvider } from "../../LandingPage/ThemeContext";

function TemporaryDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <IconButton onClick={() => setOpen(true)}>
        <DehazeIcon className="link" />
      </IconButton>
      <Drawer anchor={"right"} open={open} onClose={() => setOpen(false)}>
        <div className="drawer-div">
          <ThemeProvider>
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
              <p className="link">Dashboard</p>
            </Link>
            <CustomizedSwitches />
          </ThemeProvider>
        </div>
      </Drawer>
    </div>
  );
}

export default TemporaryDrawer;
