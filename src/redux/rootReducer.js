import {combineReducers} from 'redux';
//import authReducer from './auth/reducer';

const testReducer = () => 5;
const rootReducer = combineReducers({
  auth: testReducer,
});
export default rootReducer;
