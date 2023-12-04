import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import React, { Component } from 'react';
import css from './ImageGallery.module.css';

export default class ImageGallery extends Component {
  render() {
    return (
      <ul className={css.ImageGallery}>
        {this.props.images.map(image => (
          <ImageGalleryItem key={image.id} data={image} />
        ))}
      </ul>
    );
  }
}
