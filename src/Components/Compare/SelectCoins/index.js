import { React, useEffect, useState } from "react";
import "./style.css";
import { get100Coins } from "../../../Functions/get100Coins";
import { MenuItem, Select } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ErrorComponent from "../../Common/Error";

const SelectCoins = ({ crypto1, crypto2, handleCoinChange }) => {
  const [allCoins, setAllCoins] = useState([]);
  const [hasError, setHasError] = useState(false);

  const navigate = useNavigate();

  console.log(handleCoinChange);

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
    try {
      const myCoins = await get100Coins();
      console.log(myCoins);
      setAllCoins(myCoins);
    } catch (error) {
      console.error("Error fetching coin data:", error);
      setHasError(true);
      navigate("/error");
    }
  };

  return (
    <div className="coin-flex">
      {hasError ? (
        <ErrorComponent />
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};

export default SelectCoins;
