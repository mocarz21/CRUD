import { createStore, combineReducers } from 'redux';
import initialState from './initialState';
import postRedux from './postsRedux'


//selectors
export const getPostData = ({lists}, listId) => lists.find(list => list.id === listId)

//action creators
export const deletePost = payload =>({type: 'app/post/DELETE', id: payload.id})
export const addPost = payload =>({type: 'app/post/ADD' , title: payload.title, shortDescription: payload.description, content: payload.content, publishedDate: payload.published, author: payload.author})

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