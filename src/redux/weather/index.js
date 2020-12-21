import { createActions, handleActions } from "redux-actions";

export const REQUEST_CURRENT = "REQUEST_CURRENT";
export const REQUEST_CURRENT_SUCCESS = "REQUEST_CURRENT_SUCCESS";

export const { requestCurrent, requestCurrentSuccess } = createActions({
  [REQUEST_CURRENT]: (coords) => ({ coords }),
  [REQUEST_CURRENT_SUCCESS]: ({ current }) => ({ current }),
});

export const REQUEST_LIST = "REQUEST_LIST";
export const REQUEST_LIST_SUCCESS = "REQUEST_LIST_SUCCESS";

export const { requestList, requestListSuccess } = createActions({
  [REQUEST_LIST]: (coords) => ({ coords }),
  [REQUEST_LIST_SUCCESS]: ({ list }) => ({ list }),
});

export const SET_LOADING = "SET_LOADING";

export const { setLoading } = createActions({
  [SET_LOADING]: (status) => status,
});

export const INITIAL_STATE = {
  current: {},
  list: [],
  loading: true,
};

const reducer = handleActions(
  {
    [REQUEST_CURRENT_SUCCESS]: (state, { payload: { current } }) => {
      return {
        ...state,
        current,
        loading: false,
      };
    },
    [REQUEST_LIST_SUCCESS]: (state, { payload: { list } }) => {
      return {
        ...state,
        list,
        loading: false,
      };
    },
    [SET_LOADING]: (state, { payload }) => {
      return {
        ...state,
        loading: payload,
      };
    },
  },
  INITIAL_STATE
);

export default reducer;
