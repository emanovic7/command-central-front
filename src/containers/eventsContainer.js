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
      events: [],
      title: '',
      date: '',
      time: '',
      allDay: null
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/events')
    .then(response => response.json())
    .then(events => this.setState({
      events
    }))
  }

  addEvent = () => {
    let user_id = this.props.user_id
    fetch('http://localhost:3000/events', {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: this.state.title,
        date: this.state.date,
        time: this.state.time,
        allDay: this.state.allDay,
        user_id: user_id
      })
    })
    .then(res => res.json())
    .then(event => console.log(event))
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.addEvent()
    this.setState({
      title: '',
      date: '',
      allDay: null,
      time: ''
    })
  }

  render(){
    console.log(this.state.events)
    return(

      <div>
        <div style={{ height: '300pt', width: '400pt'}}>
          <Calendar
            events={this.state.events}
            localizer={localizer}
            startAccessor="start"
            endAccessor="end"
            defaultDate={moment().toDate()}
          />
        </div>
        <br /><br />
        <div>
          <h3>Add event</h3>
          <form onSubmit={this.handleSubmit}>
            <label >What's the event?</label>
            <input type="text" name="title" value={this.state.title} onChange={this.handleChange}/><br />

            <label >When?</label>
            <input type="date" name="date" value={this.state.date} onChange={this.handleChange}/><br />

            <label >What's the time frame?</label>
            <input type="time" name="time" value={this.state.time} onChange={this.handleChange}/><br />

            <label >All day?</label>
            <input type="boolean" name="allDay" value={this.state.allDay} onChange={this.handleChange}/><br />

            <input type="submit" value="add event"/>
          </form>
        </div>

      </div>
    )
  }
}


export default EventsContainer;
