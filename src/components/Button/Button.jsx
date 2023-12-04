import React, { Component } from 'react';
import css from './Button.module.css';

export default class Button extends Component {
  render() {
    return (
      <button type="button" className={css.Button} onClick={this.props.onMore}>
        Load more
      </button>
    );
  }
}
