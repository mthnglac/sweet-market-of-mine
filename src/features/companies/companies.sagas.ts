import { AxiosResponse } from "axios";
import { fork, call, put, takeLatest } from "redux-saga/effects";
import { getCompanies, setCompanies } from "./companiesSlice";
import { fetchCompaniesService } from "./companies.services";
import type { Company } from './companies.types'

function* onLoadCompaniesAsync() {
  try {
    const { data }: AxiosResponse<Company[]> = yield call(fetchCompaniesService);

    yield put(setCompanies(data));
  } catch (e) {
    console.log(e);
  }
}

function* onLoadCompanies() {
  yield takeLatest(getCompanies.type, onLoadCompaniesAsync);
}

export const companiesSagas = [fork(onLoadCompanies)]
