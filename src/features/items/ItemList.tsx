import { useEffect, useState } from 'react'
import { useTypedSelector, useTypedDispatch } from "../../common/hooks";
import { fetchItemsByPage } from "./itemsSlice";
import type { Item as ItemType } from "./items.types";
import Item from './Item'

function ItemList() {
  const [page, setPage] = useState<number>(1);
  const [sorting, setSorting] = useState<string>("price");
  const [ordering, setOrdering] = useState<string>("asc");
  const dispatch = useTypedDispatch();
  const items = useTypedSelector((state) => state.items.value);

  useEffect(() => {
    dispatch(fetchItemsByPage({page, sorting, ordering}));
  }, [dispatch, page, sorting, ordering]);
  console.log(items)

  const handleIncrement = () => setPage((page) => page + 1)
  const handleDecrement = () => {
    if (page > 1) {
      setPage((page) => page -1)
    }
  }
  const handleSortingPriceLowToHigh = () => {
    setSorting("price")
    setOrdering("asc")
  }
  const handleSortingPriceHighToLow = () => {
    setPage(1)
    setSorting("price")
    setOrdering("desc")
  }
  const handleSortingNewToOld = () => {
    setPage(1)
    setSorting("added")
    setOrdering("desc")
  }
  const handleSortingOldToNew = () => {
    setPage(1)
    setSorting("added")
    setOrdering("asc")
  }

  return (
    <>
      <div>
        {items &&
          items.length &&
          items.map((item: ItemType) => <Item key={item.added} item={item} />)}
      </div>

      <div style={{display: 'flex', alignItems: 'center'}}>
        <h2>Sorting</h2>
        <button onClick={handleSortingPriceLowToHigh}>Price low to high</button>
        <button onClick={handleSortingPriceHighToLow}>Price high to low</button>
        <button onClick={handleSortingNewToOld}>New to old</button>
        <button onClick={handleSortingOldToNew}>Old to new</button>
      </div>

      <div style={{display: 'flex', alignItems: 'center'}}>
        <h2>Pagination</h2>
        <button onClick={handleDecrement}>prev page</button>
        <button onClick={handleIncrement}>next page</button>
      </div>
    </>
  );
}

export default ItemList;
