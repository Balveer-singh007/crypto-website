import axios from "axios";

export const getCoinData = (id) => {
  const myData = axios
    .get(
      `https://api.coingecko.com/api/v3/coins/${id}?x_cg_demo_api_key=CG-P9pA4WokEwF3Rg1HNoAwBsHQ`
    )
    .then((response) => {
      console.log("ReSPONSE>>>", response);
      return response.data;
    })
    .catch((error) => {
      console.log("error>>>", error);
    });
  return myData;
};
