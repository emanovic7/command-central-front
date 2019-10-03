import React, { Component } from 'react';
import { makeStyles } from '@material-ui/styles';
import { withStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

//COMPONENTS
import WeatherBoard from '../components/weather/weatherBoard';
import RestaurantsBoard from '../components/restaurants/restaurantsBoard';
import MapsBoard from '../components/routes/routesBoard';
import TasksBoard from '../components/tasks/tasksBoard';


//CONTAINERS
import DisplayElementsContainer from '../containers/displayElementsContainer';
import CalendarContainer from '../containers/calendarContainer';
import RestaurantsContainer from '../containers/restaurantsContainer';
import RoutesContainer from '../containers/routesContainer';
import WeatherContainer from '../containers/weatherContainer';
import TasksContainer from '../containers/tasksContainer';
import EventsContainer from '../containers/eventsContainer';
import NavBarContainer from '../containers/navBarContainer';

//IMAGES
import background from '../images/background4.gif'


// const useStyles = makeStyles(theme => ({
// root: {
//   padding: theme.spacing(4),
// }
// }));

const styles = {
  root: {
    padding: '18px',
    backgroundImage: `url(${background})`
  }
}

class DashBoardGrid extends Component {

  constructor(){
    super()
    this.state = {
      page: ''
    }
  }


  handleClick = (event) => {
    this.setState({
      page: event.target.title
    })
  }



  render(){

        return (
          <div className={styles.root}>

            <Grid container spacing={4}>
              <Grid item item lg={3} md={6} xl={3} xs={12}>
                <TasksContainer user_id={this.props.user_id}/>
              </Grid>

              <Grid item item lg={8} md={12} xl={9} xs={12}>
                {this.state.page === 'restaurants' ? <RestaurantsContainer addFavorite={(favorite) => this.props.addFavorite(favorite)} reserveRestaurant={(restaurant) => this.props.reserveRestaurant(restaurant)}/> :
                this.state.page === 'Weather' ? <WeatherContainer /> :
                this.state.page === "routes"  ? <RoutesContainer />
                :<DisplayElementsContainer />
                }
              </Grid>
            </Grid>


            <Grid container spacing={4}>
              <Grid item lg={3} sm={6} xl={3} xs={12} onClick={this.handleClick}>
                <WeatherBoard />
              </Grid>
              <Grid item lg={3} sm={6} xl={3} xs={12} onClick={this.handleClick}>
                <RestaurantsBoard />
              </Grid>
              <Grid item lg={3} sm={6} xl={3} xs={12} onClick={this.handleClick}>
                <MapsBoard />
              </Grid>
              <Grid item lg={3} sm={6} xl={3} xs={12} onClick={this.handleClick}>
                <MapsBoard />
              </Grid>
              <Grid item lg={3} sm={6} xl={3} xs={12} onClick={this.handleClick}>
                <MapsBoard />
              </Grid>
              <Grid item lg={3} sm={6} xl={3} xs={12} onClick={this.handleClick}>
                <MapsBoard />
              </Grid>
            </Grid>

          </div>
        )
      }

}


export default withStyles(styles)(DashBoardGrid);
