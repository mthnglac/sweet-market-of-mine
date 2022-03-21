import axios, { AxiosResponse } from "axios";
import type { Item, ItemsFetchPayload } from "../types/items.types";

const API_URL = process.env.REACT_APP_API_URL

export async function fetchItemsService(payload: ItemsFetchPayload): Promise<AxiosResponse<Item[]>> {
  const { page, sorting, ordering, limit, brands, tags, itemTypeToggle } = payload
  const requestURL = new URL(`${API_URL}/items`)

  if (page) requestURL.searchParams.append("_page", page.toString());
  if (sorting) requestURL.searchParams.append("_sort", sorting);
  if (ordering) requestURL.searchParams.append("_order", ordering);
  if (limit) requestURL.searchParams.append("_limit", limit.toString());
  if (brands?.length) {
    brands.forEach((brand: string) => requestURL.searchParams.append("manufacturer", brand))
  }
  if (tags?.length) {
    tags.forEach((tag: string) => requestURL.searchParams.append("tags_like", tag))
  }
  if (itemTypeToggle) requestURL.searchParams.append("itemType", itemTypeToggle.toString());

  return axios.get<Item[]>(requestURL.toString())
}
