import React, { Component } from "react";
import "./submenu.css";

class Submenu extends Component {
  render() {
    const items = this.props.items.map((item, index) => {
      return (
        <li key={index} className="submenu-item">
          {item}
        </li>
      );
    });
    return (
      <div className="submenu">
        <ul>{items}</ul>
      </div>
    );
  }
}

export default Submenu;
