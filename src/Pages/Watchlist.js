import React, { useEffect, useState } from "react";
import Button from "../Components/Common/Button";
import Header from "../Components/Common/Header";
import Loader from "../Components/Common/Loader";
import { get100Coins } from "../Functions/get100Coins";
import TabsComponent from "../Components/Dashboard/Tabs";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import ErrorComponent from "../Components/Common/Error";

function WatchlistPage() {
  const coins = JSON.parse(localStorage.getItem("watchlist"));
  const [myWatchlist, setMyWatchlist] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setLoading(true);
    try {
      const allCoins = await get100Coins();
      if (coins) {
        console.log(coins, "coins ");
        setMyWatchlist(allCoins.filter((item) => coins.includes(item.id)));
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching coin data:", error);
      setLoading(false);
      setHasError(true);
      navigate("/error");
    }
  };
  return (
    <div>
      <ToastContainer />
      {loading || !coins ? (
        <Loader />
      ) : hasError ? (
        <ErrorComponent />
      ) : (
        <div style={{ minHeight: "90vh" }}>
          {myWatchlist?.length === 0 || !coins ? (
            <div>
              <Header />
              <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
                No Items in the Watchlist
              </h1>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Link to="/dashboard">
                  <Button
                    text={"Dashboard"}
                    onClick={() => console.log("btn Clicked")}
                  />
                </Link>
              </div>
            </div>
          ) : (
            <div style={{ height: "95vh" }}>
              <Header />
              <TabsComponent coins={myWatchlist} isWatchlistPage={true} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default WatchlistPage;
