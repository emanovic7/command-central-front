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

  render(){
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    const success = (position) => {
      this.setState({
        longitude: position.coords.longitude,
        latitude: position.coords.latitude
      })
    }

    const error = (err) => {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error, options);

    return(
      <div>
        geolocation
      </div>
    )
  }

}

const mapStateToProps = (store) => {
  return{
    user: store.user,
    latitude: store.latitude
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    setLatittude: () => {
      dispatch({type: "SET_LATITUDE", latitude: 'latitudeas'})
    }
  }
}






export default connect(mapStateToProps, mapDispatchToProps)(Geolocation)
