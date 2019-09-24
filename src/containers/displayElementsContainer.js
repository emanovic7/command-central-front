import React, { Component } from 'react';

//Containers
import NewsContainer from '../containers/newsContainer';
import RoutesContainer from '../containers/routesContainer';


class DisplayElementsContainer extends Component {

  constructor(){
    super()
    this.state = {
      selectedButton: 'News'
    }
  }


  handleButtonSelect = (event) => {
    this.setState({
      selectedButton: event.target.innerText
    })

  }


  render(){
    return(
      <div>


        <div >
              <h1 className="">{this.state.selectedButton}</h1>
          {this.state.selectedButton === '' ? <NewsContainer /> :
          this.state.selectedButton === "News" ? <NewsContainer /> :
          this.state.selectedButton === "Food" ? <p>grup</p> :
          this.state.selectedButton === "Directions" ? <RoutesContainer /> :
          this.state.selectedButton === "Sports" ? <p>sports</p> :
            "nothing selected"
          }
        </div>
      </div>
    )
  }


}

export default DisplayElementsContainer;
