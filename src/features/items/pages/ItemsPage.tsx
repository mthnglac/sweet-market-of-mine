import { useEffect } from "react";
import { useTypedSelector, useTypedDispatch } from "../../../hooks";
import { getAllItems, getFilteredItems } from "../slices/itemsSlice";
import type { Item } from "../types/items.types";
import { Sorting } from "../components/sorting/sorting";
import { Brands } from "../components/brands/brands";
import { Tags } from "../components/tags/tags";
import { Pagination } from "../components/pagination/pagination";

export function ItemsPage() {
  const filteredItems = useTypedSelector((state) => state.items.filteredValue);
  const allItems = useTypedSelector((state) => state.items.allValue);
  const brandSelections = useTypedSelector((state) => state.brands.selections);
  const tagSelections = useTypedSelector((state) => state.tags.selections);
  const { page, sorting, ordering, limit, brands, tags } = useTypedSelector(
    (state) => state.site
  );
  const dispatch = useTypedDispatch();

  useEffect(() => {
    dispatch(
      getFilteredItems({ page, sorting, ordering, limit, brands, tags })
    );
  }, [
    dispatch,
    page,
    sorting,
    ordering,
    limit,
    brands,
    tags,
    brandSelections,
    tagSelections,
  ]);

  useEffect(() => {
    dispatch(getAllItems({}));
  }, [dispatch]);

  return (
    <div>
      <div>
        {filteredItems &&
          filteredItems.length &&
          filteredItems.map((item: Item) => (
            <div key={item.added}>{item.name}</div>
          ))}
      </div>
      <Sorting />
      <Brands items={allItems} selections={brandSelections} />
      <Pagination />
      <Tags items={filteredItems} selections={tagSelections} />
    </div>
  );
}
