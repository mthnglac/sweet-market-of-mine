import axios, { AxiosResponse } from "axios";
import type { Item } from "./items.types";

const LIMIT = 16

export function fetchItemsService({ page }: any ): Promise<AxiosResponse<Item[]>> {
  return axios.get<Item[]>(`http://localhost:8080/items?_page=${page}&_limit=${LIMIT}`);
}
