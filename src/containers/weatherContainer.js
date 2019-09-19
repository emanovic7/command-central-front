import React, { Component } from 'react';
import Weather from '../components/weather/Weather';



class WeatherContainer extends Component {

  constructor(){
    super()
    this.state = {
      weather: {}
    }
  }


  // componentDidMount(){
  //   fetch(`${'https://cors-anywhere.herokuapp.com/'}https://api.darksky.net/forecast/8a184aa8519f4a7c7742386e6cf699d8/42.3601,-71.0589?exclude=minutely,flags,daily`)
  //   .then(response => response.json())
  //   .then(data => this.setState({
  //     weather: data
  //   }))
  // }

  render(){
    console.log(this.state.weather)
    return(
      <div>
        {/*}<Weather weather={this.state.weather}/>*/}
      </div>
    )
  }
}

export default WeatherContainer;

//
// 8a184aa8519f4a7c7742386e6cf699d8
