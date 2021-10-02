import { call, put, takeEvery, all, fork } from 'redux-saga/effects';
import UserApi from '../../api/userApi';
import { loginFail, loginSuccess } from './actions';

import { ATTEMPT_LOGIN } from './actionTypes';

const userApi = new UserApi();

function* watchLogin() {
  yield takeEvery(ATTEMPT_LOGIN, login);
}

function* login() {
  try {
    const tokenRes = yield call(userApi.letMeIn);
    localStorage.token = tokenRes.data.response.access_token;
    const res = yield call(userApi.getUser);

    yield put(loginSuccess(res.data.response));
  } catch (error) {
    yield put(loginFail(error.error.error_message));
  }
}

export default function* rootSaga() {
  yield all([fork(watchLogin)]);
}
