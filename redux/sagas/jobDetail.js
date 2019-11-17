import { all, put, takeLatest, fork } from 'redux-saga/effects';
import es6promise from 'es6-promise';
import 'isomorphic-unfetch';

import { actionTypes, loadDataFailure, loadDataSuccess } from '@/redux/actions/jobDetail';

es6promise.polyfill();

function* loadDataSaga ({ params: { jobId } }) {
  try {
    const result = yield fetch(`${process.env.API_ENDPOINT}/jobs/${jobId}`);
    const data = yield result.json();
    yield put(loadDataSuccess(data));
  } catch (error) {
    yield put(loadDataFailure(error));
  }
}

export function* fetchData() {
  yield takeLatest(actionTypes.LOAD_DETAIL_DATA, loadDataSaga);
}

export default function * rootSaga () {
  yield all([
    fork(fetchData),
  ]);
}
