import React from 'react'
import logo1 from "../../assets/certificate1.png"
import logo2 from "../../assets/certificate2.png"
import logo3 from "../../assets/certificate3.png"
import "./OurCertification.css"
const OurCertification = () => {
  return (
    <div className="certificationDiv">

       <h1>Our Certifications</h1>
       <div className='certificationImageDiv'>
       
        <img src={logo3}></img>
        <img src={logo2}></img>
        <img src={logo1 }></img>
        <img src={logo2}></img>
        <img src={logo3}></img>

        </div>
    </div>
  )
}

export default OurCertification