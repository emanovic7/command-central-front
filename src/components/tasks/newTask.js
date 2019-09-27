import React, { Component } from 'react';
import TaskForm from '../tasks/taskForm'




class NewTask extends Component {

  constructor(){
    super()
    this.state = {
      note: '',
      user_id: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      note: event.target.value,
      user_id: this.props.user_id
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addTask(this.state)
    this.setState({
      note: ''
    })
  }

  render(){
    return(
      <div>
        <TaskForm />
      </div>
    )
  }
}


export default NewTask;
