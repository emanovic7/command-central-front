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


// const useStyles = makeStyles(theme => ({
// root: {
//   padding: theme.spacing(4),
// }
// }));

const styles = {
  root: {
    padding: '18px'
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
    console.log("from dashBoardGrid", this.state.page)
        return (
          <div className={styles.root}>

            <Grid container spacing={4}>
              <Grid item item lg={3} md={6} xl={3} xs={12}>
                <CalendarContainer />
              </Grid>
              <Grid item item lg={8} md={12} xl={9} xs={12}>
                {this.state.page === 'restaurants' ? <RestaurantsContainer /> :
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
            </Grid>

          </div>
        )
      }

}


export default withStyles(styles)(DashBoardGrid);
