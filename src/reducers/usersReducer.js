

export default(state = {user: ''}, action) => {
      debugger;
  switch (action.type) {
    case "SET_USER":
      return { user: action.user }

    default:
      return state;
  }

}


// export default (
//   state = {
//     user: '',
//     latitude: ''
//   }, action) => {
//
//   console.log("state from root", state)
//   console.log("nextState ", action)
//
//   switch (action.type) {
//     case "SET_USER":
//       return { user: action.user }
//
//     case "SET_LATITUDE":
//       return { latitude: action.latitude}
//
//     case "SET_LOCATION":
//       debugger
//         return {location: action.location}
//
//     default:
//       return state
//   }
// }
