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
        {cartItems?.length ? (
          cartItems.map((cartItem: CartItem, index: number) => (
            <div className="cart-item" key={index}>
              <div className="cart-item-details">
                <p>{cartItem.item.name}</p>
                <p className="cart-item-price">&#x20BA;{cartItem.item.price}</p>
              </div>
              <div className="inc-dec-container">
                <div
                  className="decrease-cart-item"
                  onClick={handleDecrementCartItemCount(cartItem)}
                >
                  -
                </div>
                <div className="cart-item-count">{cartItem.count}</div>
                <div
                  className="increase-cart-item"
                  onClick={handleIncrementCartItemCount(cartItem)}
                >
                  +
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="no-content">Add items to cart.</div>
        )}
        <div className="cart-total">&#x20BA;{cartTotal}</div>
      </Card>
    </Container>
  );
}
