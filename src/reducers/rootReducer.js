
export default (state={user: "emanovic7"}, action) => {

  console.log("state ", state)
  console.log("nextState ", action)

  switch (action.type) {
    case "SET_USER":
      return { user: action.user }
    case "MAKE_GENESIS":
      return { user: "Genesis" }

    default:
      return state
  }
}
