import React, { Component } from 'react';


const Task = (props) => {

  return (

    <div>
      {props.task.done === true
        ?  <li className="completedtask">{props.task.note}<button onClick={() => props.handleDelete(props.task)}>X</button></li>
        : <li onDoubleClick={() => props.handleComplete(props.task)}>{props.task.note} </li>
      }
    </div>
  )
}

export default Task;
