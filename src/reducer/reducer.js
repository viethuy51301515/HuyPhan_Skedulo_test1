import { ACTION_TYPE } from "../action/action";

const initialState = {
  users: [],
  query: "",
  isLoading: false,
  error: "",
};

export default function UserReducer(state = initialState, action) {
  if (action.payload === undefined) {
    return state;
  }
  switch (action.type) {
    case ACTION_TYPE.SEARCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        users: action.payload,
      };
    case ACTION_TYPE.SEARCH_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case ACTION_TYPE.CLEAR_DATA:
      return {
        ...state,
        isLoading: false,
        users: [],
      };
    case ACTION_TYPE.SET_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    default:
      break;
  }
  return state;
}
