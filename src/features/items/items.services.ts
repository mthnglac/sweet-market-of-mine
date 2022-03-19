import axios, { AxiosResponse } from "axios";
import type { Item } from "./items.types";

const LIMIT = 16;

export async function fetchItemsService(
  page: number,
  sorting: string,
  ordering: string
): Promise<AxiosResponse<Item[]>> {
  return axios.get<Item[]>(
    `http://localhost:8080/items?_page=${page}&_sort=${sorting}&_order=${ordering}&_limit=${LIMIT}`
  );
}
