import React, { Component } from "react";
import Review from "../review/review";
import Modal from "../modal/modal";
import "./product-page.css";

class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewModal: false,
      quantity: 1
    };
  }

  increaseQuantity = () => {
    this.setState({ quantity: this.state.quantity + 1 });
  };

  decreaseQuantity = () => {
    if (this.state.quantity > 1) {
      this.setState({ quantity: this.state.quantity - 1 });
    }
  };

  reviewModal = () => {
    this.setState({ reviewModal: true });
  };

  toggleModal = event => {
    event.preventDefault();
    this.setState({ reviewModal: false });
  };

  render() {
    const item = this.props.item;
    const reviews = this.props.reviews.map((review, index) => (
      <Review key={index} review={review} />
    ));
    const itemSpecs = item.specs.map((spec, index) => (
      <li key={index}>{spec.toUpperCase()}</li>
    ));
    const bio = item.itemBio.map((paragraph, index) => (
      <p key={index}>{paragraph}</p>
    ));
    const sizes = item.sizes.map((size, index) => (
      <option key={index} value={size}>
        {size}
      </option>
    ));
    const colors = item.colors.map((color, index) => (
      <option key={index} value={color}>
        {color}
      </option>
    ));

    return (
      <div id="product-page">
        <div id="product-item">
          <div className="content-container">
            <div className="page-nav">
              <p className="category">Clothing</p> >
              <p className="current">Outerwear</p>
            </div>
            <div className="item-box">
              <div className="item-image-container">
                <img
                  className="item-image"
                  src={item.image}
                  alt={item.imageDescription}
                />
              </div>
              <div className="item-description">
                <h2>{item.name.toUpperCase()}</h2>
                <ul className="item-specs">{itemSpecs}</ul>
                <div className="item-buttons">
                  <form>
                    <div className="buttons-grid styled-select">
                      <select>
                        <option value="">Select Size</option>
                        {sizes}
                      </select>
                    </div>
                    <div className="buttons-grid styled-select">
                      <select>
                        <option value="">Select Color</option>
                        {colors}
                      </select>
                    </div>
                    <p className="quantity-title">Quantity</p>
                    <div className="buttons-grid">
                      <div className="product-quantity">
                        <img
                          className="decrease-quantity"
                          src="./assets/downarrow.png"
                          alt="decrease quantity"
                          onClick={this.decreaseQuantity}
                        />
                        <input
                          type="number"
                          name="quantity"
                          min="1"
                          max="20"
                          placeholder="1"
                          onChange={() => {}}
                          value={this.state.quantity}
                          step="1"
                        />
                        <img
                          className="increase-quantity"
                          src="./assets/uparrow.png"
                          alt="increase quantity"
                          onClick={this.increaseQuantity}
                        />
                      </div>
                    </div>
                    <div className="buttons-grid">
                      <button type="submit" value="submit">
                        Add to Cart
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="product-bio">
          <div className="content-container">
            <div className="bio-image-container">
              <img
                className="bio-image"
                src={item.secondaryImage}
                alt={item.imageDescription}
              />
            </div>
            <div className="bio-text-container">{bio}</div>
          </div>
        </div>
        <div id="reviews">
          <div className="content-container">
            <div className="review-header">
              <h3>Reviews</h3>
              <a onClick={this.reviewModal}>Write a review on this product</a>
            </div>
            <div className="user-reviews">{reviews}</div>
          </div>
        </div>
        <Modal
          reviewModal={this.state.reviewModal}
          product={item}
          toggleModal={this.toggleModal}
        />
      </div>
    );
  }
}

export default ProductPage;
