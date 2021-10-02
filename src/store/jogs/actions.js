import * as actionTypes from './actionTypes';

export const attemptGetJogs = () => ({ type: actionTypes.ATTEMPT_GET_JOGS });
export const getJogsSuccess = (payload) => ({ type: actionTypes.GET_JOGS_SUCCESS, payload });
export const getJogsFail = (payload) => ({ type: actionTypes.GET_JOGS_FAIL, payload });

export const setFilterVisible = (payload) => ({ type: actionTypes.SET_FILTER_VISIBLE, payload });
export const setDateTo = (payload) => ({ type: actionTypes.SET_DATE_TO, payload });
export const setDateFrom = (payload) => ({ type: actionTypes.SET_DATE_FROM, payload });

export const attemptAddJog = (payload) => ({ type: actionTypes.ATTEMPT_ADD_JOG, payload });
export const addJogSuccess = (payload) => ({ type: actionTypes.ADD_JOG_SUCCESS, payload });
export const addJogFail = (payload) => ({ type: actionTypes, payload });
