
import { createStore, combineReducers } from 'redux';
import { budgetReducer } from './reducers';

const rootReducer = combineReducers({
  budget: budgetReducer,
});

const store = createStore(rootReducer);

export default store;
