import { React, useEffect, useState } from "react";
import Header from "../Components/Common/Header";
import TabsComponents from "../Components/Dashboard/Tabs";
import PaginationComponent from "../Components/Dashboard/Pagination";
import Loader from "../Components/Common/Loader";
import BackToTop from "../Components/Common/BackToTop";
import { get100Coins } from "../Functions/get100Coins";
import Search from "../Components/Dashboard/Search";
import Footer from "../Components/Common/Footer";
import CustomCursor from "../Components/Common/CustomCursor";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function DashboardPage() {
  const [coins, setCoins] = useState([]);
  const [page, setPage] = useState("1");
  const [paginatedCoins, setPaginatedCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const onSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handlePageChange = (event, value) => {
    setPage(value);
    let prevIndex = (value - 1) * 10;
    console.log(prevIndex);
    setPaginatedCoins(coins.slice(prevIndex, prevIndex + 10));
  };

  let filteredCoins = coins.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.symbol.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const myCoins = await get100Coins();
    if (myCoins) {
      setCoins(myCoins);
      setPaginatedCoins(myCoins.slice(0, 10));
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Header />
      <BackToTop />
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Search search={search} onSearchChange={onSearchChange} />
          <TabsComponents coins={search ? filteredCoins : paginatedCoins} />
          {!search && (
            <PaginationComponent
              page={page}
              handlePageChange={handlePageChange}
            />
          )}
        </div>
      )}
      <CustomCursor />
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default DashboardPage;
