import { all, call } from 'redux-saga/effects'
import companiesSaga from './companies/companiesSaga'
import itemsSaga from './items/itemsSaga'

export default function* rootSaga() {
  yield all([
    call(companiesSaga),
    call(itemsSaga),
  ])
}
