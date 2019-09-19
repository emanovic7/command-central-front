import React from 'react';



const News = (props) => {
  return(
    <div>
      <a target="_blank" and rel="noopener noreferrer" href={props.news.url}>{props.news.title}</a>
    </div>
  )
}


export default News;
