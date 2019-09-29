import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';




class SignUpPage extends Component {

  constructor(){
    super()
    this.state = {
      "name": '',
      "username": '',
      "password": ''
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addUser(this.state)
  }

  render(){
      console.log("from singup page",this.props)
      console.log("from singup page",this.state)
    return(

      <div className="Homepage">
        <Form onSubmit={this.handleSubmit}>
          <label>full name</label>
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/><br />

          <label>username</label>
          <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/><br />

          <label>password</label>
          <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/><br />

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    )
  }
}


export default SignUpPage;
