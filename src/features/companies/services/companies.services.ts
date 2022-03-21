import axios, { AxiosResponse } from "axios";
import type { Company } from "../types/companies.types";

const API_URL = process.env.REACT_APP_API_URL

export function fetchCompaniesService(): Promise<AxiosResponse<Company[]>> {
  return axios.get<Company[]>(`${API_URL}/companies`);
}
