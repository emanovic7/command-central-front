

//SIGNUP
export const signUp = (name, username, password) => dispatch => {
  dispatch({ type: "SIGNUP_REQUEST_START" })
  return fetch('https://jarvis-back.herokuapp.com/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      name: name,
      username: username,
      password: password
    })
  })
  .then(res => res.json())
  .then((user) => {
    dispatch({ type: 'ADD_USER' })
  })
  .catch(error => {
    dispatch({ type: 'SIGNUP_REQUEST_FAILURE', error: error })
  })
}

//LOGOUT
export const logOut = () => dispatch => {
  localStorage.clear()
  dispatch({ type: 'LOGOUT' })
}
