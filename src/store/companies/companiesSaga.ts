import { call, put, takeLatest } from "redux-saga/effects";
import { getCompanies, setCompanies } from "./companiesSlice";
import { fetchCompaniesService } from "../../service";

function* fetchData() {
  try {
    const { data } = yield call(fetchCompaniesService);

    yield put(setCompanies(data));
  } catch (e) {
    console.log(e);
  }
}

export default function* watcherSagaCompanies() {
  yield takeLatest(getCompanies.type, fetchData);
}
