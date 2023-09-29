import React from "react";
import "./Manufacturing.css";
import demoImg from "../../assets/LeanMuscles.png";

const Manufacturing = () => {
  return (
    <div className="ManufactureMain">
      <div className="manufactureVideoDiv"></div>

      <div className="manufactureQualityDiv">
        <div className="qualityCard">
          <h3>Scientifically Backed Formulas</h3>
          <p>
            Our supplements are formulated based on cutting-edge scientific
            research and are designed to provide the nutrients your body needs
            for optimal muscle growth, recovery, and performance.
          </p>
        </div>

        <div className="qualityCard">
          <h3>Premium Ingredients</h3>
          <p>
            We source only the finest ingredients from reputable suppliers to
            ensure the highest quality in every product. Our commitment to
            quality means you can trust what you're putting into your body.
          </p>
        </div>

        <div className="qualityCard">
          <h3>GMP-Certified Manufacturing</h3>
          <p>
            Our state-of-the-art manufacturing facilities adhere to Good
            Manufacturing Practices (GMP) to guarantee the purity, potency, and
            safety of every supplement we produce.
          </p>
        </div>
      </div>

      <div className="manufactureVideo">
        <iframe
          width="660"
          height="515"
          src="https://www.youtube.com/embed/PYCjd8dIKnA?si=5Pk8MomxPQHeTwZe"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default Manufacturing;
