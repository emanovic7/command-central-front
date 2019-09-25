import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, CardHeader, Button, Divider, CardContent, Grid, Typography, Avatar, CardMedia } from '@material-ui/core';
// import AcUnitIcon from '@material-ui/icons/AcUnit'

import toDo from '../../images/to-do-list-photo.jpg';
import DisplayElementsContainer from '../../containers/displayElementsContainer'


const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  inner: {
    minWidth: 800
  },
  statusContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  status: {
    marginRight: theme.spacing(1)
  },
  actions: {
    justifyContent: 'flex-end'
  }
}));






const TasksBoard = (props) => {
  const { className, ...rest } = props;
  const classes = useStyles();

  return (
      <Card {...rest} className={clsx(classes.root, className)}>
        <CardHeader title="To Dos"/>
        <Divider />
        <CardContent className={classes.content}>
          <DisplayElementsContainer />
        </CardContent>
      </Card>
  )
}

export default TasksBoard;
