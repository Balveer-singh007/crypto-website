import { toast } from "react-toastify";

export const addToWatchlist = (id) => {
  let items = localStorage.getItem("watchlist");
  if (items) {
    let arr = JSON.parse(items);
    if (!arr.includes(id)) {
      arr.push(id);
      localStorage.setItem("watchlist", JSON.stringify(arr));
      toast.success(
        `${
          id.slice(0, 1).toUpperCase() + id.slice(1)
        } - Added To The Watchlist!`
      );
    } else {
      toast.warn("Coin is already in the Watchlist!");
    }
  } else {
    let arr = JSON.stringify([id]);
    localStorage.setItem("watchlist", arr);
    toast.success(
      `${id.slice(0, 1).toUpperCase() + id.slice(1)} - Added To The Watchlist!`
    );
  }
};
