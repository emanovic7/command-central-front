import { combineReducers } from 'redux';
import currentUser from './usersReducer';
import reverseLocation from './reverseLocationReducer';
import geolocation from './geolocationReducer';


export default combineReducers({
  currentUser,
  geolocation,
  reverseLocation
})
