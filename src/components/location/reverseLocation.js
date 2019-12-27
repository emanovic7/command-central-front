import React, { Component } from 'react';
import { connect } from 'react-redux';


class ReverseLocation extends Component {

  constructor(){
    super();
    this.state = {
      location: ''
    }
  }

  componentDidMount(){
    const API_KEY = "AIzaSyDlFzVIkqtTEuuhFi5ACR6OVx-YbtkVWOc";
    const LATITUDE = this.props.geolocation[1];
    const LONGITUDE = this.props.geolocation[0];
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${LATITUDE},${LONGITUDE}&result_type=neighborhood&key=${API_KEY}`)
    .then(response => response.json())
    // .then(data => this.setState({
    //   location: data.results[0].formatted_address
    // }))
    .then(data => console.log(data))
    //.then(location => this.props.setLocation(location))
  }




  render(){
    console.log("reverseLocation props", this.props)
    console.log("reverseLocation state", this.props.geolocation)
    return (
      <div>
        <p> location: {this.state.location} </p>
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    geolocation: store.geolocation
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setLocation: (location) => {
      dispatch({type: 'SET_LOCATION', location: location})
    }
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(ReverseLocation);
