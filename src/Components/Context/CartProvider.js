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

  
    const exisingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    
    const exisingCartItem = state.items[exisingCartItemIndex];
    let updatedItems;

    if (exisingCartItem) {
      
      const updatedItem = {
        ...exisingCartItem,
        amount: exisingCartItem.amount + action.item.amount,
      };

      updatedItems = [...state.items];

     
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
   
      updatedItems = state.items.filter(item => item.id !== action.id);
    } else {
      
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount - 1
      };

      updatedItems = [...state.items];

      
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
