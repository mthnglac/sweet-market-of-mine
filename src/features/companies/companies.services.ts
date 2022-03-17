import axios, { AxiosResponse } from "axios";
import type { Company } from "./companies.types";

export function fetchCompaniesService(): Promise<AxiosResponse<Company[]>> {
  return axios.get<Company[]>("http://localhost:8080/companies");
}
