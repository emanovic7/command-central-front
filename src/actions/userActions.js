

//SIGNUP
export const signUp = (user) => dispatch => {
  return fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      name: user.name,
      username: user.username,
      password: user.password
    })
  })
  .then(res => res.json())
  .then((user) => {
    dispatch({type: 'ADD_USER', user: user })
  })
}


//LOGOUT
export const logOut = () => dispatch => {
  localStorage.clear()
  dispatch({ type: 'LOGOUT' })
}
