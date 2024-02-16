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
import Button from "../../Common/Button";

export default function TabsComponent({ coins, isWatchlistPage, setSearch }) {
  const [tabvalue, setTabValue] = useState("grid");

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
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
      <TabContext value={tabvalue}>
        <div className="tab-flex">
          <TabList onChange={handleChange} variant="fullWidth">
            <Tab label="Grid" value="grid" sx={style} />
            <Tab label="List" value="list" sx={style} />
          </TabList>
        </div>
        <TabPanel value="grid">
          <div className="grid-flex">
            {coins.length === 0 ? (
              <div>
                <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
                  No Items Found
                </h1>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Button
                    text={"Clear Search"}
                    onClick={(e) => {
                      setSearch("");
                    }}
                  />
                </div>
              </div>
            ) : (
              coins?.map((coin, i) => (
                <Grid coin={coin} key={i} isWatchlistPage={isWatchlistPage} />
              ))
            )}
          </div>
        </TabPanel>
        <TabPanel className="tablePanel" value="list">
          <table className="list-table">
            {coins.length === 0 ? (
              <div>
                <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
                  No Items Found
                </h1>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Button
                    text={"Clear Search"}
                    onClick={(e) => {
                      setSearch("");
                    }}
                  />
                </div>
              </div>
            ) : (
              coins?.map((coin, i) => (
                <List coin={coin} key={i} isWatchlistPage={isWatchlistPage} />
              ))
            )}
          </table>
        </TabPanel>
      </TabContext>
    </ThemeProvider>
  );
}
