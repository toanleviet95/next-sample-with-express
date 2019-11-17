import { combineReducers } from 'redux';
import jobList from './jobList';
import jobDetail from './jobDetail';

export default combineReducers({
  jobList,
  jobDetail,
});
