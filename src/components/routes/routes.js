import React, { Component } from 'react';


const Routes = (props) => {
  console.log(props.route.map(route =>
    console.log(route.html_instructions)
  ))
  return(
    <div>
      {props.route.map(route =>
        <li>{route.html_instructions}</li>
      )}
    </div>
  )
}


export default Routes;
