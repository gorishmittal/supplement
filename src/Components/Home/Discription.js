import React from 'react'
import "./Discription.css"
import allProducts from "../../assets/sampleProduct2.png";

const Discription = () => {
  return (
    
    <div className="Discription">
        <div className="DiscriptionContent">
          <h1>NITRACORE</h1>

          <hr class="solid"></hr>
          <p>
            Your Source for Premium Protein Supplements Discover the power of
            protein with ProTeen. We're your trusted partner in achieving your
            fitness goals and maintaining a healthy lifestyle. Explore our range
            of high-quality protein products, expert fitness advice, and
            nutritious recipes.
          </p>

          <button className="buttonMain">Learn More</button>
        </div>

        <div className="DiscriptionImage">
          <img className="DiscriptionImg" src={allProducts}></img>
        </div>
      </div>
  )
}

export default Discription