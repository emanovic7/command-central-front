import React from 'react';
import { connect } from 'react-redux';

class Geolocation extends React.Component {

  constructor(){
    super()
    this.state = {
      longitude: '',
      latitude: ''
    }
  }

  componentDidMount(){
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

        const success = (position) => {
          // this.setState({
          //    longitude: position.coords.longitude,
          //    latitude: position.coords.latitude
          // });
          this.props.setLatitude(position.coords.latitude)
          this.props.setLongitude(position.coords.longitude)
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

    return(
      <div>
        <p>Latitude: {this.state.latitude}</p>
        <p>Longitude: {this.state.longitude}</p>
      </div>
    )
  }

}



const mapDispatchToProps = (dispatch) => {
  return{
    setLatitude: (latitude) => {
      dispatch({type: "SET_LATITUDE", latitude: latitude})
    },
    setLongitude: (longitude) => {
      dispatch({type: "SET_LONGITUDE", longitude: longitude})
    }
  }
}






export default connect(null, mapDispatchToProps)(Geolocation)
