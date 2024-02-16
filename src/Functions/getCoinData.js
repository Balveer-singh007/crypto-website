import axios from "axios";

export const getCoinData = (id) => {
  const coinData = axios
    .get(`https://api.coingecko.com/api/v3/coins/${id}`)
    .then((response) => {
      if (response.status == 200) {
        return response.data;
      }
    })
    .catch((error) => {
      console.log("error>>>", error);
      throw error;
    });

  if (coinData) return coinData;
  else return;
};
