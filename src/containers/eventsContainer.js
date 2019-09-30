import React, { Component } from 'react';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//COMPONENTS
import AddEvent from '../components/events/addEvent';


moment.locale("en");
const localizer = momentLocalizer(moment);

class EventsContainer extends Component {
  constructor(){
    super();
    const now = new Date();
    this.state = {
      events: [],
      title: '',
      date: '',
      start: '',
      end: '',
      allDay: ''
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/events')
    .then(response => response.json())
    .then(events => this.setState({
      events
    }))
  }

  handleDoubleClick = () => {
    console.log("double clicked")
  }

  render(){
    console.log(this.state.events)
    return(
      <div>
        <Container >
          <Row>
            <Col sm={8}>
              <div style={{ height: '300pt', width: '500pt'}}>
                <Calendar
                  onDoubleClick={() => this.handleDoubleClick()}
                  events={this.state.events}
                  localizer={localizer}
                  startAccessor="start"
                  endAccessor="end"
                  defaultDate={moment().toDate()}
                />
              </div>
            </Col>

            <Col sm={4}>
            <div>
                <AddEvent />
            </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}


export default EventsContainer;
