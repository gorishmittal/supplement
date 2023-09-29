import React, { useContext } from "react";
import "./ShopByGoal.css";
import wall from "../../assets/wall.jpg";
import leanMuscle from "../../assets/LeanMuscles.png";
import Bulking from "../../assets/Bulking.png";
import performance from "../../assets/runner.png";
import BodyBuilding from "../../assets/BodyBuilding.png";
import WeightLoss from "../../assets/weightLoss.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ProductContext } from "../Context/ProductContext";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const ShopByGoal = () => {
  const { goal, setGoal } = useContext(ProductContext);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
      <div className="shopmainDiv" style={{ backgroundImage: `url(${wall})` }}>
        <h1 className="ShopTopHeading">Shop By Goal</h1>

        <div className="ShopCardDiv">
          <Carousel responsive={responsive} showDots={true}>
            {goal.map((items) => (
              <Link to={`/collection/${items.goalname}`}>
              <div class="Shopcontainer">
                <div class="Shopcard_box">
                  <img src={performance}></img>
                  <p>{items.goalname}</p>
                  <span></span>
                </div>
              </div>
              </Link>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default ShopByGoal;
