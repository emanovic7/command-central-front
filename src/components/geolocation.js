import React from 'react';
import { connect } from 'react-redux';

class Geolocation extends React.Component {

  render(){
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    const success = (position) => {
      var coords = position.coords;
    }

    const error = (err) => {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error, options);

    return(
      <div>
        <p>longitude: {coords.longitude}</p>
        <p>latitude: {coords.latitude}</p>
        <p>accuracy: {coords.accuracy}</p>
      </div>
    )
  }

}


export default Geolocation
