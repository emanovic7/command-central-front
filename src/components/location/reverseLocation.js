

import React, { Component } from 'react';


class ReverseLocation extends Component {

  constructor(){
    super();
    this.state = {
      location: ''
    }
  }

  componentDidMount(){
    const API_KEY = "AIzaSyDlFzVIkqtTEuuhFi5ACR6OVx-YbtkVWOc";

    fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=40.8356724,-73.9269466&result_type=neighborhood&key=${API_KEY}`)
    .then(response => response.json())
    .then(data => this.setState({
      location: data.results[0].formatted_address
    }))
    // .then(data => console.log(data.results[0].formatted_address))
  }




  render(){
    return (
      <div>
        <p> location: {this.state.location} </p>
      </div>
    )
  }
}


export default ReverseLocation;
