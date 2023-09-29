import React, { useContext, useState } from "react";
import "./Home.css";

import background from "../../assets/homeBack.jpg";
import proteen from "../../assets/proteen.png";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import BestSaleProduct from "./BestSaleProduct";
import CoustomerBelieve from "./CoustomerBelieve";
import OurProduct from "./OurProduct";
import Features from "./Features";
import Collection from "./Collection";
import ShopByGoal from "./ShopByGoal";
import Manufacturing from "./Manufacturing";
import Discription from "./Discription";


const Home = () => {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  const [cartIsShown, setCartIsShown] = useState(false);

  const ShowCartHandler = () => {
    setCartIsShown(true);
  };

  const HideCartHandler = () => {
    setCartIsShown(false);
  };




  return (
    <div>
      <div className="topDiv" style={{ backgroundImage: `url(${background})` }}>
        <img className="imgProteen" src={proteen}></img>

        <h1 className="topHeading animate-charcter">MUSSCLE GAIN</h1>
      </div>

    
     
      <Discription></Discription>


      <BestSaleProduct></BestSaleProduct>

      <CoustomerBelieve></CoustomerBelieve>
      
      
      <Features></Features>

      <OurProduct></OurProduct>
      <ShopByGoal></ShopByGoal>

      <Collection></Collection>

      <Manufacturing></Manufacturing>
    </div>
  );
};

export default Home;
