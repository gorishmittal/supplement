import { useContext, useEffect, useState } from "react";

import CartIcon from "./CartIcon";
import Styles from "./headerCartButton.module.css"
import CartContext from "../Context/CartContext";

const HeaderCartButton = (props) => {
  const [btnIsHighLighted, setBtnIsHighLighted] = useState(false);
  const cartCtx = useContext(CartContext);
  //when the change in cartcontext the headercartbutton component reevaluate and here we can use it for showing the number of itmes added in thr cart
  //here we did not using whole lenght of items but insted of that we take 3 single type of product as 1 single item
 
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const { items } = cartCtx;

  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }

    setBtnIsHighLighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighLighted(false);
    }, 300);

    return()=>{

        clearTimeout(timer);
    };
  }, [items]);
 

  const btnStyles = `${Styles.button} ${btnIsHighLighted ? Styles.bump : ""}`;

  const onButtonClick = () => {
    props.onClick();
  };

  return (
    <button onClick={onButtonClick} className={btnStyles}>
      <span className={Styles.icon}>
        <CartIcon></CartIcon>
      </span>
      <span className={Styles.text}> Your Cart</span>
      <span className={Styles.badge}>{numberOfCartItems}</span>
    </button>
  );
};
export default HeaderCartButton;
