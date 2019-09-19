import React from 'react';



const Weather = (props) => {
  console.log(props.weather)

  const currently = props.weather.currently;
  const hourly = props.weather.hourly
  console.log("Currently", currently)
  console.log("Hourly", hourly)

  return(
    <div>
      <p>Time: {props.weather.timezone}</p>

    </div>
  )
}


export default Weather;
