import React from "react";
import classes from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
const FooterPart = () => {
  return (
    <>
      <div className={classes.FooterCont}>
        <img alt="Logo" />
        <div className={classes.FooterAdd}>
          <h6>Address</h6>
          <p>Mir Mall Complex opposite District Police Lines Srinagar</p>
          <p>J&K 190001</p>
          <a href="9797979797">
            <FontAwesomeIcon
              icon={faPhone}
              style={{ color: "#fff", fontSize: "10px" }}
            />
            9797979797
          </a>
          <a href="northstar@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} />
            northstar@gmail.com
          </a>
        </div>
        <div className={classes.FooterDet}>
          <h6>Links</h6>
          <a href="privacy">Privacy Policy</a>
          <a href="refund">Refund</a>
          <a href="terms">Terms & Conditions</a>
          <a href="about">About Us</a>
        </div>
      </div>
      <div className={classes.copy}>
        <p>&copy; Copyright All rights reserved NorthStar</p>
        <a href="developer">
          Developers Link
          <FontAwesomeIcon icon={faHeart} />
        </a>
      </div>
    </>
  );
};
export default FooterPart;
