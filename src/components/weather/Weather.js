import React from 'react';


const getDate = (time) => {
 let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
 let newDate = new Date(time*1000)
 let dayOfWeek = days[newDate.getDay()]
 return newDate.toString();
}

const Weather = (props) => {
console.log(props)
  return(
    <div align="center">
      <p>{props.time}</p>
      <p>Summary: {props.currently.summary}</p>
      <p>Temperature: {props.currently.temperature}</p>
      <p>Humidity: {props.currently.humidity}</p>
    </div>
  )
}


export default Weather;
