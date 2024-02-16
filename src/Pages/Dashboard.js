import { React, useEffect, useState } from "react";
import Header from "../Components/Common/Header";
import TabsComponents from "../Components/Dashboard/Tabs";
import PaginationComponent from "../Components/Dashboard/Pagination";
import Loader from "../Components/Common/Loader";
import BackToTop from "../Components/Common/BackToTop";
import { get100Coins } from "../Functions/get100Coins";
import Search from "../Components/Dashboard/Search";
import Footer from "../Components/Common/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import ErrorComponent from "../Components/Common/Error";

function DashboardPage() {
  const [coins, setCoins] = useState([]);
  const [pageNumber, setPageNumber] = useState("1");
  const [paginatedCoins, setPaginatedCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const navigate = useNavigate();

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const handlePageChange = (event, value) => {
    setPageNumber(value);
    let prevIndex = (value - 1) * 10;
    console.log(prevIndex);
    setPaginatedCoins(coins.slice(prevIndex, prevIndex + 10));
  };

  let filteredCoins = coins.filter((item) => {
    if (
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.symbol.toLowerCase().includes(search.toLowerCase())
    )
      return coins;
  });

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setLoading(true);
    try {
      const data = await get100Coins();
      if (data) {
        setCoins(data);
        setPaginatedCoins(data.slice(0, 10));
        setLoading(false);
      }
    } catch (error) {
      console.error("Error fetching coin data:", error);
      setLoading(false);
      setHasError(true);
      navigate("/error");
    }
  };

  return (
    <div>
      <Header />
      <BackToTop />
      {loading ? (
        <Loader />
      ) : hasError ? (
        <ErrorComponent />
      ) : (
        <div>
          <Search search={search} onChange={onChange} />
          <TabsComponents
            coins={search ? filteredCoins : paginatedCoins}
            setSearch={setSearch}
          />
          {!search && (
            <PaginationComponent
              pageNumber={parseInt(pageNumber)}
              handleChange={handlePageChange}
            />
          )}
        </div>
      )}
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default DashboardPage;
