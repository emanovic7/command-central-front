import React, { Component } from 'react';
import Weather from '../components/weather/Weather';
import FiveDayWeather from '../components/weather/fiveDay';
import WeatherBoard from '../components/weather/weatherBoard';



class WeatherContainer extends Component {

  constructor(){
    super()
    this.state = {
      weather: {},
      currently: {},
      daily: []
    }
  }


  componentDidMount(){
    fetch(`${'https://cors-anywhere.herokuapp.com/'}https://api.darksky.net/forecast/8a184aa8519f4a7c7742386e6cf699d8/42.3601,-71.0589?exclude=minutely,flags,hourly`)
    .then(response => response.json())
    .then(data => this.setState({
      weather: data,
      currently: data.currently,
      daily: data.daily.data
    }))
  }

  render(){
    console.log(this.state.weather)
    console.log(this.state.daily)
    console.log(this.state.currently)

    const fiveDayForecast = this.state.daily.map(weather =>
      <FiveDayWeather weather={weather} />
    )
    console.log(fiveDayForecast)
    return(
      <div>
        <h2>weather</h2>

        <Weather
          currently={this.state.currently}
        />
        <h2>Five Day Forecast</h2>

        <div><FiveDayWeather weather={this.state.daily} /></div>
      </div>
    )
  }
}

export default WeatherContainer;

//
// 8a184aa8519f4a7c7742386e6cf699d8
