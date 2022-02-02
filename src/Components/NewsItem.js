import React, { Component } from 'react'

export class NewsItem extends Component {
 
  render() {
    let {title, desc, imgurl, newsUrl} = this.props;
    return (
        <div className="my-3">
          <div className="card" style={{width: "18rem"}}>
          <img src={!imgurl?"https://images.moneycontrol.com/static-mcnews/2021/06/Morning-Scan-14-770x433.jpg":imgurl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{desc}</p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
