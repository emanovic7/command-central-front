import React, { Component } from 'react';
import Routes from '../components/routes/routes';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';



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
          <ListGroup><Routes route={this.state.data} mode={this.state.mode}/></ListGroup>
        </div>
      </div>
    )
  }

}


export default RoutesContainer;


// <form onSubmit={this.handleSubmit}>
//   <input type="text" placeholder="starting point" name="start" value={this.state.start} onChange={this.handleChange}/><br />
//   <input type="text" placeholder="ending point" name="end" value={this.state.end} onChange={this.handleChange}/><br />
//   <input type="submit" value="get directions" />
// </form>
