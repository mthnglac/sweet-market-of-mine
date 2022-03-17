import { all, call } from 'redux-saga/effects'
import companiesSaga from '../features/companies/companies.sagas'
import itemsSaga from '../features/items/items.sagas'

export default function* rootSaga() {
  yield all([
    call(companiesSaga),
    call(itemsSaga),
  ])
}
