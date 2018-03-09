import React, { Component } from "react";
import "./modal.css";

class Modal extends Component {
  render() {
    if (!this.props.reviewModal) {
      return null;
    }

    return (
      <div id="review-modal">
        <div id="modal-background" onClick={this.props.toggleModal} />
        <form onSubmit={this.props.toggleModal}>
          <div className="rating-selection">
            <h4>
              Please Rate the{" "}
              <span className="review-product-name">
                {this.props.product.name}
              </span>
            </h4>
            <div className="star-selection">
              <span className="rating">
                <input
                  type="radio"
                  className="rating-input"
                  id="rating-input-1-5"
                  name="rating-input-1"
                />
                <label htmlFor="rating-input-1-5" className="rating-star" />
                <input
                  type="radio"
                  className="rating-input"
                  id="rating-input-1-4"
                  name="rating-input-1"
                />
                <label htmlFor="rating-input-1-4" className="rating-star" />
                <input
                  type="radio"
                  className="rating-input"
                  id="rating-input-1-3"
                  name="rating-input-1"
                />
                <label htmlFor="rating-input-1-3" className="rating-star" />
                <input
                  type="radio"
                  className="rating-input"
                  id="rating-input-1-2"
                  name="rating-input-1"
                />
                <label htmlFor="rating-input-1-2" className="rating-star" />
                <input
                  type="radio"
                  className="rating-input"
                  id="rating-input-1-1"
                  name="rating-input-1"
                />
                <label htmlFor="rating-input-1-1" className="rating-star" />
              </span>
            </div>
          </div>
          <div className="review-title-container">
            <h4>Review Title:</h4>
            <input className="review-title-input" type="text" />
          </div>
          <div className="review-text-container">
            <textarea placeholder=" - Write your review here - " />
          </div>
          <button className="review-submit" type="submit" name="submit">
            Submit Review
          </button>
        </form>
      </div>
    );
  }
}

export default Modal;
