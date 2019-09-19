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
        <div>
          <button onClick={this.handleButtonSelect}>News</button><br />
          <button onClick={this.handleButtonSelect}>Directions</button><br />
          <button onClick={this.handleButtonSelect}>Food</button><br />
          <button onClick={this.handleButtonSelect}>Stocks</button><br />
          <button onClick={this.handleButtonSelect}>Sports</button><br />
        </div>

        <div > {/* Elements */}
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
