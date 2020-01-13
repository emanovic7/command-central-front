import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { connect } from 'react-redux';


//COMPONENTS
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
    const URL = 'https://api.darksky.net/forecast/8a184aa8519f4a7c7742386e6cf699d8/';
    const HEROKUPASS = 'https://cors-anywhere.herokuapp.com/'
    fetch(`${HEROKUPASS}${URL}${this.props.latitude},${this.props.longitude}?exclude=minutely,flags,hourly`)
    .then(response => response.json())
    .then(data => this.setState({
      weather: data,
      currently: data.currently,
      daily: data.daily.data
    }))
    //.then(data => console.log(data))
  }



  render(){
    console.log("latitude", this.props.latitude)
    console.log("longitude", this.props.longitude)

    const fiveDayForecast = this.state.daily.map(weather =>
      <FiveDayWeather weather={weather} />
    )
    console.log(fiveDayForecast)
    return(
      <div className="WeatherContainer">
        <Container>

          <Row>
            <Weather
              currently={this.state.currently}
            />
          </Row><br />
        <h2 align="center">five day forecast</h2><br />
          <Row>
            <div><FiveDayWeather weather={this.state.daily} /></div>
          </Row>
        </Container>
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    latitude: store.geolocation.latitude,
    longitude: store.geolocation.longitude
  }
}

export default connect(mapStateToProps, null)(WeatherContainer);

//
// 8a184aa8519f4a7c7742386e6cf699d8
