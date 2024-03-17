import { React, useState } from "react";
import "./style.css";
import Button from "../../Common/Button";
import iphone from "../../../Assets/phone 1.png";
import gradient from "../../../Assets/gradient 1.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ShareModal from "../../LandingPage/ShareModal";

function Intro() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="flex-info">
      <div className="left-component">
        <motion.span
          className="track-crypto-heading"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          duration={{ duration: 0.5, delay: 0.1 }}
        >
          Track Crypto
        </motion.span>
        <motion.h1
          className="real-time-heading"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          duration={{ duration: 0.5, delay: 0.2 }}
        >
          Real Time.
        </motion.h1>
        <motion.p
          className="info-para"
          initial={{ opacity: 0, x: -150 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, type: "smooth", delay: 1.5 }}
        >
          Track crypto through a public api in real time. Visit the dashboard to
          do so!
        </motion.p>
        <motion.div
          className="btn-flex"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, type: "smooth", delay: 1.5 }}
        >
          <Link to="/dashboard">
            <Button
              text={"Dashboard"}
              onClick={() => console.log("btn Clicked")}
            />
          </Link>
          <Button
            text={"Share"}
            outlined={true}
            onClick={() => setModalOpen(true)}
          />
        </motion.div>
        <ShareModal open={isModalOpen} onClose={() => setModalOpen(false)} />
      </div>
      <div className="phone-container">
        <motion.img
          src={iphone}
          alt="iphone"
          className="iphone"
          initial={{ y: -10 }}
          animate={{ y: 10 }}
          transition={{
            type: "smooth",
            repeatType: "mirror",
            duration: 2,
            repeat: Infinity,
          }}
        />
        <img src={gradient} alt="gradient" className="gradient" />
      </div>
    </div>
  );
}

export default Intro;
