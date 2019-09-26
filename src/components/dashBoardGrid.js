import React from 'react';
import { makeStyles } from '@material-ui/styles';

import { Grid } from '@material-ui/core';
import WeatherBoard from '../components/weather/weatherBoard';
import RestaurantsBoard from '../components/restaurants/restaurantsBoard';
import MapsBoard from '../components/routes/routesBoard';
import TasksBoard from '../components/tasks/tasksBoard';
import DisplayElementsContainer from '../containers/displayElementsContainer';
import CalendarContainer from '../containers/calendarContainer';


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4),
  }
}));



const DashBoardGrid = () => {
  const classes = useStyles();


  return (
    <div className={classes.root}>

      <Grid container spacing={4}>
        <Grid item item lg={3} md={6} xl={3} xs={12}>
          <CalendarContainer />
        </Grid>
        <Grid item item lg={8} md={12} xl={9} xs={12}>
          <DisplayElementsContainer />
        </Grid>
      </Grid>


      <Grid container spacing={4}>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <WeatherBoard />
        </Grid>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <RestaurantsBoard />
        </Grid>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <MapsBoard />
        </Grid>
      </Grid>

    </div>
  )
}


export default DashBoardGrid;
