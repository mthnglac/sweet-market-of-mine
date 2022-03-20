import { useTypedSelector } from "../../../../hooks";
import type { Item } from "../../types/items.types";

export function ItemList() {
  const items = useTypedSelector((state) => state.items.filteredValue);

  return (
    <div>
      {items &&
        items.length &&
        items.map((item: Item) => <div key={item.added}>{item.name}</div>)}
    </div>
  );
}
