
const defaultState = {
  id: null,
  name: '',
  username: ''
}



export default(state = defaultState, action) => {
  switch (action.type) {
    case "SET_USER":
      return action.user
    case "LOGOUT":
      return defaultState
    case "ADD_USER":
      return action.user;
    default:
      return state;
  }
}
