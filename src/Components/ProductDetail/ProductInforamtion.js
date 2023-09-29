import React, { useContext, useState } from "react";
import Styles from "./Productinformation.module.css";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DoNotDisturbIcon from "@mui/icons-material/DoNotDisturb";
import CartContext from "../Context/CartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import PaymentIcon from "@mui/icons-material/Payment";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { ProductContext } from "../Context/ProductContext";
import ProductImageSlider from "./ProductImageSlider";

const ProductInforamtion = (props) => {
  const cartCtx = useContext(CartContext);
  const { products, setProducts } = useContext(ProductContext);

  // geting the main product
  let mainProduct = products.filter(function (item) {
    return item.id === props.id;
  })[0];

  // calculating the saving percentage

  const [saving, setsaving] = useState(
    Math.round(((mainProduct.MRP - mainProduct.price) / mainProduct.MRP) * 100)
  );

  const onaddClickListner = () => {
    if (mainProduct.Stock > 0) {
      cartCtx.addItem({
        id: mainProduct.id,
        title: mainProduct.title,
        stock: mainProduct.stock,
        MRP: mainProduct.MRP,
        amount: amount,
        price: mainProduct.price,
        rating: mainProduct.rating,
        flavour: mainProduct.flavour,
        weight: mainProduct.weight,
        serving: mainProduct.serving,
        category: mainProduct.category,
        image: mainProduct.image,
      });

      toast.success(
        `${mainProduct.title} | ${mainProduct.flavour} Flavour | ${mainProduct.weight} Kg | ${mainProduct.serving} Servings`
      );
    } else {
      toast.error(`Product is out of stock`);
    }
  };

  //  product amount manage

  const [amount, setAmount] = useState(1);

  const onItemAdd = () => {
    // adding amount less than or equal to stock
    if (amount < mainProduct.Stock) setAmount(amount + 1);
    else {
      toast.error(`Only ${mainProduct.Stock} piece available in stock`);
    }
  };

  const onItemRemove = () => {
    if (amount > 1) setAmount(amount - 1);
  };

  //filtering the other flavours available of same product

  let ProductFlavours = products.filter(function (item) {
    return item.title === mainProduct.title;
  });

  return (
    <div className={Styles.mainDiv}>
      <div className={Styles.productImageDiv}>
    <ProductImageSlider infoImage={mainProduct.infoImage} ></ProductImageSlider>
      </div>

      <div className={Styles.productInfoDiv}>
        {/* product title */}
        <div className={Styles.productInfoTitle}>
          <p>{mainProduct.category}</p>

          <h1>
            {mainProduct.title} | {mainProduct.flavour} Flavour |{" "}
            {mainProduct.weight} Kg | {mainProduct.serving} Servings
          </h1>
        </div>

        {/* product stock */}
        <div className={Styles.Stock}>
          {mainProduct.Stock > 0 && (
            <div className={Styles.inStock}>
              <CheckCircleIcon className={Styles.inStockIcon}></CheckCircleIcon>
              <p>In Stock</p>
            </div>
          )}

          {!mainProduct.Stock > 0 && (
            <div className={Styles.outOfStock}>
              <DoNotDisturbIcon
                className={Styles.outStockIcon}
              ></DoNotDisturbIcon>
              <p>Out Of Stock</p>
            </div>
          )}
        </div>

        {/* product Price */}

        <div className={Styles.priceDiv}>
          <h2 class={Styles.price}>
            ₹{mainProduct.price}{" "}
            <s>
              <small className={Styles.mrp}>₹{mainProduct.MRP}</small>
            </s>
          </h2>

          <div className={Styles.saving}>
            <p>Save {saving}%</p>
          </div>
        </div>

        {/* product flavour */}

        <div className={Styles.FlavoursDiv}>

        <div className={Styles.FlavoursDivHeading}>
            <h4>Flavour:</h4>
            <p> ["{mainProduct.flavour} {mainProduct.weight}kg"]</p>

        </div>

        <diV className={Styles.productFlavour}> 
          {ProductFlavours.map((item) => (
            <>
            <Link to={`/product/${item.id}`}>
                <div className={Styles.Flavours}>
                  <p>{item.flavour}</p>
                  <p>{item.weight}kg</p>
                </div>
                </Link>
            </>
          ))}
        </diV>
        </div>

        {/* product amount */}

        <div className={Styles.productamount}>
          <p>Quantity:</p>

          <div className={Styles.actions}>
            <button onClick={onItemRemove}>−</button>
            <span>{amount}</span>
            <button onClick={onItemAdd}>+</button>
          </div>
        </div>

        {/* add to cart button*/}

        <div onClick={onaddClickListner} className={Styles.addToCart}>
          <a>Add to cart </a>
        </div>

        {/* payment feature */}

        <div className={Styles.paymentFeature}>
          <div className={Styles.outerDiv}>
            <div className={Styles.iconDiv}>
              <LocalShippingIcon className={Styles.icon}></LocalShippingIcon>
            </div>
            <p className={Styles.mainHead}>Fastest Delivery*</p>
          </div>

          <div className={Styles.outerDiv}>
            <div className={Styles.iconDiv}>
              <PaymentIcon className={Styles.icon}></PaymentIcon>
            </div>
            <p className={Styles.mainHead}>100% Secure Payment</p>
          </div>

          <div className={Styles.outerDiv}>
            <div className={Styles.iconDiv}>
              <AccountBalanceWalletIcon
                className={Styles.icon}
              ></AccountBalanceWalletIcon>
            </div>
            <p className={Styles.mainHead}>COD Available*</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInforamtion;
