const defaultState = {
  location: ''
}


export default(state=defaultState, action) => {
  switch (action.type) {
    case "SET_LOCATION":
      return {
        location: action.location,
        latitude: action.latitude,
        longitude: action.longitude
      }
    default:
      return state;
  }
}
