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
  filteredValue: Item[];
};

export type ItemsFetchPayload = {
  page?: number;
  sorting?: string;
  ordering?: string;
  limit?: number;
  brands?: string[];
};
