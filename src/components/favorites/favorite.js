import React from 'react';




const Favorite = (props) => {

  return (
    <div>
      <p>{props.favorite.name}</p>
      <p>{props.favorite.phone}</p>
      <p>{props.favorite.city}</p>
    </div>
  )
}


export default Favorite;
