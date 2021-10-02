import * as actionTypes from './actionTypes';

const initialState = {
  user: null,
  userLoading: false,
  userError: null,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.ATTEMPT_LOGIN:
      return {
        ...state,
        userLoading: true,
      };

    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        user: payload,
        userError: null,
        userLoading: false,
      };

    case actionTypes.LOGIN_FAIL:
      return {
        ...state,
        user: null,
        userError: payload,
        userLoading: false,
      };

    default:
      return state;
  }
};

export default reducer;
