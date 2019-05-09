import { combineReducers } from 'redux';
import ExampleCounterReducer from './ExampleCounterReducer';
import ExampleLoginReducer from './ExampleLoginReducer';

export default combineReducers({
  counter: ExampleCounterReducer,
  login: ExampleLoginReducer
});
