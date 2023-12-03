import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import React, { Component } from 'react';

export default class ImageGallery extends Component {
  render() {
    return (
      <ul className="gallery">
        {this.props.images.map(image => (
          <ImageGalleryItem data={image} />
        ))}
      </ul>
    );
  }
}
