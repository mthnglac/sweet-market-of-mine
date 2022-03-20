import type { Item } from "../../types/items.types";

type ItemListProps = {
  items: Item[];
};

export function ItemList({ items }: ItemListProps) {
  return (
    <div>
      {items &&
        items.length &&
        items.map((item: Item) => <div key={item.added}>{item.name}</div>)}
    </div>
  );
}
