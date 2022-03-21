import { useEffect } from "react";
import { useTypedSelector, useTypedDispatch } from "../../../hooks";
import { getAllItems, getFilteredItems } from "../slices/itemsSlice";
import { Sorting } from "../components/sorting/sorting";
import { Brands } from "../components/brands/brands";
import { Tags } from "../components/tags/tags";
import { ItemList } from "../components/item-list/item-list";
import { ItemTypeToggle } from "../components/item-type-toggle/item-type-toggle";
//import { Pagination } from "../components/pagination/pagination";
import { Cart } from "../components/cart/cart";
import {
  MainContainer,
  LeftSideContainer,
  RightSideContainer,
  MiddleContainer,
  //BottomContainer,
} from "../styles/items.styles";

export function ItemsPage() {
  const itemTypeToggle = useTypedSelector((state) => state.items.typeToggle);
  const brandSelections = useTypedSelector((state) => state.brands.selections);
  const tagSelections = useTypedSelector((state) => state.tags.selections);
  const showCart = useTypedSelector((state) => state.site.showCart);
  const { page, sorting, ordering, limit, brands, tags } = useTypedSelector(
    (state) => state.site
  );
  const dispatch = useTypedDispatch();

  useEffect(() => {
    dispatch(
      getFilteredItems({
        page,
        sorting,
        ordering,
        limit,
        brands,
        tags,
        itemTypeToggle,
      })
    );
  }, [
    dispatch,
    page,
    sorting,
    ordering,
    limit,
    brands,
    tags,
    itemTypeToggle,
    brandSelections,
    tagSelections,
  ]);

  useEffect(() => {
    dispatch(getAllItems({}));
  }, [dispatch]);

  return (
    <MainContainer>

      <LeftSideContainer id="sol">
        <Sorting />
        <Brands />
        <Tags />
      </LeftSideContainer>

      <MiddleContainer id="orta">
        <ItemTypeToggle />
        <ItemList />
      </MiddleContainer>

      <RightSideContainer id="sag">
        {showCart && <Cart />}
      </RightSideContainer>

      {/*
      <BottomContainer id="bottom">
        <Pagination />
      </BottomContainer>
      */}

    </MainContainer>
  );
}
