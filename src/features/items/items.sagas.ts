import { PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { fork, call, put, takeLatest } from "redux-saga/effects";
import { fetchItems, setItems } from "./itemsSlice";
import { fetchItemsService } from "./items.services";
import type { Item } from "./items.types";

type ItemPayload = {
  page: number,
  sorting: string,
  ordering: string,
}

function* onLoadItemsAsync(action: PayloadAction<ItemPayload>) {
  try {
    const { page, sorting, ordering } = action.payload
    const { data }: AxiosResponse<Item[]> = yield call(fetchItemsService, page, sorting, ordering);

    yield put(setItems(data))
  } catch (e) {
    console.log(e);
  }
}

function* onLoadItems() {
  yield takeLatest(fetchItems.type, onLoadItemsAsync);
}

export const itemsSagas = [fork(onLoadItems)]
