import React, { Component } from 'react';
import './App.css';
import { Switch, Route, withRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { connect } from 'react-redux'


//STYLING
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import { ThemeProvider } from '@material-ui/styles';
import theme from './components/theme';

//Components
import LoginPage from './components/user_pages/LoginPage';
import ProfilePage from './components/user_pages/ProfilePage';
import SignUpPage from './components/user_pages/SignUpPage';
import HomePage from './components/user_pages/homePage'
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
import EventsContainer from './containers/eventsContainer';
import ReservationsContainer from './containers/reservationsContainer';
import FavoritesContainer from './containers/favoritesContainer';


class App extends Component {

  constructor(){
    super()
    this.state = {
      favorites: []
    }
  }


  //LOGOUT
  handleLogout = () => {
    localStorage.clear()
    this.props.history.push('/login')
  }

  //SET SELECTED PAGE
  redirectPage = (page) => {
    this.setState({
      page: page
    })
  }

  handleNewUser = (user) => {
    let name = user.name;
    let username = user.username;
    let password = user.password;

    fetch('https://jarvis-back.herokuapp.com/users', {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        fullname: name,
        username: username,
        password: password
      })
    })
    .then(response => response.json)
    .then(this.props.history.push('/profile'))
  }

  addFavorite = (favorite) => {

    fetch('https://jarvis-back.herokuapp.com/favorites',{
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: favorite.name,
        phone: favorite.phone,
        city: favorite.location.city,
        user_id: this.state.user_id
      })
    })
    .then(response => response.json())
    .then(alert("Added to favorites"))
  }

  reserveRestaurant = (restaurant) => {

    fetch('http://localhost:3000/reservations', {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: restaurant.name,
        venue: restaurant.location.city,
        date: "10/01/2019",
        time: '7:00',
        user_id: this.state.user_id
      })
    })
    .then(response => response.json())
    .then(alert("Reservation made!"))
  }


  render(){
    console.log("props from app", this.props)
    console.log("App state", this.state)
    return(
      <div>
      <NavBarContainer logout={this.handleLogout}/>
        <Switch>
            <Route
            path={'/profile'}
            render={(routerProps, props) => <ProfilePage {...routerProps} addFavorite={this.addFavorite} reserveRestaurant={this.reserveRestaurant}/>} />
            <Route path={'/login'} component={LoginPage} />
            <Route path={'/signup'}
            render={routerProps => <SignUpPage {...routerProps} addUser={this.handleNewUser} />} />
            <Route path={'/events'} component={EventsContainer} />
            <Route path={'/reservations'} component={ReservationsContainer} />
            <Route
            path={'/favorites'}
            render={routerProps => <FavoritesContainer {...routerProps} username={this.state.username} user_id={this.state.user_id}/>} />
            <Route path={'/tasks'} component={TasksContainer} />
            <Route path={'/'} component={HomePage} />
        </Switch>
      </div>
    )

  }//
}

const mapStateToProps = (store) => {
  return {
    username: store.currentUser.username,
    userID: store.currentUser.id,
    geolocation: store.geolocation
  }
}


export default connect(mapStateToProps, null)(App);
