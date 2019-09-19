import React, { Component } from 'react';




class LoginPage extends Component {

  constructor(){
    super()
    this.state = {
      username: '',
      password: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:3000/login', {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(
        this.state
      )
    })
    .then(response => response.json())
    .then(data => {
      if(data.token){
        localStorage.token = data.token
        this.props.redirectPage('profile')
      }
    })

  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <h2>Please Login!</h2>
          <label>Username</label>
          <input tyep="text" name="username" value={this.state.username} onChange={this.handleChange} /><br />
          <label>Password</label>
          <input type="password" name="password" value={this.state.password} onChange={this.handleChange} /><br />
          <input type="submit" value="SUBMIT" />
        </form>
      </div>
    )
  }
}


export default LoginPage;
