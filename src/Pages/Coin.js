import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Components/Common/Header";
import Loader from "../Components/Common/Loader";
import List from "../Components/Dashboard/List";
import CoinInfo from "../Components/Coin/CoinInfo";
import { coinObject } from "../Functions/coinObject";
import { getCoinPrices } from "../Functions/getCoinPrices";
import { getCoinData } from "../Functions/getCoinData";
import LineChart from "../Components/Coin/LineChart";
import TogglePriceType from "../Components/Coin/PriceType";
import SelectDays from "../Components/Coin/SelectDays";
import { settingChartData } from "../Functions/settingChartData";
import Footer from "../Components/Common/Footer";
import { useNavigate } from "react-router-dom";
import ErrorComponent from "../Components/Common/Error";

function CoinPage() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [coinData, setCoinData] = useState();
  const [days, setDays] = useState(14);
  const [chartData, setChartData] = useState({});
  const [priceType, setPriceType] = useState("prices");
  const [hasError, setHasError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      getData();
    }
  }, [id]);

  async function getData() {
    setIsLoading(true);
    try {
      const data = await getCoinData(id);
      if (data) {
        coinObject(setCoinData, data);
        const prices = await getCoinPrices(id, days, priceType);
        if (prices) {
          console.log("hyyyyyy");
          settingChartData(setChartData, prices);
          setIsLoading(false);
        }
      }
    } catch (error) {
      console.error("Error fetching coin data:", error);
      setIsLoading(false);
      setHasError(true);
      navigate("/error");
    }
  }

  const handleDaysChange = async (event) => {
    setIsLoading(true);
    setDays(event.target.value);
    const prices = await getCoinPrices(id, event.target.value, priceType);
    if (prices) {
      settingChartData(setChartData, prices);
      setIsLoading(false);
    }
  };

  const handlePriceTypeChange = async (e, newType) => {
    setIsLoading(true);
    setPriceType(newType);
    const prices = await getCoinPrices(id, days, newType);
    if (prices) {
      settingChartData(setChartData, prices);
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Header />
      {isLoading ? (
        <Loader />
      ) : hasError ? (
        <ErrorComponent />
      ) : (
        <div>
          <div className="grey-wrapper">
            <List coin={coinData} />
          </div>
          <div className="grey-wrapper">
            <SelectDays days={days} handleDaysChange={handleDaysChange} />
            <TogglePriceType
              priceType={priceType}
              handlePriceTypeChange={handlePriceTypeChange}
            />
            <LineChart chartData={chartData} priceType={priceType} />
          </div>
          <CoinInfo heading={coinData.name} desc={coinData.desc} />
        </div>
      )}
      <Footer />
    </div>
  );
}

export default CoinPage;
