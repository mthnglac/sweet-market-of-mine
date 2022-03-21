export type Item = {
  tags: string[];
  price: number;
  name: string;
  description: string;
  slug: string;
  added: number;
  manufacturer: string;
  itemType: string;
};

export type ItemState = {
  allValue: Item[];
  allValueTotalCount: number;
  filteredValue: Item[];
  filteredValueTotalCount: number;
  typeToggle: "mug" | "shirt";
  isLoading: boolean;
};

export type ItemsFetchPayload = {
  page?: number;
  sorting?: string;
  ordering?: string;
  limit?: number;
  brands?: string[];
  tags?: string[];
  itemTypeToggle?: "mug" | "shirt";
};
