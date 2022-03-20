import { useTypedSelector, useTypedDispatch } from "../../../../hooks";
import { addItemToCart, incrementCartItemCount } from "../cart/cartSlice";
import type { Item } from "../../types/items.types";
import type { CartItem } from "../cart/cart.types";

export function ItemList() {
  const items = useTypedSelector((state) => state.items.filteredValue);
  const cartItems = useTypedSelector((state) => state.cart.items);
  const dispatch = useTypedDispatch();

  const handleAddItemToCart =
    ({ item, count }: { item: Item; count: number }) =>
    () => {
      const foundCartItemIndex = cartItems.findIndex(
        (cartItem: CartItem) => cartItem.item.name === item.name
      );

      if (foundCartItemIndex === -1) {
        dispatch(addItemToCart({ item, count }));
      } else {
        dispatch(incrementCartItemCount(cartItems[foundCartItemIndex]));
      }
    };

  return (
    <div>
      {items &&
        !!items.length &&
        items.map((item: Item, index: number) => (
          <div key={index}>
            <div key={index}>{item.name}</div>
            <button onClick={handleAddItemToCart({ item, count: 1 })}>
              Add To Cart
            </button>
          </div>
        ))}
    </div>
  );
}
