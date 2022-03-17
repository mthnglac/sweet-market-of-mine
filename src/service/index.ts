import axios, { AxiosResponse } from "axios";
import type { Company, Item } from "../types";

export function fetchCompaniesService(): Promise<AxiosResponse<Company[]>> {
  return axios.get<Company[]>("http://localhost:8080/companies");
}

export function fetchItemsService(): Promise<AxiosResponse<Item[]>> {
  return axios.get<Item[]>("http://localhost:8080/items");
}
