import type { Item } from "../../types/items.types";

export type BrandsState = {
  selections: string[];
};

export type BrandsProps = {
  items: Item[];
  selections: string[];
};
