import React from "react";
import classes from "./Signup.module.css";
const Signup = () => {
  return (
    <>
      <div className={classes.mainDiv1}>
        <div className={classes.container}>
          <h3 className="logo-3">Sign-up</h3>
          <form className={classes.signup}>
            <div className={`${classes.userName} `}>
              <label>Name</label>
              <input type="text" placeholder="NorthStar"></input>
            </div>
            <div className={classes.userEmail}>
              <label>Email</label>
              <input type="email" placeholder="NorthStar@example.com"></input>
            </div>
            <div className={`${classes.userPassword} ${classes.userPass1}`}>
              <label>Password</label>
              <input type="password" placeholder="*****"></input>
            </div>
            <div className={`${classes.userPassword}`}>
              <label>Confirm</label>
              <input type="password" placeholder="*****"></input>
            </div>
            <div className={`${classes.usernumber}`}>
              <label>Phone</label>
              <input type="number" placeholder="9797979797"></input>
            </div>
            <div className={`${classes.useraddress}`}>
              <label>Address</label>
              <input type="text" placeholder="Srinagar"></input>
            </div>
          </form>
          <div className={classes.btnDiv}>
            <button type="submit" className={classes.btn}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Signup;
