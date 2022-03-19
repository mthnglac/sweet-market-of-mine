import type { Item } from "../../types/items.types";

export type Brands = {
  selections: string[];
};

export type BrandsProps = {
  items: Item[];
  selections: string[];
};
