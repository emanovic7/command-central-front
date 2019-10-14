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
        {this.props.setLatittude}
      </div>
    )
  }

}

const mapStateToProps = (store) => {
  return{
    user: store.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    setLatittude: () => {
      dispatch({type: "SET_LATITUDE", latitude: 'latitudeas'})
    }
  }
}



export default (mapStateToProps, mapDispatchToProps)(Geolocation)
