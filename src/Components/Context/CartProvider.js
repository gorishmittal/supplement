import React, { useReducer } from "react";
import CartContext from "./CartContext";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "Add") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    //below we are chaking the id of item added have the same id as on of item present in the cart here item.id has all ids of items present in the cart and action.item.id is the id which item is added currently
    const exisingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    //below we get the item if we get items match and from that index we get the item name
    const exisingCartItem = state.items[exisingCartItemIndex];
    let updatedItems;

    if (exisingCartItem) {
      //here updatedItem contains the item which is prsent in the cart and here we increasing the amount of that item
      const updatedItem = {
        ...exisingCartItem,
        amount: exisingCartItem.amount + action.item.amount,
      };

      updatedItems = [...state.items];

      // updateitems contain all the items in the cart here we replacing the item in which we increased its amount here
      updatedItems[exisingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "Remove") {
    const exisingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    const existingItem = state.items[exisingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;

    let updatedItems;

    if (existingItem.amount === 1) {
      //here the item wich have same id will not copy in thr updated item
      updatedItems = state.items.filter(item => item.id !== action.id);
    } else {
      //here updatedItem contains the item which is prsent in the cart and here we dicreasing the amount of that item
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount - 1
      };

      updatedItems = [...state.items];

      // updateitems contain all the items in the cart here we replacing the item in which we increased its amount here
      updatedItems[exisingCartItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispathCratAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispathCratAction({ type: "Add", item: item });
  };

  const removeItemCartHandler = (id) => {
    
    dispathCratAction({ type: "Remove", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
