import { createStore , combineReducers } from "redux";
import searchBarReducer from "../reducers/SearchBarReducer";
import bookDesReducer from "../reducers/BookDesReducer";


const store1 = combineReducers({searchBarReducer,bookDesReducer});
const store = createStore(store1,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;