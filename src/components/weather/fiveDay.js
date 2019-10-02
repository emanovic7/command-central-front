import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import Paper from '@material-ui/core/Paper';
import Modal from '@material-ui/core/Modal';



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
  modalStyle: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  control: {
    padding: theme.spacing(2),
  },
  title: {
    color: theme.palette.primary.light,
  },
  details: {
    textAlign: 'center',

  }

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
  console.log("props from fiveDay weather", props)
  const classes = useStyles();
  const [spacing, setSpacing] = React.useState(2);
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getDay = (time) => {
    let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    let newDate = new Date(time*1000)
    let dayOfWeek = days[newDate.getDay()]
    return dayOfWeek;
  }


  const stripQuotes = (term) => {
    let icon = term.slice(1,-1);
    return icon;
  }


  return(
    <Grid container className={classes.root} spacing={0}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          {props.weather.map(weather => (
            <div onDoubleClick={handleOpen}>
              <Grid key={weather.time} item>
                  <Paper className={classes.paper}>
                    <p className={classes.details}>{getDay(weather.time)}</p>
                    <div align="center" >
                      { weather.icon==="rain"? <img src={rain} alt={weather.icon} height={50} width={50} mode="fit"/> :
                      weather.icon.includes("clear")? <img src={clear} alt={weather.icon} height={50} width={50} mode="fit"/> :
                       weather.icon.includes("cloudy")? <img src={cloudy} alt={weather.icon} height={50} width={50} mode="fit"/> :
                        weather.icon.includes("sunny")? <img src={sunny} alt={weather.icon} height={50} width={50} mode="fit"/> :
                         weather.icon.includes("snow")? <img src={snow} alt={weather.icon} height={50} width={50} mode="fit"/> :
                      null}
                    </div><br />
                    <h5 className={classes.details}>{weather.temperatureHigh}</h5>
                    <h5 className={classes.details}>{weather.temperatureLow}</h5>
                  </Paper>
              </Grid>

              <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
                >
                <div style={modalStyle} className={classes.modalStyle}>
                  <h2 id="simple-modal-title">{weather.icon}</h2>
                  <p id="simple-modal-description">
                    {weather.summary}
                  </p>
                </div>
              </Modal>
            </div>
          ))}

        </Grid>
      </Grid>
    </Grid>


  )
}


export default FiveDayWeather;
