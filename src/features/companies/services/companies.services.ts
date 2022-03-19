import axios, { AxiosResponse } from "axios";
import type { Company } from "../types/companies.types";

export function fetchCompaniesService(): Promise<AxiosResponse<Company[]>> {
  return axios.get<Company[]>("http://localhost:8080/companies");
}
