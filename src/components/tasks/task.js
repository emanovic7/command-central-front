import React, { Component } from 'react';


const Task = (props) => {


  return (
    <div>
      {props.task.note}
      <button onClick={() => props.handleClick(props.task)}>complete</button>
    </div>
  )
}

export default Task;
