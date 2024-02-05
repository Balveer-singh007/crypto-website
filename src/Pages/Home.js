import React from "react";
import Header from "../Components/Common/Header";
import ScrollMarquee from "../Components/Common/ScrollMarquee";
import MainComponent from "../Components/LandingPage/MainComponent";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CustomCursor from "../Components/Common/CustomCursor";

function HomePage() {
  return (
    <div>
      <Header />
      <ScrollMarquee />
      <MainComponent />
      <CustomCursor />
      <ToastContainer />
    </div>
  );
}

export default HomePage;
