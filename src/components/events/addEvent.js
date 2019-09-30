import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'



class AddEvent extends Component {

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
        start: this.state.start,
        end: this.state.end,
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
      allDay: '',
      start: '',
      end: ''
    })
  }



  render(){
    return(
      <div>
        <h3 align="center">Add Event</h3>
        <Form>
          <Form.Group>
            <Form.Label>Event</Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <Form.Group>
            <Form.Label>Start</Form.Label>
            <Form.Control type="date" />
          </Form.Group>

          <Form.Group>
            <Form.Label>End</Form.Label>
            <Form.Control type="date" />
          </Form.Group>

          <fieldset>
            <Form.Label as="legend">All Day?</Form.Label>
            <Col>
              <Form.Check type="radio" label="true" name="true" id="true"/>
            </Col>
            <Col>
              <Form.Check type="radio" label="false" name="false" id="false"/>
            </Col>
          </fieldset>

          <Form.Group>
            <Col>
              <Button type="submit">Add Event</Button>
            </Col>
          </Form.Group>

        </Form>
      </div>
    )
  }
}


export default AddEvent;
