import React, { useContext, useState } from "react";
import "./Collection.css";

import ProductCategory from "../Product/ProductCategory";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ProductContext } from "../Context/ProductContext";

const Collection = () => {

    const { category, setCategory } = useContext(ProductContext);

    console.log(category)
  

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

  return (
    <div className="mainContainer">

<div>
        <h1 className="CollectionHeading">Shop By Collection</h1>
      </div>


      <Carousel responsive={responsive} showDots={true}>
       
      
      {category.map((items) => (
      
            <ProductCategory
              category={items.categoryname}
            ></ProductCategory>
         
          ))}
       
      </Carousel>
    </div>
  );
};

export default Collection;
