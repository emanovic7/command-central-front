
const defaultState = {
  id: null,
  username: ''
}



export default(state = defaultState, action) => {
  switch (action.type) {
    case "SET_USER":
      return action.user
    case "LOGOUT":
      return defaultState
    default:
      return state;
  }
}
