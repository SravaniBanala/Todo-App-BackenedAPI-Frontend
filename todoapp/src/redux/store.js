import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import todoReducers from './reducers';

const initialState = {};

const middleware = [thunk];

const store = createStore (
    todoReducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))

)

export default store;

