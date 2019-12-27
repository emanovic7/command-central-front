import React, { Component } from 'react';
import { connect } from 'react-redux'
import { signUp } from '../../actions/userActions'

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

  componentDidMount(){
    if(localStorage.token){
      this.props.history.push('/profile')
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  addUser = (user) => {
    fetch('https://jarvis-back.herokuapp.com/signup', {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: user.name,
        username: user.username,
        password: user.password
      })
    })
    .then(response => response.json())
    .then(data => {
      if(data.token){
        localStorage.token = data.token
        this.props.history.push('/profile')
      }
    })

  }

  handleSubmit = (event) => {
    event.preventDefault()
    // this.props.signUp(this.state)
    // .then(() => {
    //   this.props.history.push("/profile")
    // })
    this.addUser(this.state)
  }

  render(){
      console.log("props from singup page",this.props)
      console.log("state from singup page",this.state)
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

const mapStateToProps = store => {
  return {
    user: store.currentUser
  }
}

const mapDispatchToProps =  {
  signUp: signUp
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage)
