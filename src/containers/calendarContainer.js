import React, { Component } from 'react';
import Calendar from 'react-calendar';




class CalendarContainer extends Component {

  constructor(){
    super()
    this.state = {
      date: new Date()
    }
  }

  handleChange = (date) => {
    this.setState({
      date
    })
  }

  render(){
    console.log(this.state.date)
    return(
      <div>
        <Calendar
          onChange={this.handleChange}
          value={this.state.date}
        />
      </div>
    )
  }

}

export default CalendarContainer;
