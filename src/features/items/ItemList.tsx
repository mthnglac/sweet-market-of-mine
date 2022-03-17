import { useEffect } from 'react'
import { useTypedSelector, useTypedDispatch } from "../../common/hooks";
import { fetchItemsByPage } from "./itemsSlice";
import type { Item } from "./items.types";

function ItemList() {
  const dispatch = useTypedDispatch();
  const items = useTypedSelector((state) => state.items.value);

  useEffect(() => {
    dispatch(fetchItemsByPage({ page: 2 }));
  }, [dispatch]);
  console.log(items)

  return (
    <div>
      {items &&
        items.length &&
        items.map((item: Item) => <div key={item.added}>{item.name}</div>)}
    </div>
  );
}

export default ItemList;
