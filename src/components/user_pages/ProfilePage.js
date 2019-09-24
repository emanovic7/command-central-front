import React, { Component, Fragment } from 'react';
import SpacingGrid from '../../components/spacingGrid';


//CONTAINERS
import TasksContainer from '../../containers/tasksContainer';
import RestaurantsContainer from '../../containers/restaurantsContainer';
import WeatherContainer from '../../containers/weatherContainer';
import RoutesContainer from '../../containers/routesContainer';

class ProfilePage extends Component {

  constructor(props){
    super(props)
    this.state = {
      username: '',
      user_id: '',
      component: ''
    }
  }



  handleLogout = () => {
    localStorage.clear()
    this.props.history.push('/login')
  }

  changeComponent = (component) => {
    this.setState({
      component: component
    })
  }

  render(){
    console.log(this.state)

    switch (this.state.component) {
      case 'toDo':
        return <TasksContainer user_id={this.props.user_id} username={this.props.username} />
      case 'restaurants':
        return <RestaurantsContainer user_id={this.props.user_id} username={this.props.username} />
      case 'weather':
        return <WeatherContainer />
      case 'maps':
        return <RoutesContainer />

      default:
        return (
          <React.Fragment>
            <div>
              <button onClick={this.handleLogout}>Logout</button>
              {this.props.username ? <h2>Welcome {this.props.username}!</h2> : <h2>getting your info...</h2>}
            </div>
            <SpacingGrid changeComponent={this.changeComponent}/>
          </React.Fragment>
        )
    }

  }
}



export default ProfilePage;
