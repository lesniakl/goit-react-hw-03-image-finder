import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import React, { Component } from 'react';
import { ThreeDots } from 'react-loader-spinner';

export default class ImageGallery extends Component {
  render() {
    return (
      <ul className="gallery">
        {this.props.images.map(image => (
          <ImageGalleryItem key={image.id} data={image} />
        ))}
        {this.props.isLoading && (
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#4fa94d"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        )}
      </ul>
    );
  }
}
