import { createStore, applyMiddleware } from 'redux';
import { logger } from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import reducer from "./reducers/Reducer";

//const middleware = applyMiddleware(promise(), thunk, logger());

const store = createStore(reducer);

store.subscribe(function(){
    console.log("store changed",store.getState())
})

export default store;