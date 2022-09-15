import { fetchUsers } from "../api/api";

export const ACTION_TYPE = {
  SEARCH_SUCCESS: "SEARCH_SUCCESS",
  SEARCH_ERROR: "SEARCH_ERROR",
  CLEAR_DATA: "CLEAR_DATA",
  SET_LOADING: "SET_LOADING",
};

export function searchSuccess(payload) {
  return {
    type: ACTION_TYPE.SEARCH_SUCCESS,
    payload,
  };
}

export function searchError(payload) {
  return {
    type: ACTION_TYPE.SEARCH_ERROR,
    payload,
  };
}

export function setLoading(payload) {
  return {
    type: ACTION_TYPE.SET_LOADING,
    payload,
  };
}

export function clearData() {
  return {
    type: ACTION_TYPE.CLEAR_DATA,
    payload: [],
  };
}

export function fetchData(query) {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const users = await fetchUsers(query);
      dispatch(searchSuccess(users));
    } catch (error) {
      dispatch(searchError(error.message));
    }
  };
}
