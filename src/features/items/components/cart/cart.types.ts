import type { Item } from "../../types/items.types";

export type Cart = {
  items: CartItem[];
  total: number;
};

export type CartState = {
  items: CartItem[];
  total: number;
};

export type CartItem = {
  item: Item;
  count: number;
};
