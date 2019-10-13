import React, { Component } from 'react';




class Geolocation extends Component {


  render(){
    const getLocation = () => {
      if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition)
      }
      else {
        return "Geolocation is not supported by this browser.";
      }
    }

    const showPosition = () => {
      return "Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude;
    }

    
    return(
      <div>
        <p>Geolocation: {getLocation()}</p>
      </div>
    )
  }
}


export default Geolocation;
