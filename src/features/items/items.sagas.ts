import { PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { fork, call, put, takeLatest } from "redux-saga/effects";
import { fetchItemsByPage, setItemsByPage } from "./itemsSlice";
import { fetchItemsByPageService } from "./items.services";
import type { Item } from "./items.types";

function* onLoadItemsAsync(action: PayloadAction<number>) {
  try {
    const page = action.payload
    const { data }: AxiosResponse<Item[]> = yield call(fetchItemsByPageService, page);

    yield put(setItemsByPage(data))
  } catch (e) {
    console.log(e);
  }
}

function* onLoadItems() {
  yield takeLatest(fetchItemsByPage.type, onLoadItemsAsync);
}

export const itemsSagas = [fork(onLoadItems)]
