import React, { useContext, useEffect, useState } from "react";
import Product from "../Product/Product";
import { ProductContext } from "../Context/ProductContext";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Styles from "./RecomendedProducts.module.css";

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

const RecomendedProducts = (props) => {
  const { products, setProducts } = useContext(ProductContext);

  let mainProduct = products.filter(function (item) {
    return item.id === props.id;
  })[0];


  let RecomendedProducts=products.filter(function (item) {
    return item.category == mainProduct.category;
  });

  

  return (
    <div className={Styles.RecomendedProducts}>
      <h1 className={Styles.RecomendedProductsHeading}>You may also like</h1>

      <div className={Styles.CarouselDiv}>
        <Carousel responsive={responsive} showDots={true} >
          {RecomendedProducts.map((item) => (
            
         
                <Product
                  id={item.id}
                  title={item.title}
                  stock={item.stock}
                  MRP={item.MRP}
                  price={item.price}
                  rating={item.rating}
                  flavour={item.flavour}
                  weight={item.weight}
                  serving={item.serving}
                  category={item.category}
                  image={item.image}
                ></Product>
             ))}
        </Carousel>
        
      </div>
    </div>
  );
};

export default RecomendedProducts;
