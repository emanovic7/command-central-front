import React, { Component } from 'react';




class SignUpPage extends Component {

  constructor(){
    super()
    this.state = {
      "fullname": '',
      "username": '',
      "password": ''
    }
  }


  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <h2>Singup!</h2>
          <label>Full Name</label>
          <input type="text" name="fullname" value={this.state.username} onChange={this.handleChange} /><br />
          <label>Username</label>
          <input type="text" name="username" value={this.state.username} onChange={this.handleChange} /><br />
          <label>Password</label>
          <input type="password" name="password" value={this.state.password} onChange={this.handleChange} /><br />
          <input type="submit" value="SUBMIT" />
        </form>
      </div>
    )
  }
}


export default SignUpPage;
