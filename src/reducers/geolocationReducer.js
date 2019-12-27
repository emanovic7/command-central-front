const defaultState = {
  longitude: '',
  latitude: ''
}


export default(state=defaultState, action) => {
  switch (action.type) {
    case "SET_LATITUDE":
      return {...action.latitude}
    case "SET_LONGITUDE":
      return {...action.longitude}

    default:
      return state;
  }
}
