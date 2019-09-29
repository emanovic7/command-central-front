import React, { Component } from 'react';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

class EventsContainer extends Component {


  constructor(){
    super();
    const now = new Date();
    this.state = {
      events: []
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/events')
    .then(response => response.json())
    .then(events => this.setState({
      events
    }))
  }

  render(){
    console.log(this.state.events)
    return(
      <div style={{ height: '500pt'}}>
        <Calendar
          events={this.state.events}
          localizer={localizer}
          startAccessor="start"
          endAccessor="end"
          defaultDate={moment().toDate()}
        />
      </div>
    )
  }
}


export default EventsContainer;
