import { useEffect } from 'react'
import { useTypedSelector, useTypedDispatch } from "../../common/hooks";
import { fetchItems } from "./itemsSlice";
import type { Item as ItemType } from "./items.types";
import Item from './Item'

function ItemList() {
  const items = useTypedSelector((state) => state.items.value);
  const { page, sorting, ordering } = useTypedSelector((state) => state.site);
  const dispatch = useTypedDispatch();

  useEffect(() => {
    dispatch(fetchItems({page, sorting, ordering}));
  }, [dispatch, page, sorting, ordering]);
  console.log(items)

  return (
    <>
      <div>
        {items &&
          items.length &&
          items.map((item: ItemType) => <Item key={item.added} item={item} />)}
      </div>

    </>
  );
}

export default ItemList;
