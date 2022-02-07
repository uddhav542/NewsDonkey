import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, desc, imgurl, newsUrl, author, date, source } = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={
              !imgurl
                ? "https://images.moneycontrol.com/static-mcnews/2021/06/Morning-Scan-14-770x433.jpg"
                : imgurl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              {title}....
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {source}              </span>
            </h5>
            <p className="card-text">{desc}....</p>
            <p class="card-text">
              by {!author ? "Unknown" : author} on{" "}
              {new Date(date).toUTCString()}
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-primary"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
