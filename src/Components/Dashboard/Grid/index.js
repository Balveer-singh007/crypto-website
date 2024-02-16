import { React, useState } from "react";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import { IconButton } from "@mui/material";
import { Tooltip } from "@mui/material";
import { removeFromWatchlist } from "../../../Functions/removeFromWatchlist";
import { addToWatchlist } from "../../../Functions/addToWatchlist";
import { hasBeenAdded } from "../../../Functions/hasBeenAdded";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";

import "./style.css";

function Grid({ coin, isWatchlistPage }) {
  const [added, setAdded] = useState(hasBeenAdded(coin.id));

  const handleWatchlistClick = (e) => {
    e.preventDefault();
    if (added) {
      removeFromWatchlist(coin.id);
      setAdded(false);
    } else {
      addToWatchlist(coin.id);
      setAdded(true);
    }
  };

  return (
    <a href={`/coin/${coin.id}`}>
      <div
        className={`grid-container ${
          coin.price_change_percentage_24h < 0 && "grid-container-red"
        }`}
        style={{ display: isWatchlistPage && !added && "none" }}
      >
        <div className="info-flex">
          <img src={coin.image} className="coin-logo" alt="coin_logo" />
          <Tooltip title="Coin-Info">
            <div className="name-col">
              <p className="coin-symbol">{coin.symbol + "-INR"}</p>
              <p className="coin-name">{coin.name}</p>
            </div>
          </Tooltip>
          {/* ccc */}
          <IconButton className="ico" onClick={handleWatchlistClick}>
            {added ? (
              <StarRoundedIcon
                className={`watchlist-icon ${
                  coin.price_change_percentage_24h < 0 && "watchlist-icon-red"
                } `}
                sx={{ fontSize: "2rem !important" }}
              />
            ) : (
              <StarBorderRoundedIcon
                className={`watchlist-icon ${
                  coin.price_change_percentage_24h < 0 && "watchlist-icon-red"
                } `}
                sx={{ fontSize: "2rem !important" }}
              />
            )}
          </IconButton>
          {/* cccc */}
        </div>
        <Tooltip title="Current Price Change in 24hr in Percentage">
          {coin.price_change_percentage_24h > 0 ? (
            <div className="chip-flex">
              <div className="chip-price">
                {coin.price_change_percentage_24h.toFixed(2)}%
              </div>
              <div className="icon-chip">
                <TrendingUpRoundedIcon />
              </div>
            </div>
          ) : (
            <div className="chip-flex">
              <div className="chip-price chip-red">
                {coin.price_change_percentage_24h.toFixed(2)}%
              </div>
              <div className="icon-chip icon-chip-red">
                <TrendingDownRoundedIcon />
              </div>
            </div>
          )}
        </Tooltip>
        <div className="info-container">
          <Tooltip title="Current Price Change in 24hr">
            <h3
              className="coin-price"
              style={{
                color:
                  coin.price_change_percentage_24h < 0
                    ? "var(--red)"
                    : "var(--green)",
              }}
            >
              ₹{coin.current_price.toLocaleString()}
            </h3>
          </Tooltip>
          <p className="total_volume">
            Total Volume : ₹{coin.total_volume.toLocaleString()}
          </p>
          <p className="total_volume">
            Market Cap : ₹{coin.market_cap.toLocaleString()}
          </p>
        </div>
      </div>
    </a>
  );
}

export default Grid;
