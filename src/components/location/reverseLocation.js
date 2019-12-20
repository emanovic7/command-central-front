

import React, { Component } from 'react';


class ReverseLocation extends Component {

  constructor(){
    super();
    this.state = {
      city: '',
      country: ''
    }
  }

  componentDidMount(){
    const API_KEY = "AIzaSyDlFzVIkqtTEuuhFi5ACR6OVx-YbtkVWOc";

    fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=40.8356724,-73.9269466&key=${API_KEY}`)
    .then(response => response.json())
    .then(data => console.log(data))
  }




  render(){
    return (
      <div>
        <p> city: {this.state.city} </p>
        <p> country: {this.state.country} </p>
      </div>
    )
  }
}


export default ReverseLocation;
