import { combineReducers } from 'redux';
import admin from './admin';
import allUsers from './allUsers';
import latest from './latest';
import online from './online';
import transactions from './transactions';
import url from './url';
import users from './users';

const allReducers = combineReducers({
  usersReducer: users,
  latestReducer: latest,
  onlineReducer: online,
  urlReducer: url,
  transactionReducer: transactions,
  adminReducer: admin,
  allUsersReducer: allUsers
});

export default allReducers;
