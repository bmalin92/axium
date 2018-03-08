import React, { Component } from "react";
import "./review.css";

class Review extends Component {
  render() {
    const review = this.props.review;
    return (
      <div className="review">
        <div className="user-container">
          <img
            className="item-image"
            src={review.authorPicture}
            alt={review.authorName}
          />
          <p className="author">{review.authorName}</p>
        </div>
        <div className="review-container">
          <div className="review-healine">
            <h3>{review.title}</h3>
            <h4>{review.date}</h4>
            <div className="stars">{review.stars}</div>
          </div>
          <div className="review-text">
            <p>{review.review}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Review;
