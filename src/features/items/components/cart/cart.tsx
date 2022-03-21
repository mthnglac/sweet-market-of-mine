import { useEffect } from "react";
import { useTypedSelector, useTypedDispatch } from "../../../../common/hooks";
import {
  popItemFromCart,
  incrementCartItemCount,
  decrementCartItemCount,
  reCalculateCartTotal,
} from "./cartSlice";
import type { CartItem } from "./cart.types";
import { Container } from "./cart.styles";
import { Card } from "../../../../common/components";

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
    <Container>
      <Card>
        <p>Items</p>
        {!!cartItems?.length &&
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
        <span>{cartTotal}</span>
      </Card>
    </Container>
  );
}
