import React, { Component } from 'react';
import './App.css';
import { Switch, Route, withRouter } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import theme from './components/theme';


//STYLING
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';

//Components
import LoginPage from './components/user_pages/LoginPage';
import ProfilePage from './components/user_pages/ProfilePage';
import SignUpPage from './components/user_pages/SignUpPage';
import SpacingGrid from './components/spacingGrid';
import centeredGrid from './components/centeredGrid';
import DashBoardGrid from './components/dashBoardGrid'

//Containers
import TasksContainer from './containers/tasksContainer';
import DisplayElementsContainer from './containers/displayElementsContainer';
import WeatherContainer from './containers/weatherContainer';
import CalendarContainer from './containers/calendarContainer';
import NavBarContainer from './containers/navBarContainer';
import RestaurantsContainer from './containers/restaurantsContainer';




class App extends Component {

  constructor(){
    super()
    this.state = {
      username: '',
      user_id: ''
    }
  }

//   //GRAB USER
  componentDidMount() {
    if (localStorage.token){
      fetch('http://localhost:3000/profile',{
        headers: {
          'Authorization': `Bearer ${localStorage.token}`
        }
      })
      .then(res => res.json())
      .then(user => this.setState({
        username: user.username,
        user_id: user.id
      })
    )
  }
  else {
    this.props.history.push('/login')
  }
}

  //SET SELECTED PAGE
  redirectPage = (page) => {
    this.setState({
      page: page
    })
  }

  handleNewUser = (user) => {
    console.log(user)
  }

  render(){
    // console.log(this.state)
    return(
      <Switch>
        <Route
          path={"/profile"}
          render={routerProps => <ProfilePage {...routerProps} username={this.state.username} user_id={this.state.user_id}/>} />

        <Route path={"/login"} component={LoginPage} />
        <Route
          path={"/singup"}
          render={routerProps => <SignUpPage {...routerProps} addUser={this.handleNewUser}/>} />
        <Route exact path={"/"} component={SignUpPage} />
      </Switch>
    )

  //   switch (this.state.page) {
  //     case 'login':
  //       return <LoginPage redirectPage={this.redirectPage}/>
  //     case 'profile':
  //       return (
  //           <div className="">
  //             <ProfilePage />
  //             <SpacingGrid />
  //           </div>
  //         )
  //
  //     case 'signup':
  //       return <SignUpPage />
  //
  //     default:
  //       return <LoginPage />
  //   }
  // }


}
}


export default withRouter(App);
