import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {taskMiddleware} from 'react-palm/tasks';
// import { composeWithDevTools } from 'redux-devtools-extension';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction'
// import allReducers from '../reducers/index';
import allReducers from '../reducers';

const store = createStore(allReducers, composeWithDevTools(applyMiddleware(thunk, taskMiddleware)));
export default store;
