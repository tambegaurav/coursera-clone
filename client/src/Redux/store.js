/* eslint-disable no-underscore-dangle */
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { courseReducer } from './Admin/Course/courseReducer';
import { adminVideoReducer } from './Admin/Video/adminVideoReducer';

const rootReducer = combineReducers({
  course: courseReducer,
  adminVideo: adminVideoReducer,
});

const customThunk = (store) => (next) => (action) => {
  if (typeof action === 'function') {
    return action(store.dispatch, store.getState);
  }
  return next(action);
};

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(customThunk),

    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);
