import { combineReducers } from "redux";
import reducer from "./reducer";
import taskReducer from "./taskReducer";

const rootReducer = combineReducers({
  reducer,
  taskReducer,
});

export default rootReducer;
