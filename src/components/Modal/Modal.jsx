import React, { Component } from 'react';
import css from './Modal.module.css';

export default class Modal extends Component {
  handleKeyDown = e => {
    if (e.key === 'Escape') {
      this.props.onModal();
    }
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }
  render() {
    return (
      <div className={css.Overlay} onClick={this.props.onModal}>
        <div className={css.Modal}>
          <img src={this.props.url} alt={this.props.alt} />
        </div>
      </div>
    );
  }
}
