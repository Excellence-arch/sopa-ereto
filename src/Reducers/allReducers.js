import { combineReducers } from 'redux';
import latest from './latest';
import online from './online';
import url from './url';
import users from './users';

const allReducers = combineReducers({
  usersReducer: users,
  latestReducer: latest,
  onlineReducer: online,
  urlReducer: url
});

export default allReducers;
