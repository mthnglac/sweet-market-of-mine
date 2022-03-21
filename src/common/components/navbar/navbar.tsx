import { useTypedSelector, useTypedDispatch, useEventListener } from "../../hooks";
import { setShowCart } from "../../../features/site/slices/siteSlice";
import { Container, CartButtonContainer, CartButton } from "./navbar.styles";

export function Navbar() {
  const cartTotal = useTypedSelector((state) => state.cart.total);
  const showCart = useTypedSelector((state) => state.site.showCart);
  const dispatch = useTypedDispatch();

  useEventListener("keydown", (e: any) => {
    e.key === "Escape" && dispatch(setShowCart(false))
  })

  return (
    <Container>
      <img src="/market.png" alt="app-logo" width={142} />
      <CartButtonContainer
        onClick={() => dispatch(setShowCart(!showCart))}
        id="se"
      >
        <CartButton>
          <img src="/cart-icon.png" width={20} alt="cart-icon" />
          <span>&#x20BA;{cartTotal}</span>
        </CartButton>
      </CartButtonContainer>
    </Container>
  );
}
