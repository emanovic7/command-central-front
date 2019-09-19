import React, { Component } from 'react';



class Weather extends Component {

  constructor(){
    super()
    this.state = {
      restaurants: ''
    }
  }


  handleWeatherFetch = () => {
    const API_KEY = "8a184aa8519f4a7c7742386e6cf699d8";
    let longitude = 42.3601
    let latitude = -71.0589

    fetch(`${'https://cors-anywhere.herokuapp.com/'}https://api.darksky.net/forecast/${API_KEY}/${latitude},${longitude}`)
    .then(response => response.json())
    .then(data => console.log(data))
  }


  render(){
    return(
      <div>
        <h1>Weather</h1><br />
        <button onClick={this.handleWeatherFetch}>get weather</button>
      </div>
    )
  }



}


export default Weather;
