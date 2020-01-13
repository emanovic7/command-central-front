import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

//IMAGES

import weatherBackground from '../../images/skyBlue.jpg';
import sunny from '../../images/sunny-icon.png';
import rain from '../../images/rainy-icon.png';
import clear from '../../images/clear-day-icon.png';
import snow from '../../images/snow-icon.png';
import cloudy from '../../images/cloudy-icon.png'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 520,
    height: 200,
  },
  title: {
    color: 'red',
    textAlign: 'center',
    fontStyle: 'italic',
  },
  image: {
    width: 150,
    height: 150,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));



const getDate = (time) => {
 let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
 let newDate = new Date(time*1000)
 let dayOfWeek = days[newDate.getDay()]
 return newDate.toString();
}

const Weather = (props) => {

  const classes = useStyles();
  console.log(props)
  return(
    <div className={classes.root}>
      <Paper >
        <Typography>
          <h2 className={classes.title}>Currently</h2>
        </Typography>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt={props.currently.icon} src={rain} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {props.currently.summary}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {props.currently.icon}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  <p>Current Temp: {props.currently.temperature}</p>
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  <p>Humidity: {props.currently.humidity}</p>
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  <p>Pressure: {props.currently.pressure}</p>
                </Typography>
              </Grid>
              <Grid item>
               <Typography variant="body2" style={{ cursor: 'pointer' }}>
                 {getDate(props.currently.time)}
               </Typography>
             </Grid>
            </Grid>

          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}


export default Weather;
