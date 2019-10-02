import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import { Card, CardContent, Grid, Typography, Avatar, CardMedia } from '@material-ui/core';
// import AcUnitIcon from '@material-ui/icons/AcUnit'

import weather from '../../images/weather.jpg';
import weatherGif from '../../images/weatherGif.txt';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%'
  },
  content: {
    alignItems: 'center',
    display: 'flex',
    backgroundImage: `url(${weatherGif})`
  },
  title: {
    fontWeight: 700
  },
  media: {
    height: 140,
  },
  avatar: {
    backgroundColor: theme.palette.error.main,
    height: 56,
    width: 56
  },
  icon: {
    height: 32,
    width: 32
  },
  difference: {
    marginTop: theme.spacing(2),
    display: 'flex',
    alignItems: 'center'
  },
  differenceIcon: {
    color: theme.palette.error.dark
  },
  differenceValue: {
    color: theme.palette.error.dark,
    marginRight: theme.spacing(1)
  }
}));






const WeatherBoard = (props) => {
  const { className, ...rest } = props;
  const classes = useStyles();

  return (
      <Card className={classes.root}>
        <CardContent >
          <Grid Container justify="space-between">
            <Grid item>
              <Typography className={classes.title} color="textSecondary">Weather</Typography>
            </Grid>
            <CardMedia
                className={classes.media}
                image={weatherGif}
                title="Weather"
              />
            <Grid item>
              <Typography className={classes.title} color="textSecondary">Temp: 89</Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.title} color="textSecondary">Humidity: .40</Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.title} color="textSecondary">Chance of rain: 0</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
  )
}

export default WeatherBoard;
