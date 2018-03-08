import React, { Component } from "react";
import "./product-page.css";

class ProductPage extends Component {
  render() {
    const item = this.props.item;
    const reviews = this.props.reviews;
    const itemSpecs = item.specs.map(spec => <li>{spec.toUpperCase()}</li>);
    const bio = item.itemBio.map(paragraph => <p>{paragraph}</p>);

    return (
      <div id="product-page">
        <div id="product-item">
          <div className="content-container">
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
                <ul class="item-specs">{itemSpecs}</ul>
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
      </div>
    );
  }
}

export default ProductPage;
