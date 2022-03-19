import { PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { fork, call, put, takeLatest } from "redux-saga/effects";
import { getItems, setItems } from "../slices/itemsSlice";
import { fetchItemsService } from "../services/items.services";
import type { Item } from "../types/items.types";

type ItemPayload = {
  page: number;
  sorting: string;
  ordering: string;
};

function* onLoadItemsAsync(action: PayloadAction<ItemPayload>) {
  try {
    const { page, sorting, ordering } = action.payload;
    const { data }: AxiosResponse<Item[]> = yield call(
      fetchItemsService,
      page,
      sorting,
      ordering
    );

    yield put(setItems(data));
  } catch (e) {
    console.log(e);
  }
}

function* onLoadItems() {
  yield takeLatest(getItems.type, onLoadItemsAsync);
}

export const itemsSagas = [fork(onLoadItems)];
