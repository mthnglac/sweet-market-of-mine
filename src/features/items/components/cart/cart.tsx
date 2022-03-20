import { useEffect } from "react";
import { useTypedSelector, useTypedDispatch } from "../../../../hooks";
import {
  popItemFromCart,
  incrementCartItemCount,
  decrementCartItemCount,
  reCalculateCartTotal,
} from "./cartSlice";
import type { CartItem } from "./cart.types";

export function Cart() {
  const cartItems = useTypedSelector((state) => state.cart.items);
  const cartTotal = useTypedSelector((state) => state.cart.total);
  const dispatch = useTypedDispatch();

  useEffect(() => {
    dispatch(reCalculateCartTotal());
  }, [dispatch, cartItems]);

  const handleIncrementCartItemCount = (cartItem: CartItem) => () => {
    dispatch(incrementCartItemCount(cartItem));
  };
  const handleDecrementCartItemCount = (cartItem: CartItem) => () => {
    if (cartItem.count === 1) {
      dispatch(popItemFromCart(cartItem));
    } else {
      dispatch(decrementCartItemCount(cartItem));
    }
  };

  return (
    <div style={{ display: "flex", border: "5px solid red" }}>
      <div>
        <h2>Cart</h2>
        <span>{cartTotal}</span>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          border: "1px solid yellow",
        }}
      >
        <p>Items</p>
        {cartItems &&
          !!cartItems.length &&
          cartItems.map((cartItem: CartItem, index: number) => (
            <div key={index}>
              <p>{cartItem.item.name}</p>
              <p>{cartItem.item.price}</p>
              <button onClick={handleDecrementCartItemCount(cartItem)}>
                -
              </button>
              <span>{cartItem.count}</span>
              <button onClick={handleIncrementCartItemCount(cartItem)}>
                +
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}
