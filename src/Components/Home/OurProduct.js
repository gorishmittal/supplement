import React from 'react'
import Styles from "./OurProduct.module.css"

import benifts from "../../assets/benifits.png";

const OurProduct = () => {
  return (
    <div className={Styles.main}>
    <div className={Styles.Discription}>
      <div className={Styles.DiscriptionContent}>
        <h1>Our Products </h1>

        <hr class={Styles.solid}></hr>
        <p className={Styles.subHeading}>Fuel Your Body with ProTeen Protein</p>
        <p className={Styles.DiscriptionContentMain}>
         Discover our selection of
          high-quality protein supplements, each carefully crafted to meet
          your unique needs. From whey protein for muscle recovery to
          plant-based options for our vegan friends, we have a protein
          solution for everyone.
        </p>

        <button className={Styles.buttonMain}>Learn More</button>
      </div>

      <div className={Styles.DiscriptionImage}>
        <img className={Styles.DiscriptionImg} src={benifts}></img>
      </div>
    </div>
  </div>
  )
}

export default OurProduct