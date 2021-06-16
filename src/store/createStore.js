import { createStore, compose, applyMiddleware } from "redux";
import reducers from "../reducers";
import thunk from "redux-thunk";


// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, applyMiddleware(thunk));

export default store;
