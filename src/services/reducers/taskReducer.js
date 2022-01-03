import { ADD_TODO, GET_TODO } from "../constant";

const initialState = {
  loading: false,
  tasks: [],
  error: "",
};
console.log("initialState", initialState);

const taskReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        tasks: action.payload.data,
      };
    case GET_TODO:
      return {
        ...state,
        tasks: action.payload.data,
      };
    default:
      return state;
  }
};

export default taskReducer;
