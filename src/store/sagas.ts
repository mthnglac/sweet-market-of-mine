import { all } from "redux-saga/effects";
import { companiesSagas } from "../features/companies/sagas/companies.sagas";
import { itemsSagas } from "../features/items/sagas/items.sagas";

export default function* rootSaga() {
  yield all([...companiesSagas, ...itemsSagas]);
}
