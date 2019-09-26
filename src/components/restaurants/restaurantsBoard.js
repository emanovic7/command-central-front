import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Typography, Avatar, CardMedia } from '@material-ui/core';
// import AcUnitIcon from '@material-ui/icons/AcUnit'

import restaurants from '../../images/restaurants.jpg';


const useStyles = makeStyles(theme => ({
  root: {
    height: '100%'
  },
  content: {
    alignItems: 'center',
    display: 'flex',
    backgroundImage: `url(${restaurants})`
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






const RestaurantsBoard = (props) => {
  const { className, ...rest } = props;
  const classes = useStyles();

  return (
      <Card className={classes.root}>
        <CardContent >
          <Grid Container justify="space-between">
            <Grid item>
              <Typography className={classes.title} color="textSecondary">Reservations</Typography>
            </Grid>
            <CardMedia
                className={classes.media}
                image={restaurants}
                title="restaurants"
              />
            <Grid item>
              <Typography className={classes.title} color="textSecondary">Current Reservations: 0</Typography>
            </Grid>

          </Grid>
        </CardContent>
      </Card>
  )
}

export default RestaurantsBoard;
