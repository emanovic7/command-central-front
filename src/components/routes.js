import React, { Component } from 'react';



class Routes extends Component {

  constructor(){
    super()
    this.state = {
      restaurants: ''
    }
  }


  handleRoutesFetch = () => {
    const API_KEY = "AIzaSyDlFzVIkqtTEuuhFi5ACR6OVx-YbtkVWOc"

    fetch(`${'https://cors-anywhere.herokuapp.com/'}https://maps.googleapis.com/maps/api/directions/json?origin=Brooklyn&destination=Queens&mode=transit&key=${API_KEY}`)
    .then(response => response.json())
    .then(data => console.log(data))
  }


  render(){
    return(
      <div>
        <h1>Routes</h1><br />
        <button onClick={this.handleRoutesFetch}>get destination</button>
      </div>
    )
  }



}


export default Routes;
