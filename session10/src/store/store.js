import {combineReducers,createStore} from "redux"
import { countReducer1 } from "./reducer/countReducer";

const reducer=combineReducers({countReducer1,});
 export const store1 = createStore(reducer);
