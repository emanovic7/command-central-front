import React, { Component } from 'react';
import { List, Icon, Input, Button } from 'semantic-ui-react'
import Task from '../components/tasks/task';
import NewTask from '../components/tasks/newTask';
import TaskList from '../components/tasks/tasksList';
import { createStore } from 'redux';
import { connect } from 'react-redux'



class TasksContainer extends Component {

  constructor(){
    super()
    this.state = {
      tasks: [],
      completed: []
    }
  }


  //FETCH TASKS
  componentDidMount(){
    fetch('https://jarvis-back.herokuapp.com/tasks')
    .then(response => response.json())
    .then(tasks => this.setState({
      tasks: tasks
    }))
  }

  //ADD TASK
  handleNewTask = (task) => {
    debugger;
    fetch('https://jarvis-back.herokuapp.com/tasks', {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        note: task.note,
        user_id: task.user_id,
        done: false
      })
    })
    .then(response => response.json())
    .then(task => this.setState({
      tasks: [...this.state.tasks, task]
    }))
  }

  //COMPLETE TASK
  handleComplete = (newTask) => {
    const updatedTasks = this.state.tasks.map(task =>{
      if(task.id === newTask.id){
        // task.done = true;
          if(task.done === true){
            task.done = false
          }
          else{
            task.done = true
          }
        return task;
      }
      else{
        return task;
      }
    })

    const taskId = newTask.id
    fetch(`https://jarvis-back.herokuapp.com/tasks/${taskId}`, {
      method: "PATCH",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        done: true
      })
    })
    .then(response => response.json())
    .then(newTask => {
        this.setState({
        tasks: updatedTasks
    })})

  }

  //DELETE TASK
  handleDelete = (deletedTask) => {
    const updatedTasks = this.state.tasks.filter(task =>
      task.id !== deletedTask.id
    )

    let taskId = deletedTask.id
    fetch(`https://jarvis-back.herokuapp.com/tasks/${taskId}`, {
      method: "DELETE"
    })
    .then(this.setState({
      tasks: updatedTasks
    }))
  }


  render(){
    console.log("task props", this.props)
    //INCOMPLETE TASKS
    const userIncompleteTasks = this.state.tasks.filter(task =>
      (task.user_id === this.props.user.id)
    )

    const allTasks = userIncompleteTasks.map(task =>
      <li className="TasksUl"><Task key={task.id} task={task} handleComplete={this.handleComplete} handleDelete={this.handleDelete} /></li>
    )

    return (
      <div className="container">
        <h3><Icon link name="tasks" size="large"/>Tasks</h3>
        <List as="ul">{allTasks}</List>
        <NewTask user_id={this.props.user.id} addTask={this.handleNewTask}/>
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    user: store.currentUser
  }
}


export default connect(mapStateToProps, null)(TasksContainer);
