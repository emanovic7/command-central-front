import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import ListItem from '@material-ui/core/ListItem';
import InputBase from '@material-ui/core/InputBase';
import ListItemText from '@material-ui/core/ListItemText';
import { FixedSizeList } from 'react-window';
import { Card, CardContent, Grid, Typography, Avatar, CardMedia } from '@material-ui/core';
// import AcUnitIcon from '@material-ui/icons/AcUnit'

import restaurants from '../../images/restaurants.jpg';


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: 400,
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  content: {
    alignItems: 'center',
    display: 'flex',
    backgroundImage: `url(${restaurants})`
  },
  title: {
    fontWeight: 700,
    textAlign: 'center'
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




const NewsBoard = (props) => {
  const newsItems = props.news.map(newsItem =>
    newsItem
  )


  function Row(){
    return (
      newsItems.map(newsItem =>
        <ListItem>
          <a target="_blank" and rel="noopener noreferrer" href={newsItem.url}><ListItemText primary={newsItem.title} /></a>
        </ListItem>
      )
    )
  }

  const classes = useStyles();

  return (

    <Card>
      <CardContent className={classes.root}>
      <InputBase
         className={classes.input}
         placeholder="Search News"
       />
        <div >
          <FixedSizeList height={400} width={1400} itemSize={20} itemCount={1}>
            {Row}
          </FixedSizeList>
        </div>
      </CardContent>
    </Card>
  )
}





export default NewsBoard;
