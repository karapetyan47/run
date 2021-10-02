import jogsByDate from '../helpers/jogsByDate';
import * as actionTypes from './actionTypes';

const initialState = {
  jogs: [],
  filteredJogs: [],
  jogsLoading: true,
  jogsError: null,
  filterVisible: false,
  dateFrom: null,
  dateTo: null,
  addJogLoading: false,
  addJogError: null,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.ATTEMPT_GET_JOGS:
      return {
        ...state,
        jogsLoading: true,
        jogsError: null,
        jogs: [],
        filteredJogs: [],
      };
    case actionTypes.GET_JOGS_SUCCESS:
      return {
        ...state,
        jogsLoading: false,
        jogsError: null,
        jogs: payload,
        filteredJogs: payload,
      };
    case actionTypes.GET_JOGS_FAIL:
      return {
        ...state,
        jogsLoading: false,
        jogsError: payload,
        jogs: [],
        filteredJogs: [],
      };
    case actionTypes.SET_DATE_TO:
      return {
        ...state,
        filteredJogs: jogsByDate(state.jogs, state.dateFrom, payload),
        dateTo: payload,
      };
    case actionTypes.SET_DATE_FROM:
      return {
        ...state,
        filteredJogs: jogsByDate(state.jogs, payload, state.dateTo),
        dateFrom: payload,
      };
    case actionTypes.SET_FILTER_VISIBLE:
      return {
        ...state,
        filteredJogs: state.jogs,
        dateTo: null,
        dateFrom: null,
        filterVisible: payload,
      };
    case actionTypes.ATTEMPT_ADD_JOG:
      return {
        ...state,
        addJogLoading: true,
        addJogError: null,
      };
    case actionTypes.ADD_JOG_SUCCESS:
      return {
        ...state,
        addJogLoading: false,
        addJogError: null,
      };
    case actionTypes.ADD_JOG_FAIL:
      return {
        ...state,
        addJogLoading: false,
        addJogError: payload,
      };
    default:
      return state;
  }
};

export default reducer;
