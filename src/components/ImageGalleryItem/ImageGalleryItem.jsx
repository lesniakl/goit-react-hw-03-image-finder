import React, { Component } from 'react';
import css from './ImageGalleryItem.module.css';
import Modal from 'components/Modal/Modal';
import PropTypes from 'prop-types';

export default class ImageGalleryItem extends Component {
  render() {
    return (
      <li className={css.ImageGalleryItem}>
        {this.props.isModalOpen && (
          <Modal
            url={this.props.data.largeImageURL}
            alt={this.props.data.tags}
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

ImageGalleryItem.propTypes = {
  data: PropTypes.object.isRequired,
  onModal: PropTypes.func.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
};
