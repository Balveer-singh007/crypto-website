import React, { useEffect, useState } from "react";
import { get100Coins } from "../../../Functions/get100Coins";
import "./style.css";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const ScrollMarquee = () => {
  const [allCoins, setAllCoins] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const coins = await get100Coins();
      setAllCoins(coins);
      console.log(coins);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <Marquee className="mark" pauseOnHover={true}>
      {allCoins.length > 0 ? (
        allCoins.map((coin, ind) => (
          <div className="content coin-price " key={ind}>
            <Link
              style={{
                color:
                  coin.price_change_percentage_24h > 0
                    ? "var(--green)"
                    : "var(--red)",
              }}
              to={`/coin/${coin.id}`}
            >
              <h3>
                {coin.name}-${coin.current_price}
              </h3>
            </Link>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </Marquee>
  );
};

export default ScrollMarquee;
