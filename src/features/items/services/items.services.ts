import axios, { AxiosResponse } from "axios";
import type { Item, ItemsFetchPayload } from "../types/items.types";

const API_URL = "http://localhost:8080/items";

export async function fetchItemsService(payload: ItemsFetchPayload): Promise<AxiosResponse<Item[]>> {
  const { page, sorting, ordering, limit, brands } = payload
  const requestURL = new URL(API_URL)

  if (page) requestURL.searchParams.append("_page", page.toString());
  if (sorting) requestURL.searchParams.append("_sort", sorting);
  if (ordering) requestURL.searchParams.append("_ordering", ordering);
  if (limit) requestURL.searchParams.append("_limit", limit.toString());
  if (brands && brands.length) {
    brands.forEach((brand: string) => requestURL.searchParams.append("manufacturer", brand))
  }

  return axios.get(requestURL.toString())
}
