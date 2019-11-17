import { all } from 'redux-saga/effects';
import jobListSagas from './jobList';
import jobDetailSagas from './jobDetail';

export default function* rootSaga() {
  yield all([
    jobListSagas(),
    jobDetailSagas(),
  ]);
}
