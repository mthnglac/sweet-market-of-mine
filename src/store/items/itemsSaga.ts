import { call, put, takeLatest } from "redux-saga/effects";
import { getItems, setItems } from "./itemsSlice";
import { fetchItemsService } from "../../service";

function* fetchData() {
  try {
    const { data } = yield call(fetchItemsService);

    yield put(setItems(data));
  } catch (e) {
    console.log(e);
  }
}

export default function* watcherSagaItems() {
  yield takeLatest(getItems.type, fetchData);
}
