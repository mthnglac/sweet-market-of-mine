import { fork, call, put, takeLatest } from "redux-saga/effects";
import { getAllItems, getFilteredItems, setAllItems, setFilteredItems } from "../slices/itemsSlice";
import { fetchItemsService } from "../services/items.services";

function* onLoadAllItemsAsync(action: any) {
  try {
    const { data } = yield call(fetchItemsService, action.payload);

    yield put(setAllItems(data));
  } catch (e) {
    console.log(e);
  }
}

function* onLoadAllItems() {
  yield takeLatest(getAllItems.type, onLoadAllItemsAsync);
}

function* onLoadFilteredItemsAsync(action: any) {
  try {
    const { data } = yield call(fetchItemsService, action.payload);

    yield put(setFilteredItems(data));
  } catch (e) {
    console.log(e);
  }
}

function* onLoadFilteredItems() {
  yield takeLatest(getFilteredItems.type, onLoadFilteredItemsAsync);
}

export const itemsSagas = [
  fork(onLoadAllItems),
  fork(onLoadFilteredItems),
];
