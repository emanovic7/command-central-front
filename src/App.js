import React, { Component } from 'react';
import './App.css';
import { Switch, Route, withRouter } from 'react-router-dom';
import { createStore } from 'redux';


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
      username: '',
      user_id: '',
      favorites: []
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
    this.props.history.push('/')
  }
}

  //LOGOUT
  handleLogout = () => {
    localStorage.clear()
    this.props.history.push('/')
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

    fetch('http://localhost:3000/users', {
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

  // t.string "title"
  //   t.string "venue"
  //   t.date "date"
  //   t.time "time"
  //   t.integer "user_id"

  render(){

    return(
      <div>
      <NavBarContainer username={this.state.username} logout={this.handleLogout}/>
        <Switch>
            <Route
            path={'/profile'}
            render={(routerProps, props) => <ProfilePage {...routerProps} username={this.state.username} user_id={this.state.user_id} addFavorite={this.addFavorite} reserveRestaurant={this.reserveRestaurant}/>} />
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
