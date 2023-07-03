import logo from "../../Assets/Imgs/796994.png";
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
        <img alt="Logo" src={logo} className={classes.logo} />
        <div className={classes.FooterAdd}>
          <h6>Address</h6>
          <p className={classes.footAdd}>
            Mir Mall Complex opposite District Police Lines Srinagar
          </p>
          <p className={classes.footAdd}>J&K 190001</p>
          <a href="9797979797">
            <FontAwesomeIcon icon={faPhone} style={{ fontSize: "12px" }} />
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
        <p className={classes.footAdd}>
          &copy; Copyright All rights reserved NorthStar
        </p>
        <a href="developer">
          Developers Link
          <FontAwesomeIcon icon={faHeart} />
        </a>
      </div>
    </>
  );
};
export default FooterPart;
