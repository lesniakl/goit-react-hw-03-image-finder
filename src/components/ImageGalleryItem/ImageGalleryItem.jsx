import React, { Component } from 'react';

export default class ImageGalleryItem extends Component {
  render() {
    return (
      <li className="gallery-item">
        <img src={this.props.data.webformatURL} alt={this.props.data.tags} />
      </li>
    );
  }
}
