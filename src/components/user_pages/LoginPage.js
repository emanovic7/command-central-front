import React, { Component } from 'react';
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { Button } from '@material-ui/core';

//images
import background from '../../images/background4.gif';


const styles = theme => ({
  root: {
    margin: theme.spacing.unit * 8,
    padding: theme.spacing.unit * 3
  },
  item: {
    padding: theme.spacing.unit * 2
  },
  content: {
    alignItems: 'center',
    display: 'flex',
    backgroundImage: `url(${background})`
  }
});

class LoginPage extends Component {

  state = {
    username: '',
    password: ''
  };


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
    const { classes } = this.props;
    const { username, password } = this.state;


    return (
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
                  please login below
                </Typography>
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
              <Grid>
                <Button
                  type="submit"
                  className={classes.button}
                  onSubmit={this.handleSubmit}>Login

                </Button>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </div>
    );
  }
}

LoginPage.propTypes = {
  classes: PropTypes.object.isRequired
};


export default withStyles(styles)(LoginPage);
