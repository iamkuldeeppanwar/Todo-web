import { ADD_USER, LOGIN_USER } from "../constant";

const initialState = {
  loading: false,
  user: [],
  error: "",
};
console.log("initialState", initialState);

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        loading: false,
        user: action.payload.data.user,
        error: action.payload.data,
      };
    case LOGIN_USER:
      return {
        ...state,
        loading: false,
        user: action.payload.data,
      };
    default:
      return state;
  }
};

export default reducer;
