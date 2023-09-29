import React, { useContext } from "react";
import Styles from "./Product.module.css";
import productImage from "../../assets/proteen.png";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import CartContext from "../Context/CartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Product = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  const cartCtx = useContext(CartContext);
  console.log("this is the basket>>>", cartCtx.items);

  const addToBasket = () => {
    cartCtx.addItem({
      id: props.id,
      title: props.title,
      stock: props.stock,
      MRP: props.MRP,
      amount: 1,
      price: props.price,
      rating: props.rating,
      flavour: props.flavour,
      weight: props.weight,
      serving: props.serving,
      category: props.category,
      image: props.image,
    });

    toast.success(
      `${props.title} | ${props.flavour} Flavour | ${props.weight} Kg | ${props.serving} Servings`
    );
  };

  return (
    <div className={Styles.card}>
      <Link to={`/product/${props.id}`}>
        <div className={Styles.imgBox}>
          <img
            src={productImage}
            alt="mouse corsair"
            className={Styles.mouse}
          ></img>
        </div>
      </Link>

      <div class={Styles.contentBox}>
        <h3>
          {props.title} | {props.flavour} Flavour | {props.weight} Kg |{" "}
          {props.serving} Servings
        </h3>
        <h2 class={Styles.price}>
          ₹{props.price}{" "}
          <s>
            <small className={Styles.mrp}>₹{props.MRP}</small>
          </s>
        </h2>
        <a onClick={addToBasket} class={Styles.buy}>
          Add to Cart
        </a>
      </div>
    </div>
  );
};

export default Product;
