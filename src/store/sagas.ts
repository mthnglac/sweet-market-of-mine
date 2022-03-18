import { all } from 'redux-saga/effects'
import { companiesSagas } from '../features/companies/companies.sagas'
import { itemsSagas } from '../features/items/items.sagas'

export default function* rootSaga() {
  yield all([
    ...companiesSagas,
    ...itemsSagas,
  ])
}
