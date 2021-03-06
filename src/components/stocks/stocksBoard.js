import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';

import { Card, CardContent, Grid, Typography, Avatar, CardMedia } from '@material-ui/core';
// import AcUnitIcon from '@material-ui/icons/AcUnit'

import stocks from '../../images/stocksGif.gif';


const useStyles = makeStyles(theme => ({
  root: {
    height: '100%'
  },
  content: {
    alignItems: 'center',
    display: 'flex',
    backgroundImage: `url(${stocks})`
  },
  title: {
    fontWeight: 700
  },
  media: {
    height: 180,
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






const StocksBoard = (props) => {
  const { className, ...rest } = props;
  const classes = useStyles();

  return (
      <Card className={classes.root}>
        <CardContent >
          <Grid Container justify="space-between">
            <Grid item>
              <Typography className={classes.title} color="textSecondary">Stocks</Typography>
            </Grid>
            <CardMedia
                className={classes.media}
                image={stocks}
                title="stocks"
              />


          </Grid>
        </CardContent>
      </Card>
  )
}

export default StocksBoard;
