import type { Item } from "../../types/items.types";

export type TagsState = {
  selections: string[];
};

export type TagsProps = {
  items: Item[];
  selections: string[];
};
