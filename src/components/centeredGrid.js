import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

//images
import maps from '../images/maps.jpg';
import restaurants from '../images/restaurants.jpg';
import weather from '../images/weather.jpg';
import toDo from '../images/to-do-list-photo.jpg';

//CONTAINERS
import TasksContainer from '../containers/tasksContainer';
import DisplayElementsContainer from '../containers/displayElementsContainer';
import WeatherContainer from '../containers/weatherContainer';
import CalendarContainer from '../containers/calendarContainer';
import NavBarContainer from '../containers/navBarContainer';
import RestaurantsContainer from '../containers/restaurantsContainer';
import RoutesContainer from '../containers/routesContainer';






const useStyles = makeStyles(theme => ({
  root: {
    display: 'inline-block',
    borderRadius: '50%',
    flexGrow: 0,
    flexShrink: 0
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  display: {
    padding: theme.spacing(2),
    textAlign: 'center',
    height: 600,
    width: 700,
  },
  calendar: {
    padding: theme.spacing(2),
    textAlign: 'center',
    height: 300,
    width: 700,
  },
  leftComponents: {
    padding: theme.spacing(2),
    textAlign: 'center',
    height: 300,
    width: 400,
  }

}));

export default function CenteredGrid(){
  const classes = useStyles();

  return (
    <div>

      <Grid container className={classes.root} spacing={3}>
        <Grid item xs={3}>
          <img src={weather} className={classes.leftComponents}/>
          <img src={maps} className={classes.leftComponents}/>
          <img src={restaurants} className={classes.leftComponents}/>
          <img src={toDo} className={classes.leftComponents}/>
        </Grid>
        <Grid item xs={9}>
          <DisplayElementsContainer className={classes.paper}/>
        </Grid>

      </Grid>
    </div>
  )
}
