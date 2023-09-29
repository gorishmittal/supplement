import React from "react";
import Styles from "./CoustomerBelieve.module.css";
import background from "../../assets/gradientBack.jpg"


const CoustomerBelieve = () => {
  return (
   <div className={Styles.main}  style={{ backgroundImage: `url(${background})` }}>

    
 
    <h1 className={Styles.mainHead}>Over 1.5 Lakhs</h1>

    <h3 className={Styles.subHead}>Customers Believe in Our Quality Products</h3>

    <button className={Styles.buttonMain}>Learn More</button>
   </div>
  );
};

export default CoustomerBelieve;
