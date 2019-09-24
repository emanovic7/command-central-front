import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';




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
        this.props.history.push('/profile')
      }
    })

  }

  render(){
    return(
      <div>
      <h2>Please Login!</h2>
        <form onSubmit={this.handleSubmit}>
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
