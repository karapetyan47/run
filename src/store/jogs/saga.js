import { push } from 'connected-react-router';
import { call, put, takeEvery, all, fork } from 'redux-saga/effects';
import JogsApi from '../../api/jogsApi';
import routes from '../../routes/routesCode';
import { addJogSuccess, getJogsFail, getJogsSuccess } from './actions';
import { ATTEMPT_ADD_JOG, ATTEMPT_GET_JOGS } from './actionTypes';

const jogsApi = new JogsApi();

function* watchJogs(params) {
  yield takeEvery(ATTEMPT_GET_JOGS, jogs);
}

function* watchAddJogs(params) {
  yield takeEvery(ATTEMPT_ADD_JOG, addJog);
}

function* jogs() {
  try {
    const res = yield call(jogsApi.getJogs);
    yield put(getJogsSuccess(res.data.response.jogs));
  } catch (error) {
    yield put(getJogsFail(error.error.error_message));
  }
}

function* addJog({ payload }) {
  try {
    const res = yield call(jogsApi.addJog, payload);
    yield put(addJogSuccess());
    yield put(push(routes.jogs.path));
  } catch (error) {
    yield put(getJogsFail(error.error.error_message));
  }
}

export default function* rootSaga() {
  yield all([fork(watchJogs), fork(watchAddJogs)]);
}
