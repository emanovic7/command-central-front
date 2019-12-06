import React, { Component } from 'react';
import News from '../components/news/News';
import NewsBoard from '../components/news/newsBoard';





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

  //search news, new fetch? or fetch all and update?
  searchNews = () => {
    if(this.state.searchTerm){
      fetch(`https://newsapi.org/v2/top-headlines?q=${this.state.searchTerm}&apiKey=8aef1181042e4066a428c268e4e1078d`)
      .then(response => response.json())
      .then(data => this.setState({news: data.articles}))
    }else{
      alert("Please enter search term")
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.searchNews();
  }

  //adding comment to check git commit user




  render(){
    console.log("NewsContainer state", this.state)

    const allNews = this.state.news.map(news =>
      <News news={news}/>
    )

    const freshNews = this.state.news.map(news =>
      <NewsBoard news={news} />
    )

    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="searchTerm" onChange={this.handleChange} value={this.state.searchTerm}/>
          <input type="submit" />
        </form>
        <NewsBoard news={this.state.news} />
      </div>
    )
  }


}

export default NewsContainer;
