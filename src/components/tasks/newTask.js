import React, { Component } from 'react';




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
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="add task" name="note" value={this.state.note} onChange={this.handleChange} />
          <input type="submit" />
        </form>
      </div>
    )
  }
}


export default NewTask;
