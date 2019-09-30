import React, { Component } from 'react';
import { List } from 'semantic-ui-react'
import '../../Tasks.css';

const Task = (props) => {

  return (

    <div >
      {props.task.done === true
        ?  <List.Item className="completedtask">{props.task.note}<button onClick={() => props.handleDelete(props.task)}>X</button></List.Item>
        : <List.Item onDoubleClick={() => props.handleComplete(props.task)}>{props.task.note} </List.Item>
      }
    </div>
  )
}

export default Task;
