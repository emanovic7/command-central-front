import React, { Component } from 'react';
import Favorite from '../components/favorites/favorite';




class FavoritesContainer extends Component {

  constructor(){
    super()
    this.state = {
      favorites: []
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/favorites')
    .then(response => response.json())
    .then(favorites => this.setState({
      favorites
    }))
  }

  // addFavorite = (favorite) => {
  //   debugger;
  //
  //   fetch('http://localhost:3000/favorites',{
  //     method: "POST",
  //     headers: {
  //       "Accept": "application/json",
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify({
  //       name: '',
  //       type: '',
  //       user_id: ''
  //     })
  //   })
  //   .then(response => response.json())
  //   .then(favorite => this.setState({
  //     favorites: [...this.state.favorites, favorite]
  //   }))
  // }


  render(){

    const userFavorites = this.state.favorites.filter(favorite =>
      favorite.user_id = this.props.user_id
    )

    const favorites = userFavorites.map(favorite =>
      <Favorite favorite={favorite} />
    )

    return(
      <div>
        {favorites}
      </div>
    )
  }
}


export default FavoritesContainer;
