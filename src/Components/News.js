import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

  constructor(){
    super();
    this.state = {
      articles: [],
      loading: false
    }
  }

  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=0865ab20ea5f4f069e6c9954f7f4a49f"
    let data = await fetch(url);
    let parseddata = await data.json();
    console.log(parseddata);
    this.setState({articles:parseddata.articles})
  }
  render() {
    return (
      <div className = "container my-3">
        <h1>NewsDonkey Top HeadLines</h1>
        
        <div className="row my-3">
        {this.state.articles.map((element)=>{
          
          return  <div className="col-md-4" key={element.url}>
          <NewsItem  title={element.title?element.title.slice(0,45):""} desc={element.description?element.description.slice(0,88):""} 
          imgurl={element.urlToImage} 
          newsUrl={element.url}/>
        </div>
       
        })}
         
         
        </div>
      </div>
    )
  }
}

export default News
