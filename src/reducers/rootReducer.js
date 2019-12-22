import { combineReducers } from 'redux';
import user from './usersReducer';
import reverseLocation from './reverseLocationReducer';
import geolocation from './geolocationReducer';


export default combineReducers({
  user,
  geolocation,
  reverseLocation
})
