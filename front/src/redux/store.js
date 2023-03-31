import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducer";

const middleware = applyMiddleware(thunk);
var store = createStore(rootReducer, applyMiddleware(thunk));
export default store;

// import { createStore } from "redux";
// import rootReducer from "./reducer";

// var store = createStore(rootReducer);
// export default store;
