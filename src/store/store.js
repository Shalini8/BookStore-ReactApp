import { createStore , combineReducers } from "redux";
import searchBarReducer from "../reducers/SearchBarReducer";


const store1 = combineReducers({searchBarReducer});
const store = createStore(store1,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;