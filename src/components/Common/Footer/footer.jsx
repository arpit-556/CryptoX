import React from "react";
import "./styles.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { SiMaildotru } from "react-icons/si";

function Footer() {
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <div className="footer">
      <h2 className="logo" onClick={() => topFunction()}>
        CryptoX<span>.</span>
      </h2>
      <div className="social-links">
        <a href="arpitdubey20063@gmail.com" target="_blank">
          <SiMaildotru className="social-link" size={19} />
        </a>

        <a href="https://www.linkedin.com/in/arpit-dubey-062798250" target="_blank">
          <BsLinkedin className="social-link" size={18} />
        </a>
        <a href="https://github.com/arpit-556" target="_blank">
          <BsGithub className="social-link" size={19} />
        </a>
       
      </div>
    </div>
  );
}

export default Footer;
