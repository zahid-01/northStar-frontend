import React from "react";
import classes from "./Footer.module.css";
const FooterPart = () => {
  return (
    <footer>
      <div className={classes.FooterCont}>
        <img alt="Logo" />
        <div className={classes.FooterAdd}>
          <h6>Address</h6>
          <p>Mir Mall Complex opposite District Police Lines Srinagar</p>
          <p>J&K 190001</p>
          <a href="9797979797">9797979797</a>
          <a href="northstar@gmail.com">northstar@gmail.com</a>
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
        <a href="developer">Developers Link</a>
      </div>
    </footer>
  );
};
export default FooterPart;
