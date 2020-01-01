import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signUp } from '../../actions/userActions';

//Material UI
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { Button } from '@material-ui/core';


const styles = theme => ({
  root: {
    margin: theme.spacing.unit * 8,
    padding: theme.spacing.unit * 3
  },
  item: {
    padding: theme.spacing.unit * 2
  }
});


class SignUpPage extends Component {

state = {
      name: '',
      username: '',
      password: ''
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
      const { classes } = this.props;
      const { name, username, password } = this.state;
    return(

      <div className={classes.root}>

        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <form onSubmit={this.handleSubmit}>
              <Grid item xs={12}>
                <Typography
                  className={classes.item}
                  gutterBottom
                  variant="title"
                >
                  please sign up below
                </Typography>
              </Grid>
              <Grid item className={classes.item}>
                <TextField
                  label="full name"
                  onChange={this.handleChange}
                  value={this.state.name}
                  name="name"
                />
              </Grid>
              <Grid item className={classes.item}>
                <TextField
                  label="username"
                  onChange={this.handleChange}
                  value={this.state.username}
                  name="username"
                />
              </Grid>
              <Grid item className={classes.item}>
                <TextField
                  label="password"
                  type="password"
                  onChange={this.handleChange}
                  value={this.state.password}
                  name="password"
                />
              </Grid>
              <Grid align="center">
                <Button
                  type="submit"
                  className={classes.button}
                  onSubmit={this.handleSubmit}>Sign Up
                </Button>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </div>
    )
  }
}



const mapDispatchToProps =  {
  signUp: signUp
}

SignUpPage.propTypes = {
  classes: PropTypes.object.isRequired
};

//export default withStyles(styles)(connect(null, mapDispatchToProps)(SignUpPage))

export default connect(null, mapDispatchToProps)(withStyles(styles)(SignUpPage))
