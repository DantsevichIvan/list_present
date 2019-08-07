import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import presentReducer from "./Present_Reducer";
import thunkMiddleware from '../node_modules/redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(combineReducers({
    present: presentReducer
}), composeEnhancers(applyMiddleware(thunkMiddleware)));


export default store