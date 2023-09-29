import React from "react";
import Styles from "./Features.module.css";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import background from "../../assets/gradientBack.jpg"
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';

const Features = () => {
  return (
    <div className={Styles.main}>
      <div className={Styles.elivatedDiv}  style={{ backgroundImage: `url(${background})` }}>
     
      <div className={Styles.outerDiv}>
          <div className={Styles.iconDiv}>
            <VerifiedUserIcon className={Styles.icon}></VerifiedUserIcon    >
          </div>
          <p className={Styles.mainHead}>Lab Tested </p>
        </div>


        <div className={Styles.outerDiv}>
          <div className={Styles.iconDiv}>
            <MilitaryTechIcon className={Styles.icon}></MilitaryTechIcon>
          </div>
          <p className={Styles.mainHead}>30+ Qualtiy Checks</p>
        </div>

        <div className={Styles.outerDiv}>
          <div className={Styles.iconDiv}>
            <LocalShippingIcon className={Styles.icon}></LocalShippingIcon>
          </div>
          <p className={Styles.mainHead}>Express Delivery</p>
        </div>


        <div className={Styles.outerDiv}>
          <div className={Styles.iconDiv}>
            <AccountBalanceWalletIcon className={Styles.icon}></AccountBalanceWalletIcon>
          </div>
          <p className={Styles.mainHead}>Secure Payment</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
