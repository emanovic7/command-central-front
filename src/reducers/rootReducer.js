import { combineReducers } from 'redux';
import user from './usersReducer';
import reverseLocation from './reverseLocationReducer';
import geolocation from './geolocationReducer';


const rootReducer = combineReducers({
  user: user,
  geolocation: geolocation,
  reverseLocation: reverseLocation
})



export default rootReducer;
