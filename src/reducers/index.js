import { searchRobots } from "./search.reducer";
import { requestRobots } from "./request.reducer";
import {combineReducers} from "redux";

const rootReducer = combineReducers({ searchRobots, requestRobots })

export default rootReducer