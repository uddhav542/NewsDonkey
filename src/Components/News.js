import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
      <div className = "container my-3">
        <h2>NewsDonkey Top HeadLines</h2>
        <div className="row my-3">
          <div className="col-md-4">
              <NewsItem title='MyTitle' desc='This is first news Title' />
          </div>
          <div className="col-md-4">
              <NewsItem title='MyTitle' desc='This is first news Title' />
          </div>
          <div className="col-md-4">
              <NewsItem title='MyTitle' desc='This is first news Title' />
          </div>
        </div>
        <div className="row my-4">
          <div className="col-md-4">
              <NewsItem title='MyTitle' desc='This is first news Title' />
          </div>
          <div className="col-md-4">
              <NewsItem title='MyTitle' desc='This is first news Title' />
          </div>
          <div className="col-md-4">
              <NewsItem title='MyTitle' desc='This is first news Title' />
          </div>
        </div>
      </div>
    )
  }
}

export default News
