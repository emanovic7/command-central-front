import React from 'react';
import { connect } from 'react-redux';



class Geolocation extends React.Component {
  constructor(){
    super()
    this.state = {
      longitude: '',
      latitude: '',
      location: ''
    }
  }

  //FETCH COORDINATES
  componentDidMount(){
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

        const success = (position) => {
          this.setState({
             longitude: position.coords.longitude,
             latitude: position.coords.latitude
          });
        }

        const error = (err) => {
          console.warn(`ERROR(${err.code}): ${err.message}`);
        }

    if('geolocation' in navigator){
      navigator.geolocation.getCurrentPosition(success, error, options);
    } else {
      alert('geolocation not available.')
    }
  }



  render(){
      //GET ADDRESS USING REVERSE GEOLOCATION
    if(this.state.longitude && this.state.latitude){
      const API_KEY = "AIzaSyDlFzVIkqtTEuuhFi5ACR6OVx-YbtkVWOc";
      const LATITUDE = this.state.latitude;
      const LONGITUDE = this.state.longitude;
      fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${LATITUDE},${LONGITUDE}&result_type=neighborhood&key=${API_KEY}`)
      .then(response => response.json())
      //.then(data => this.props.setLocation([data.results[0].formatted_address), LATITUDE, LONGITUDE])
      .then(data => this.props.setLocation({
        location: data.results[0].formatted_address,
        latitude: LATITUDE,
        longitude: LONGITUDE
      }))

    }


    return(
      <div>
        
      </div>
    )
  }
}



const mapDispatchToProps = (dispatch) => {
  return{
    setLocation: (data) => {
      dispatch({type: "SET_LOCATION", location: data.location, latitude: data.latitude, longitude: data.longitude})
    }
  }
}


export default connect(null, mapDispatchToProps)(Geolocation)
