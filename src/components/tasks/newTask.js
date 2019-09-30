import React, { Component } from 'react';
import TaskForm from '../tasks/taskForm';
import { List, Icon, Input, Button } from 'semantic-ui-react'




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
    console.log("from newTask", this.props)
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <Input type="text" value={this.state.note} name="note" placeholder="type here..." onChange={this.handleChange}/>
          <Input type="submit">Add Task</Input>
        </form>
      </div>
    )
  }
}


export default NewTask;
