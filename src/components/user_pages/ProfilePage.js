import React, { Component, Fragment } from 'react';
import { createStore } from 'redux';
import { connect } from 'react-redux'
import { ThemeProvider } from '@material-ui/styles';
import theme from '../../components/theme';



//STYLING
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

//COMPONENTS
import DashBoardGrid from '../../components/dashBoardGrid';
import SpacingGrid from '../../components/spacingGrid';
import CenteredGrid from '../../components/centeredGrid';

//CONTAINERS
import TasksContainer from '../../containers/tasksContainer';
import RestaurantsContainer from '../../containers/restaurantsContainer';
import WeatherContainer from '../../containers/weatherContainer';
import RoutesContainer from '../../containers/routesContainer';
import DisplayElementsContainer from '../../containers/displayElementsContainer';
import NavBarContainer from '../../containers/navBarContainer';

class ProfilePage extends Component {

  constructor(props){
    super(props)
    this.state = {
      component: ''
    }
  }

  //GRAB USER
    componentDidMount() {
      if (localStorage.token){
        fetch('http://localhost:3000/profile',{
          headers: {
            'Authorization': `Bearer ${localStorage.token}`
          }
        })
        .then(res => res.json())
        .then(user => this.props.setUser(user))

    }
    else {
      this.props.history.push('/')
    }
  }

  changeComponent = (component) => {
    this.setState({
      component: component
    })
  }

  render(){

     switch (this.state.component) {
        case 'toDo':
          return <TasksContainer user_id={this.props.userID} username={this.props.username} />
        case 'restaurants':
          return <RestaurantsContainer user_id={this.props.userID} username={this.props.username} addFavorite={(favorite) => this.props.addFavorite(favorite)} />
        case 'weather':
          return <WeatherContainer />
        case 'maps':
          return <RoutesContainer />

        default:
          return (

            <React.Fragment>
              <ThemeProvider theme={theme}>
                <DashBoardGrid logout={this.handleLogout} addFavorite={(favorite) => this.props.addFavorite(favorite)} reserveRestaurant={(restaurant) => this.props.reserveRestaurant(restaurant)}/>
              </ThemeProvider>
            </React.Fragment>
          )
      }


  }
}


const mapStateToProps = (store) => {
  return {
    username: store.currentUser.username,
    userID: store.currentUser.id
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (user) => {
      debugger;
      dispatch({type: 'SET_USER', user: user})
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
