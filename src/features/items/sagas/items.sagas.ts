import { fork, call, put, takeLatest } from "redux-saga/effects";
import {
  getAllItems,
  getFilteredItems,
  setAllItems,
  setAllItemsCount,
  setFilteredItems,
  setFilteredItemsCount,
} from "../slices/itemsSlice";
import { fetchItemsService } from "../services/items.services";

function* onLoadAllItemsAsync(action: any) {
  try {
    const { data, headers } = yield call(fetchItemsService, action.payload);
    const totalItemCount = headers["x-total-count"];

    yield put(setAllItems(data));
    yield put(setAllItemsCount(totalItemCount));
  } catch (e) {
    console.log(e);
  }
}

function* onLoadAllItems() {
  yield takeLatest(getAllItems.type, onLoadAllItemsAsync);
}

function* onLoadFilteredItemsAsync(action: any) {
  try {
    const { data, headers } = yield call(fetchItemsService, action.payload);
    const totalItemCount = headers["x-total-count"];

    yield put(setFilteredItems(data));
    yield put(setFilteredItemsCount(totalItemCount));
  } catch (e) {
    console.log(e);
  }
}

function* onLoadFilteredItems() {
  yield takeLatest(getFilteredItems.type, onLoadFilteredItemsAsync);
}

export const itemsSagas = [fork(onLoadAllItems), fork(onLoadFilteredItems)];
