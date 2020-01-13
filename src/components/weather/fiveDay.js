import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import Paper from '@material-ui/core/Paper';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';



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
  gridList: {
   flexWrap: 'nowrap',
   // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
   transform: 'translateZ(0)',
  },
  paper: {
    height: 200,
    width: 120,
    backgroundSize: 'cover',
  },
  control: {
    padding: theme.spacing(2),
  },
  title: {
    color: theme.palette.primary.light,
  },
  details: {
    textAlign: 'center',
  },
  typography: {
    padding: theme.spacing(2),
  },
  weatherDetails: {
    height: 400,
    width: 300,
    backgroundSize: 'cover',

  },

}));

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

// `url(${background})`





const FiveDayWeather = (props) => {

  const classes = useStyles();
  const [spacing, setSpacing] = React.useState(2);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (weather) => {
    console.log("from handleclick", weather)
    setAnchorEl(weather);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const getDay = (time) => {
    let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    let newDate = new Date(time*1000);
    let dayOfWeek = days[newDate.getDay()];
    return dayOfWeek;
  }


  const getTime = (time) => {
    let newDate = new Date(time * 1000);
    let hours = newDate.getHours();
    let minutes = "0" + newDate.getMinutes();
    let seconds = "0" + newDate.getSeconds();
    let timeOfDay = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    return timeOfDay;
  }

  const weatherIcon = (icon) => {
    return <img src={icon} alt={weather.icon} height={50} width={50} mode="fit" />
  }


  return(
    <Grid container className={classes.root} spacing={0}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          {props.weather.map(weather => (
            <div onDoubleClick={() => handleClick(weather)}>
              <Grid key={weather.time} item>
                  <Paper className={classes.paper} >
                    <p className={classes.details}>{getDay(weather.time)}</p>
                    <div align="center" >
                      {weatherIcon(weather.icon)}
                    
                      {/* weather.icon==="rain"? <img src={rain} alt={weather.icon} height={50} width={50} mode="fit"/> :
                      weather.icon.includes("clear")? <img src={clear} alt={weather.icon} height={50} width={50} mode="fit"/> :
                       weather.icon.includes("cloudy")? <img src={cloudy} alt={weather.icon} height={50} width={50} mode="fit"/> :
                        weather.icon.includes("sunny")? <img src={sunny} alt={weather.icon} height={50} width={50} mode="fit"/> :
                         weather.icon.includes("snow")? <img src={snow} alt={weather.icon} height={50} width={50} mode="fit"/> :
                      null */}


                    </div><br />
                    <h5 className={classes.details}>{weather.temperatureHigh}</h5>
                    <h5 className={classes.details}>{weather.temperatureLow}</h5>

                    <Popover
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                          vertical: 'top',
                          horizontal: 'center',
                        }}
                        transformOrigin={{
                          vertical: 'top',
                          horizontal: 'center',
                        }}
                      >

                          <Grid container className={classes.root}>
                            <Paper className={classes.weatherDetails}>
                              <Typography className={classes.typography}>
                                <p>Summary: {weather.summary}</p>
                                <p>Conditions: {weather.icon}</p>
                                <p>Pressure: {weather.pressure}</p>
                                <p>Apparent Temp High: {weather.apparentTemperatureHigh}</p>
                                <p>Apparent Temp Low: {weather.apparentTemperatureLow}</p>
                                <p>Precipe Type: {weather.precipType}</p>
                                <p>Precipe Intensity: {weather.precipIntensity}</p>
                                <p>Humidity: {weather.humidity}</p>
                                <p>Sunrise: {getTime(weather.sunriseTime)}</p>
                                <p>Sunset: {getTime(weather.sunsetTime)}</p>
                                <p>Visibility: {weather.visibility}</p>
                              </Typography>
                            </Paper>
                          </Grid>

                  </Popover>
                  </Paper>
              </Grid>
            </div>
          ))
        }

        </Grid>
      </Grid>
    </Grid>


  )
}


export default FiveDayWeather;
