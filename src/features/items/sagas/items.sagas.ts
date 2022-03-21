import { fork, call, put, takeLatest } from "redux-saga/effects";
import {
  getAllItems,
  getFilteredItems,
  setAllItems,
  setAllItemsCount,
  setFilteredItems,
  setFilteredItemsCount,
  setIsAllLoading,
  setIsFilteredLoading,
} from "../slices/itemsSlice";
import { fetchItemsService } from "../services/items.services";

function* onLoadAllItemsAsync(action: any) {
  yield put(setIsAllLoading(true))

  try {
    const { data } = yield call(fetchItemsService, action.payload);

    yield put(setAllItems(data));
    yield put(setAllItemsCount(data.length));
  } catch (e) {
    console.log(e);
  }

  yield put(setIsAllLoading(false))
}

function* onLoadAllItems() {
  yield takeLatest(getAllItems.type, onLoadAllItemsAsync);
}

function* onLoadFilteredItemsAsync(action: any) {
  yield put(setIsFilteredLoading(true));

  try {
    const { data, headers } = yield call(fetchItemsService, action.payload);
    const totalItemCount = headers["x-total-count"];

    yield put(setFilteredItems(data));
    yield put(setFilteredItemsCount(totalItemCount));
  } catch (e) {
    console.log(e);
  }

  yield put(setIsFilteredLoading(false));
}

function* onLoadFilteredItems() {
  yield takeLatest(getFilteredItems.type, onLoadFilteredItemsAsync);
}

export const itemsSagas = [fork(onLoadAllItems), fork(onLoadFilteredItems)];
