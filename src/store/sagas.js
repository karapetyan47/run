import { all } from 'redux-saga/effects';

import userSaga from './user/saga';
import jogsSaga from './jogs/saga';

export default function* rootSaga() {
  yield all([userSaga(), jogsSaga()]);
}
