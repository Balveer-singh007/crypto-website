import { toast } from "react-toastify";

export const removeFromWatchlist = (id) => {
  let items = localStorage.getItem("watchlist");
  let arr = JSON.parse(items);
  if (arr && arr.includes(id)) {
    localStorage.setItem(
      "watchlist",
      JSON.stringify(arr.filter((item) => item !== id))
    );
    toast.error(
      `${
        id.slice(0, 1).toUpperCase() + id.slice(1)
      } removed from the watchlist!`
    );
  } else {
    toast.error("Coin not Found in the Watchlist!");
  }
};
