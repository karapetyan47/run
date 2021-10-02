import * as actionTypes from './actionTypes';

export const attemptLogin = () => ({ type: actionTypes.ATTEMPT_LOGIN });
export const loginSuccess = (payload) => ({ type: actionTypes.LOGIN_SUCCESS, payload });
export const loginFail = (payload) => ({ type: actionTypes.LOGIN_FAIL, payload });
