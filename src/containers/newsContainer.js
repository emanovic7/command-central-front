import React, { Component } from 'react';
import News from '../components/news/News';




class NewsContainer extends Component {

  constructor(){
    super();
    this.state ={
      news: [],
      searchTerm: ''
    }
  }

  componentDidMount(){
    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=8aef1181042e4066a428c268e4e1078d')
    .then(response => response.json())
    .then(data => this.setState({news: data.articles}))
    //.then(data => console.log(data))
  }





  render(){
    const allNews = this.state.news.map(news =>
      <News news={news}/>
    )

    return(
      <div>
        <h1>News</h1>
        {allNews}
      </div>
    )
  }


}

export default NewsContainer;
