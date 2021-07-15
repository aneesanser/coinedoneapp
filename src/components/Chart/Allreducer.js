import { combineReducers } from "redux";
import { studentReducer } from "./reducer";
const AllReducers = combineReducers({
  studentTimings: studentReducer,
});
export default AllReducers;
