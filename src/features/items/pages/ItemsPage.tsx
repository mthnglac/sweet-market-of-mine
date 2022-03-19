import { useEffect } from "react";
import { useTypedSelector, useTypedDispatch } from "../../../hooks";
import { getAllItems, getFilteredItems } from "../slices/itemsSlice";
import type { Item } from "../types/items.types";
import { Sorting } from "../components/sorting/sorting";
import { Brands } from "../components/brands/brands";
import { Pagination } from "../components/pagination/pagination";

export function ItemsPage() {
  const filteredItems = useTypedSelector((state) => state.items.filteredValue);
  const allItems = useTypedSelector((state) => state.items.allValue);
  const selections = useTypedSelector((state) => state.brands.selections);
  const { page, sorting, ordering, limit, brands } = useTypedSelector(
    (state) => state.site
  );
  const dispatch = useTypedDispatch();

  useEffect(() => {
    dispatch(getFilteredItems({ page, sorting, ordering, limit, brands }));
  }, [dispatch, page, sorting, ordering, limit, brands, selections]);

  useEffect(() => {
    dispatch(getAllItems({}));
  }, [dispatch]);

  return (
    <div>
      <div>
        {filteredItems &&
          filteredItems.length &&
          filteredItems.map((item: Item) => <div key={item.added}>{item.name}</div>)}
      </div>
      <Sorting />
      <Brands items={allItems} selections={selections} />
      <Pagination />
    </div>
  );
}
