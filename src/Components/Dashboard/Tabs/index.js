import React, { useState } from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import Grid from "../Grid";
import "./style.css";
import List from "../List";

export default function TabsComponent({ coins, isWatchlistPage }) {
  const [value, setValue] = useState("grid");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const style = {
    color: "var(--white)",
    width: "50vw",
    fontSize: "1.2rem",
    fontWeight: 500,
    fontFamily: "Inter",
    textTransform: "capitalize",
  };
  const theme = createTheme({
    palette: {
      primary: {
        main: "#3a80e9",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <TabContext value={value}>
        <div className="tab-flex">
          <TabList onChange={handleChange} variant="fullWidth">
            <Tab label="Grid" value="grid" sx={style} />
            <Tab label="List" value="list" sx={style} />
          </TabList>
        </div>
        <TabPanel value="grid">
          <div className="grid-flex">
            {coins.map((coin, ind) => {
              return (
                <Grid coin={coin} key={ind} isWatchlistPage={isWatchlistPage} />
              );
            })}
          </div>
        </TabPanel>
        <TabPanel className="tablePanel" value="list">
          <table className="list-table">
            {coins.map((coin, ind) => {
              return (
                <List coin={coin} key={ind} isWatchlistPage={isWatchlistPage} />
              );
            })}
          </table>
        </TabPanel>
      </TabContext>
    </ThemeProvider>
  );
}
