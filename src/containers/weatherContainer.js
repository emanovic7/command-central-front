import React, { Component } from 'react';
import Weather from '../components/weather/Weather';
import FiveDayWeather from '../components/weather/Weather';



class WeatherContainer extends Component {

  constructor(){
    super()
    this.state = {
      weather: {},
      currently: {},
      daily: {}
    }
  }


  // componentDidMount(){
  //   fetch(`${'https://cors-anywhere.herokuapp.com/'}https://api.darksky.net/forecast/8a184aa8519f4a7c7742386e6cf699d8/42.3601,-71.0589?exclude=minutely,flags,hourly`)
  //   .then(response => response.json())
  //   .then(data => this.setState({
  //     weather: data,
  //     currently: data.currently,
  //     daily: data.daily
  //   }))
  // }

  render(){
    // const fiveDayWeather = Object.entries(this.state.daily).map((weather, idx) =>
    //   <FiveDayWeather key={idx} weather={weather} />
    // )

    console.log(this.state)
    return(
      <div>
        <h2>weather</h2>
        <Weather
          currently={this.state.currently}
        />
        <h2>Five Day Forecast</h2>

      </div>
    )
  }
}

export default WeatherContainer;

//
// 8a184aa8519f4a7c7742386e6cf699d8
