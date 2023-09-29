import React, { useContext, useState } from "react";
import CartContext from "../Context/CartContext";
import Modal from "../UI/Modal";
import Styles from "./Cart.module.css";
import CartItem from "./CartItem";


const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const hasItems = cartCtx.items.length > 0;
  const finalamount = `₹${cartCtx.totalAmount.toFixed(2)}`;
  const [isCheckingout, setisCheckout] = useState(false);

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemaddHandler = (item) => {
    cartCtx.addItem({
      id: item.id,
      name: item.name,
      amount: 1,
      price: item.price,
    });
  };

  

  const orderHandler = () => {
    setisCheckout(true);
  };

  const cartItems = (
    <ul className={Styles["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          title={item.title}
          price={item.price}
          amount={item.amount}
          stock={item.stock}
          MRP={item.MRP}
          rating={item.rating}
          flavour={item.flavour}
          weight={item.weight}
          serving={item.serving}
          category={item.category}
          image={item.image}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemaddHandler.bind(null, item)}



        ></CartItem>
      ))}
    </ul>
  );
  return (
    <Modal onhideCarts={props.onhideCart}>
      {cartItems}
      <div className={Styles.total}>
        <span>Total Amount</span>
        <span>{finalamount}</span>
      </div>

      

      {!isCheckingout && (
        <div className={Styles.actions}>
          <button onClick={props.onhideCart} className={Styles["butoon--alt"]}>
            close
          </button>
          {hasItems && (
            <button onClick={orderHandler} className={Styles.button}>
              order
            </button>
          )}
        </div>
      )}
    </Modal>
  );
};

export default Cart;
