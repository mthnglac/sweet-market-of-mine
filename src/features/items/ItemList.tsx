import { useEffect, useState } from 'react'
import { useTypedSelector, useTypedDispatch } from "../../common/hooks";
import { fetchItemsByPage } from "./itemsSlice";
import type { Item as ItemType } from "./items.types";
import Item from './Item'

function ItemList() {
  const [page, setPage] = useState<number>(1);
  const dispatch = useTypedDispatch();
  const items = useTypedSelector((state) => state.items.value);

  useEffect(() => {
    dispatch(fetchItemsByPage(page));
  }, [dispatch, page]);
  console.log(items)

  const handleIncrement = () => setPage((page) => page + 1)
  const handleDecrement = () => {
    if (page > 1) {
      setPage((page) => page -1)
    }
  }

  return (
    <div>
      {items &&
        items.length &&
        items.map((item: ItemType) => <Item key={item.added} item={item} />)}
      <button onClick={handleDecrement}>prev page</button>
      <button onClick={handleIncrement}>next page</button>
    </div>
  );
}

export default ItemList;
