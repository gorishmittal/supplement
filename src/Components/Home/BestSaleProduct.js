import React, { useContext, useEffect, useState } from "react";
import "./BestSaleProduct.css";
import Product from "../Product/Product";
import { ProductContext } from "../Context/ProductContext";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
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

const BestSaleProduct = () => {
  const { products, setProducts } = useContext(ProductContext);
  console.log(products);

  return (
    <div className="BestSaler">
   
        <h1 className="BestSalerHeading">Best Sellers</h1>
     

      <div className="BestSalerProduct">
        <Carousel
          autoPlay={"desktop" !== "mobile" ? true : false}
          autoPlaySpeed={3000}
          responsive={responsive}
          showDots={true}
        >
          {products.map((item) => (
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
        ;
      </div>
    </div>
  );
};

export default BestSaleProduct;
