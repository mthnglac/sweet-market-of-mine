import { useState } from 'react'
import { useTypedSelector, useTypedDispatch } from "../../../hooks";
import { setShowCart } from "../../../features/site/slices/siteSlice";
import { Container, CartButtonContainer, CartButton } from './navbar.styles'

export function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const cartTotal = useTypedSelector((state) => state.cart.total)
  const showCart = useTypedSelector((state) => state.site.showCart)
  const dispatch = useTypedDispatch()

  return (
    <Container>
      <img src="/market.png" alt="app-logo" width={142} />
      <CartButtonContainer onClick={() => setIsCartOpen(!isCartOpen)} style={{ backgroundColor: isCartOpen ? 'red' : 'blue' }}>
        <CartButton onClick={() => dispatch(setShowCart(!showCart))}>
          <img src="/cart-icon.png" width={20} alt="cart-icon" />
          <span>&#x20BA;{cartTotal}</span>
        </CartButton>
      </CartButtonContainer>
    </Container>
  )
};
