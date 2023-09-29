import React, { useState } from "react";
import Styles from "./ProductImageSlider.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
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

const ProductImageSlider = (props) => {




 
  const[mainImage, setMainImage]=useState(props.infoImage[0]);

  

  return (
    <div className={Styles.imageSlider}>
      <div className={Styles.mainImage}>
        <img src={mainImage}></img>
      </div>

      <div className={Styles.imageArray}></div>

      <Carousel responsive={responsive} showDots={true}>
        {props.infoImage.map((items) => (
          <img onClick={()=>setMainImage(items)} className={Styles.Image} src={items}></img>
        ))}
      </Carousel>
    </div>
  );
};

export default ProductImageSlider;
