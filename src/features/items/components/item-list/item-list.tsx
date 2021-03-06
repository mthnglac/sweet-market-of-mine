import { useTypedSelector, useTypedDispatch } from "../../../../common/hooks";
import {
  addItemToCart,
  incrementCartItemCount,
  reCalculateCartTotal,
} from "../cart/cartSlice";
import { setShowCart } from "../../../site/slices/siteSlice";
import type { Item } from "../../types/items.types";
import type { CartItem } from "../cart/cart.types";
import { Container, ItemContainer } from "./item-list.styles";
import { Button, Loading } from "../../../../common/components";

export function ItemList() {
  const items = useTypedSelector((state) => state.items.filteredValue);
  const itemsLoading = useTypedSelector(
    (state) => state.items.isFilteredLoading
  );
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
        dispatch(reCalculateCartTotal());
        dispatch(setShowCart(true));
      } else {
        dispatch(incrementCartItemCount(cartItems[foundCartItemIndex]));
        dispatch(reCalculateCartTotal());
      }
    };

  return (
    <Container itemsLoading={itemsLoading}>
      {itemsLoading ? (
        <Loading />
      ) : (
        items?.length &&
        items.map((item: Item, index: number) => (
          <ItemContainer key={index}>
            <div className="image">
              <img className="square-image" src="/cat.jpeg" alt="item" />
            </div>
            <div className="content">
              <p className="item-price">
                <span className="currency">&#x20BA;</span>
                {item.price}
              </p>
              <p className="item-name">{item.name}</p>
              <Button
                active={true}
                onClick={handleAddItemToCart({ item, count: 1 })}
                text="Add To Cart"
                width={"100%"}
                height={30}
              />
            </div>
          </ItemContainer>
        ))
      )}
    </Container>
  );
}
