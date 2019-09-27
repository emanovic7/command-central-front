import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { FixedSizeList } from 'react-window';
import { Card, CardContent, Grid, Typography, Avatar, CardMedia } from '@material-ui/core';



const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: 400,
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  completed: {

  }
}));







const TasksList = (props) => {

  console.log("from tasksList", props)
  const taskItems = props.tasks.filter(taskItem =>
    taskItem.user_id === props.user_id
  )


  function Row(){
    return (
      taskItems.map(taskItem =>
        <ListItem>
          {taskItem.done === true ?
          <ListItemText primary={taskItem.note} />
            :
          <ListItemText primary={taskItem.note} />}
        </ListItem>
      )
    )
  }

  // <div>
  //   {props.task.done === true
  //     ?  <li className="completedtask">{props.task.note}<button onClick={() => props.handleDelete(props.task)}>X</button></li>
  //     : <li onDoubleClick={() => props.handleComplete(props.task)}>{props.task.note} </li>
  //   }
  // </div>

  const classes = useStyles();

  return (

    <Card>
      <CardContent className={classes.root}>
        <div >
          <FixedSizeList height={400} width={1400} itemSize={20} itemCount={1}>
            {Row}
          </FixedSizeList>
        </div>
      </CardContent>
    </Card>
  )
}


export default TasksList;
