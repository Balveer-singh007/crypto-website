import { React, useEffect, useState } from "react";
import "./style.css";
import { get100Coins } from "../../../Functions/get100Coins";
import { MenuItem, Select } from "@mui/material";

const SelectCoins = ({ crypto1, crypto2, handleCoinChange }) => {
  const [allCoins, setAllCoins] = useState([]);
  const styles = {
    height: "2.5rem",
    color: "var(--white)",
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "var(--white)",
    },
    "& .MuiSvgIcon-root": {
      color: "var(--white)",
    },
    "&:hover": {
      "&& fieldset": {
        borderColor: "#3a80e9",
      },
    },
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const myCoins = await get100Coins();
    setAllCoins(myCoins);
  };

  return (
    <div className="coin-flex">
      <p className="reduce" style={{ color: "var(--white)" }}>
        Crypto 1
      </p>
      <Select
        sx={styles}
        value={crypto1}
        label="Crypto 1"
        onChange={(e) => handleCoinChange(e, false)}
      >
        {allCoins
          .filter((item) => item.id != crypto2)
          .map((coin, ind) => (
            <MenuItem key={ind} value={coin.id}>
              {coin.name}
            </MenuItem>
          ))}
      </Select>
      <p className="reduce" style={{ color: "var(--white)" }}>
        Crypto 2
      </p>
      <Select
        sx={styles}
        value={crypto2}
        label="Crypto 2"
        onChange={(e) => handleCoinChange(e, true)}
      >
        {allCoins
          .filter((item) => item.id != crypto1)
          .map((coin, i) => (
            <MenuItem key={i} value={coin.id}>
              {coin.name}
            </MenuItem>
          ))}
      </Select>
    </div>
  );
};

export default SelectCoins;
