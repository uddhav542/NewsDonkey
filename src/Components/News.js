import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'

export class News extends Component {

  constructor(){
    super();
    this.state = {
      articles: [],
      loading: false,
      page:1
    }
  }

  async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=0865ab20ea5f4f069e6c9954f7f4a49f&page=1&pagesize=${this.props.pageSize}`;
    this.setState({loading: true})
    let data = await fetch(url);
    let parseddata = await data.json();
    this.setState({loading: false})
    console.log(parseddata);
    this.setState({articles:parseddata.articles, totalResults: parseddata.totalResults})
  }

  
  handleNextClick = async ()=>{
    if (this.state.page + 1 > Math.ceil((this.state.totalResults/this.props.pageSize)))
    {

    }
    else{
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=0865ab20ea5f4f069e6c9954f7f4a49f&page=${this.state.page + 1}&pagesize=${this.props.pageSize}`;
      this.setState({loading: true})
      let data = await fetch(url);
      let parseddata = await data.json();
      this.setState({loading: false})

  
      this.setState({
          page:this.state.page + 1,
          articles:parseddata.articles
      })
    }
    
  }

  handlePrevClick = async ()=>{

    let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=0865ab20ea5f4f069e6c9954f7f4a49f&page=${this.state.page - 1}&pagesize=${this.props.pageSize}`;
    this.setState({loading: true})
    let data = await fetch(url);
    let parseddata = await data.json();
    this.setState({loading: false})

    this.setState({
        page:this.state.page - 1,
        articles:parseddata.articles
    })
  }
  render() {
    return (
      <div className = "container my-3">
        
        <h1 className ="text-center">NewsDonkey Top HeadLines</h1>
        {this.state.loading && <Spinner/>}
        <div className="row my-3">
        {!this.state.loading && this.state.articles.map((element)=>{
          
          return  <div className="col-md-4" key={element.url}>
          <NewsItem  title={element.title?element.title.slice(0,45):""} desc={element.description?element.description.slice(0,88):""} 
          imgurl={element.urlToImage} 
          newsUrl={element.url}/>
        </div>
       
        })}
        </div>
        <div className="container d-flex justify-content-between">
            <button disabled={this.state.page<=1} type="button" className="btn btn-info mx-3" onClick={this.handlePrevClick}>&larr; Previous</button>
            <button disabled= {this.state.page + 1 > Math.ceil((this.state.totalResults/this.props.pageSize))} type="button" className="btn btn-info mx-3" onClick={this.handleNextClick}>Next &rarr;</button>          
        </div>
      </div>
    )
  }
}

export default News
