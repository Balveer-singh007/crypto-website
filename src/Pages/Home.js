import React from "react";
import Header from "../Components/Common/Header";
// import ScrollMarquee from "../Components/Common/ScrollMarquee";
import MainComponent from "../Components/LandingPage/MainComponent";
import Footer from "../Components/Common/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function HomePage() {
  return (
    <div>
      <Header />
      {/* <ScrollMarquee /> */}
      <MainComponent />
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default HomePage;
