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

  componentDidMount(){
    fetch('http://localhost:3000/tasks')
    .then(response => response.json())
    .then(tasks => this.setState({
      tasks: tasks
    }))
  }



  handleComplete = (newTask) => {


    const taskId = newTask.id
    fetch(`http://localhost:3000/tasks/${taskId}`, {
      method: "PATCH",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        done: !newTask.done
      })
    })
    .then(response => response.json())
    .then(newTask => this.setState({
        completed: [...this.state.completed, newTask]
    }))

    const updatedTasks = this.state.tasks.filter(task =>
      task !== newTask
    )

    const completedTasks = this.state.tasks.filter(task =>
      (task.user_id === this.props.user_id && task.done === true)
    )

    this.setState({
      tasks: updatedTasks,
      completed: completedTasks
    })
  }



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

  handleDelete = (task) => {
    let taskId = task.id
    fetch(`http://localhost:3000/tasks/${taskId}`, {
      method: "DELETE"
    })
  }



  render(){

    //INCOMPLETE TASKS
    const userIncompleteTasks = this.state.tasks.filter(task =>
      (task.user_id === this.props.user_id && task.done === false)
    )
    //COMPLETED TASKS
    const userCompletedTasks = this.state.tasks.filter(task =>
      (task.user_id === this.props.user_id && task.done === true)
    )

    const allTasks = userIncompleteTasks.map(task =>
      <li><Task key={task.id} task={task} handleClick={this.handleComplete} /></li>
    )
    //
    const completedTasks = userCompletedTasks.map(task =>
      <li><Task key={task.id} task={task} handleClick={this.handleComplete} /><button onClick={() => this.handleDelete(task)}>X</button></li>
    )
    //
    console.log("all tasks", this.state.tasks)
    console.log("incomplete", userIncompleteTasks)
    console.log("complete", this.state.completed)

    return (
      <div>
        <h2 className="tasksHeader">tasks</h2>
        <ul className="tasksList">{allTasks}</ul>
        <NewTask addTask={this.handleNewTask} user_id={this.props.user_id}/>

        <h2>completed</h2>
        <ul>{completedTasks}</ul>
      </div>
    )
  }
}


export default TasksContainer;
