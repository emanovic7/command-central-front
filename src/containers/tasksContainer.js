import React, { Component } from 'react';
import Task from '../components/tasks/task';
import NewTask from '../components/tasks/newTask';



class TasksContainer extends Component {

  constructor(){
    super()
    this.state = {
      tasks: [],
      completed: [],
      user_id: ''
    }
  }


  //FETCH TASKS
  componentDidMount(){
    fetch('http://localhost:3000/tasks')
    .then(response => response.json())
    .then(tasks => this.setState({
      tasks: tasks
    }))
  }

  //ADD TASK
  handleNewTask = (task) => {
    fetch('http://localhost:3000/tasks', {
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
        task.done = true;
        return task;
      }
      else{
        return task;
      }
    })

    const taskId = newTask.id
    fetch(`http://localhost:3000/tasks/${taskId}`, {
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
    fetch(`http://localhost:3000/tasks/${taskId}`, {
      method: "DELETE"
    })
    .then(this.setState({
      tasks: updatedTasks
    }))
  }


  render(){

    //INCOMPLETE TASKS
    const userIncompleteTasks = this.state.tasks.filter(task =>
      (task.user_id === this.props.user_id)
    )

    const allTasks = userIncompleteTasks.map(task =>
      <li><Task key={task.id} task={task} handleComplete={this.handleComplete} handleDelete={this.handleDelete} /></li>
    )

    return (
      <div>
        <h2 className="tasksHeader">tasks</h2>
        <ul className="tasksList">{allTasks}</ul>
        <NewTask addTask={this.handleNewTask} user_id={this.props.user_id}/>
      </div>
    )
  }
}


export default TasksContainer;
