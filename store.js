import { createStore } from 'redux';
import reducers from './reducers';

const store = createStore(
  reducers,
  applyMiddleware,
);
export default store;