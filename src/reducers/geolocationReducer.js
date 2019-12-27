const defaultState = {
  location: ''
}


export default(state=defaultState, action) => {
  switch (action.type) {
    case "SET_LOCATION":
      return {location: action.location}
    default:
      return state;
  }
}
