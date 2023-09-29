import React, { useContext, useState } from "react";
import "./ProductCollection.css";
import { useParams } from "react-router-dom";
import { ProductContext } from "../Context/ProductContext";
import Product from "../Product/Product";
import demoProduct from "../../assets/proteen2.png";
import BlackBrik from "../../assets/png.png";
import gymplate from "../../assets/pngrunner.png";
import quality from "../../assets/quality.png";
import TuneIcon from "@mui/icons-material/Tune";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Switch from "@mui/material/Switch";
import PriceFilter from "./PriceFilter";

const ProductCollection = () => {
  const { products, setProducts } = useContext(ProductContext);
  const params = useParams();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // in stock filter functionality

  const [inStockFilter, setInStockFilter] = useState(false);
  const [showProducts, setShowProducts] = useState(products);

  const SwichClick = () => {
    setInStockFilter(!inStockFilter);
  };

  const inStockProducts = products.filter(function (item) {
    return item.Stock > 0;
  });

  //filter

  useEffect(() => {
    if (inStockFilter == true) {
      setShowProducts(inStockProducts);
    } else {
      setShowProducts(products);
    }
  }, [inStockFilter]);

 

  //finding the maxmium priced product

  const ProductsPrice = products.filter((item) => {
    return (
      (item.category == params.productCategory ||
        item.goal.includes(params.productCategory)) 
    );
  });

  const priceArray=ProductsPrice.map((item)=>item.price)

  const maxPrice =Math.max(...priceArray)

  console.log(maxPrice)

  

  return (
    <div>
      <div
        className="ProductCollectionTopHeader"
        style={{ backgroundImage: `url(${BlackBrik})` }}
      >
        <div className="headcolumn1">
          <h1>{params.productCategory}</h1>
        </div>

        <div className="headcolumn2">
          <div
            className="headImagediv"
            style={{ backgroundImage: `url(${gymplate})` }}
          >
            <img src={demoProduct}></img>
          </div>
        </div>
      </div>

      <hr class="Devidersolid"></hr>

      <div className="ProductSection">
        <div className="FilterSection">
          <div className="FilterHeading">
            <TuneIcon></TuneIcon>
            <h3>Filters</h3>
          </div>

          <hr class="DevidersolidFilter"></hr>

          <div className="FilterStock">
            <h3>In Stock Only</h3>
            <Switch
              checked={inStockFilter}
              onClick={SwichClick}
              inputProps={{ "aria-label": "controlled" }}
            />
          </div>
          <hr class="Collectionsolid"></hr>

          <div className="FilterPrice">
            <PriceFilter maxPrice={maxPrice}></PriceFilter>
          </div>

          <hr class="Collectionsolid"></hr>
        </div>

        <div className="ProductCollection">
          {showProducts.map((item) => {
            return (
              <>
                {(item.category == params.productCategory ||
                  item.goal.includes(params.productCategory)) && (
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
                )}
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductCollection;
