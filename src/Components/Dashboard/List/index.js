import { useState, React } from "react";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import { IconButton, Tooltip } from "@mui/material";
import { removeFromWatchlist } from "../../../Functions/removeFromWatchlist";
import { addToWatchlist } from "../../../Functions/addToWatchlist";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { hasBeenAdded } from "../../../Functions/hasBeenAdded";
import { convertNumbers } from "../../../Functions/convertNumbers";
import { Link } from "react-router-dom";
import "./style.css";

function List({ coin, isWatchlistPage }) {
  const [added, setAdded] = useState(hasBeenAdded(coin.id));
  return (
    <Link to={`/coin/${coin.id}`}>
      <tr
        className="list-row"
        style={{ display: isWatchlistPage && !added && "none" }}
      >
        <Tooltip title="Coin Logo " placement="bottom-start">
          <td className="td-image td-image-list">
            <img
              src={coin.image}
              alt="coin-logo"
              className="coin-logo coin-logo-list "
            />
          </td>
        </Tooltip>

        <Tooltip title="Coin Info" placement="bottom-start">
          <td>
            <div className="name-col">
              <p className="coin-symbol coin-symbol-list">
                {coin.symbol + "-INR"}
              </p>
              <p className="coin-name coin-name-list">{coin.name}</p>
            </div>
          </td>
        </Tooltip>

        <Tooltip
          title="Current Price Change in 24hr in Percentage"
          placement="bottom-start"
        >
          {coin.price_change_percentage_24h > 0 ? (
            <td className="chip-flex chip-media chip-flex-list">
              <div className="chip-price chip-price-list price-chip-destop">
                {coin.price_change_percentage_24h.toFixed(2)}%
              </div>
              <div className="icon-chip td-icon">
                <TrendingUpRoundedIcon />
              </div>
            </td>
          ) : (
            <td className="chip-flex chip-media price-chip-mobile">
              <div className="chip-price chip-price-list chip-red price-chip-destop">
                {coin.price_change_percentage_24h.toFixed(2)}%
              </div>
              <div className="icon-chip icon-chip-red td-icon">
                <TrendingDownRoundedIcon />
              </div>
            </td>
          )}
        </Tooltip>
        <Tooltip title="Current Price Change in 24hr" placement="bottom">
          <td className="desktop-td-current-price">
            <h3
              className="coin-price coin-price-list td-center-align"
              style={{
                color:
                  coin.price_change_percentage_24h < 0
                    ? "var(--red)"
                    : "var(--green)",
              }}
            >
              ₹{coin.current_price.toLocaleString()}
            </h3>
          </td>
        </Tooltip>

        <Tooltip title="Current Price Change in 24hr" placement="bottom">
          <td className="mobile-td-current-price">
            <h3
              className="coin-price coin-price-list td-center-align"
              style={{
                color:
                  coin.price_change_percentage_24h < 0
                    ? "var(--red)"
                    : "var(--green)",
              }}
            >
              ₹{convertNumbers(coin.current_price)}
            </h3>
          </td>
        </Tooltip>

        <Tooltip title="Total Volume" placement="bottom">
          <td className="desktop-td-total">
            <p className="total_volume td-right-align td-volume">
              ₹{coin.total_volume.toLocaleString()}
            </p>
          </td>
        </Tooltip>
        <Tooltip title="Total Volume" placement="bottom">
          <td className="mobile-td-total">
            <p className="total_volume td-right-align td-volume">
              ₹{convertNumbers(coin.total_volume)}
            </p>
          </td>
        </Tooltip>
        <Tooltip title="Market Cap" placement="bottom">
          <td className="desktop-td-market">
            <p className="total_volume  td-right-align ">
              ₹{coin.market_cap.toLocaleString()}
            </p>
          </td>
        </Tooltip>
        <Tooltip title="Market Cap" placement="bottom">
          <td className="mobile-td-market">
            <p className="total_volume td-right-align  ">
              ₹{convertNumbers(coin.market_cap)}
            </p>
          </td>
        </Tooltip>
        <td>
          <IconButton
            onClick={(e) => {
              e.preventDefault();
              if (added) {
                console.log("Removing from watchlist:", coin.id);
                removeFromWatchlist(coin.id);
                setAdded(false);
              } else {
                console.log("Adding to watchlist:", coin.id);
                addToWatchlist(coin.id);
                setAdded(true);
              }
            }}
          >
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
        </td>
      </tr>
    </Link>
  );
}

export default List;
