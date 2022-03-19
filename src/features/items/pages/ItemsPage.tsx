import { useEffect } from "react";
import { useTypedSelector, useTypedDispatch } from "../../../hooks";
import { getItems } from "../slices/itemsSlice";
import type { Item } from "../types/items.types";
import { Sorting } from "../components/sorting/sorting";
import { Brands } from "../components/brands/brands"
import { Pagination } from "../components/pagination/pagination";

export function ItemsPage() {
  const items = useTypedSelector((state) => state.items.value);
  const { page, sorting, ordering } = useTypedSelector((state) => state.site);
  const dispatch = useTypedDispatch();

  useEffect(() => {
    dispatch(getItems({ page, sorting, ordering }));
  }, [dispatch, page, sorting, ordering]);

  return (
    <div>
      <div>
        {items &&
          items.length &&
          items.map((item: Item) => <div key={item.added}>{item.name}</div>)}
      </div>
      <Sorting />
      <Brands />
      <Pagination />
    </div>
  );
}
