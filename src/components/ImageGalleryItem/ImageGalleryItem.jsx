import React, { Component } from 'react';
import css from './ImageGalleryItem.module.css';
import Modal from 'components/Modal/Modal';

export default class ImageGalleryItem extends Component {
  render() {
    return (
      <li className={css.ImageGalleryItem}>
        {this.props.isModalOpen && (
          <Modal
            url={this.props.data.largeImageURL}
            alt={this.props.tags}
            onModal={this.props.onModal}
          />
        )}
        <img
          src={this.props.data.webformatURL}
          alt={this.props.data.tags}
          className={css.ImageGalleryItemImage}
          onClick={this.props.onModal}
        />
      </li>
    );
  }
}
