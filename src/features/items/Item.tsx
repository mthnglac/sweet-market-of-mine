import type { Item as ItemType } from "./items.types";

type Props = {
  item: ItemType,
}

function Item({ item }: Props) {
  return (
    <div>{item.name}</div>
  );
}

export default Item;
