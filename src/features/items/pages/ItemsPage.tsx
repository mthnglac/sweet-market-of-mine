import { useEffect } from "react";
import { useTypedSelector, useTypedDispatch } from "../../../hooks";
import { getAllItems, getFilteredItems } from "../slices/itemsSlice";
import { Sorting } from "../components/sorting/sorting";
import { Brands } from "../components/brands/brands";
import { Tags } from "../components/tags/tags";
import { ItemList } from "../components/item-list/item-list";
import { ItemTypeToggle } from "../components/item-type-toggle/item-type-toggle";
import { Pagination } from "../components/pagination/pagination";

export function ItemsPage() {
  const filteredItems = useTypedSelector((state) => state.items.filteredValue);
  const itemTypeToggle = useTypedSelector((state) => state.items.typeToggle);
  const allItems = useTypedSelector((state) => state.items.allValue);
  const brandSelections = useTypedSelector((state) => state.brands.selections);
  const tagSelections = useTypedSelector((state) => state.tags.selections);
  const { page, sorting, ordering, limit, brands, tags } = useTypedSelector(
    (state) => state.site
  );
  const dispatch = useTypedDispatch();

  useEffect(() => {
    dispatch(
      getFilteredItems({ page, sorting, ordering, limit, brands, tags, itemTypeToggle })
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
    <div>
      <ItemList items={filteredItems} />
      <ItemTypeToggle />
      <Sorting />
      <Brands items={allItems} selections={brandSelections} />
      <Tags items={allItems} selections={tagSelections} />
      <Pagination />
    </div>
  );
}
