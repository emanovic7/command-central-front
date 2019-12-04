import React, { Component } from 'react';
import Routes from '../components/routes/routes';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import { connect } from 'react-redux'



class RoutesContainer extends Component {

  constructor(){
    super()
    this.state = {
      start: '',
      end: '',
      mode: 'transit',
      data: []
    }
  }


  handleRoutesFetch = (event) => {
    console.log(this)
    const API_KEY = "AIzaSyDlFzVIkqtTEuuhFi5ACR6OVx-YbtkVWOc";
    let origin = this.state.start;
    let destination = this.state.end;
    let mode = this.state.mode

    fetch(`${'https://cors-anywhere.herokuapp.com/'}https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&mode=${mode}&key=${API_KEY}`)
    .then(response => response.json())
    .then(data => this.setState({
      data: data.routes[0].legs[0].steps
    }))
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.handleRoutesFetch()
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleModeChange = (event) => {
    this.setState({
      mode: event.target.value
    })
  }



  render(){
    console.log("state from routes", this.state)
    console.log("data from routes", this.state.data)
    console.log("props from routes", this.props)

    const sumTravelTime = () => {
      let sum = 0;
      this.state.data.forEach(info => {
        let number = parseInt(info.duration.text.split(' ')[0], 10);
        sum += number;
      })
      return sum;
    }

    return(
      <div>

        <div>
        <h1>Directions</h1><br />
          <select value={this.state.mode} onChange={this.handleModeChange}>
            <option value="transit">Transit</option>
            <option value="bike">Bike</option>
            <option value="drive">Drive</option>
          </select><br />

          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="text" placeholder="starting point" name="start" value={this.state.start} onChange={this.handleChange} />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Control type="text" placeholder="ending point" name="end" value={this.state.end} onChange={this.handleChange} />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>

          </Form>
        </div>
        <br />
        <div>
          {this.state.data.length ?
            <div className="travelSummary">
              <h6>summary</h6>
              <p>mode: {this.state.mode}</p>
              <p>travel time: {sumTravelTime()} mins</p>
            </div>
            :
            null}
          <ListGroup><Routes route={this.state.data} mode={this.state.mode}/></ListGroup>
        </div>
      </div>
    )
  }

}

  const mapStateToProps = (store) => {
    return {
      store: store
    }
  }

export default connect(mapStateToProps, null)(RoutesContainer);
