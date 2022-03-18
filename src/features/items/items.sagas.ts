import { PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { fork, call, put, takeLatest } from "redux-saga/effects";
import { fetchItemsByPage, setItemsByPage } from "./itemsSlice";
import { fetchItemsByPageService } from "./items.services";
import type { Item } from "./items.types";

type ItemPayload = {
  page: number,
  sorting: string,
  ordering: string,
}

function* onLoadItemsAsync(action: PayloadAction<ItemPayload>) {
  try {
    const { page, sorting, ordering } = action.payload
    const { data }: AxiosResponse<Item[]> = yield call(fetchItemsByPageService, page, sorting, ordering);

    yield put(setItemsByPage(data))
  } catch (e) {
    console.log(e);
  }
}

function* onLoadItems() {
  yield takeLatest(fetchItemsByPage.type, onLoadItemsAsync);
}

export const itemsSagas = [fork(onLoadItems)]
