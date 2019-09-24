import React from 'react';



const Weather = (props) => {

  return(
    <div>
      <p>Summary: {props.currently.summary}</p>
      <p>Temperature: {props.currently.temperature}</p>
      <p>Humidity: {props.currently.humidity}</p>
    </div>
  )
}


export default Weather;
