import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

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
    fetch('https://jarvis-back.herokuapp.com/login', {
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
        this.props.history.push('/profile')
      }
    })

  }

  render(){
    return(
      <div className="Homepage">
      <h2>Please Login!</h2>
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>username</Form.Label>
          <Form.Control type="text" placeholder="Enter Username" name="username" value={this.state.username} onChange={this.handleChange}/>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </div>
    )
  }
}


export default LoginPage;
