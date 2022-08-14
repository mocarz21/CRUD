import { createStore, combineReducers } from 'redux';
import initialState from './initialState';
import postRedux from './postsRedux'

const subreducers = {
  posts:postRedux,
}

const reducer = combineReducers(subreducers);
const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;