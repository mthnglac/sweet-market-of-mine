import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeLatest } from "redux-saga/effects";
import { fetchItemsByPage, setItemsByPage } from "./itemsSlice";
import { fetchItemsService } from "./items.services";

function* fetchData(action: PayloadAction<number>) {
  try {
    const { data } = yield call(fetchItemsService, action.payload);

    yield put(setItemsByPage(data));
  } catch (e) {
    console.log(e);
  }
}

export default function* watcherSagaItems() {
  yield takeLatest(fetchItemsByPage.type, fetchData);
}
