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

    fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=40.7443057,-73.996217&result_type=neighborhood&key=${API_KEY}`)
    .then(response => response.json())
    .then(data => this.setState({
      location: data.results[0].formatted_address
    }))
    //.then(data => console.log(data.results[0].formatted_address))
    //.then(location => this.props.setLocation(location))
  }




  render(){
    console.log("reverseLocation props", this.props)
    return (
      <div>
        <p> location: {this.state.location} </p>
      </div>
    )
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    setLocation: (location) => {
      dispatch({type: 'SET_LOCATION', location: location})
    }
  }
}



export default connect(null, mapDispatchToProps)(ReverseLocation);
