import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import {
  FacebookShareButton,
  EmailShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

import {
  FacebookIcon,
  EmailIcon,
  LinkedinIcon,
  PinterestIcon,
  PocketIcon,
  RedditIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";

import "./style.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  boxShadow: 24,
  p: 4,
};

function ShareModal({ open, onClose }) {
  const source = "Crypto Tracker";
  const currentPageUrl = window.location.href;
  const title = "CryptoSphere: Explore, Analyze, Invest";
  const description =
    "Explore the world of cryptocurrencies with Crypto Tracker. Real-time market data, insightful analytics, and user-friendly tools at your fingertips. Stay informed, make smart investment decisions, and ride the crypto wave with confidence.Elevate your financial journey - explore the future with us.";

  const hashtags = ["crypto", "blockchain", "investing"];

  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="close-div">
            <IconButton className="close-icon-btn" onClick={onClose}>
              <CloseRoundedIcon className="close" />
            </IconButton>
          </div>

          <div className="share-icon">
            <LinkedinShareButton
              url={currentPageUrl}
              title={title}
              summary={description}
              source={source}
            >
              <LinkedinIcon borderRadius={5} />
            </LinkedinShareButton>

            <EmailShareButton
              url={currentPageUrl}
              subject={title}
              body={currentPageUrl}
              separator=""
            >
              <EmailIcon borderRadius={5} />
            </EmailShareButton>

            <WhatsappShareButton
              url={currentPageUrl}
              title={title}
              separator="--"
            >
              <WhatsappIcon borderRadius={5} />
            </WhatsappShareButton>

            <TelegramShareButton url={currentPageUrl} title={title}>
              <TelegramIcon borderRadius={5} />
            </TelegramShareButton>

            <TwitterShareButton
              url={currentPageUrl}
              title={title}
              hashtags={hashtags}
            >
              <TwitterIcon borderRadius={5} />
            </TwitterShareButton>

            <FacebookShareButton
              url={currentPageUrl}
              hashtag="#invest #crypto #blockchain"
            >
              <FacebookIcon borderRadius={5} />
            </FacebookShareButton>

            <PinterestShareButton
              url={currentPageUrl}
              description={description}
            >
              <PinterestIcon borderRadius={5} />
            </PinterestShareButton>

            <RedditShareButton url={currentPageUrl} title={title}>
              <RedditIcon borderRadius={5} />
            </RedditShareButton>

            <PocketShareButton url={currentPageUrl} title={title}>
              <PocketIcon borderRadius={5} />
            </PocketShareButton>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default ShareModal;

// https://crypto-tracker-clone.vercel.app/
