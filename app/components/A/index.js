/**
 * A link to a certain page, an anchor tag
 */

import React, { PropTypes } from 'react';

import styles from './styles.css';

class A extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    href: PropTypes.string.isRequired,
    target: PropTypes.string,
    children: PropTypes.any,
  }
  render() {
    return (
      <a
        className={
          this.props.className || styles.link
        }
        href={ this.props.href }
        target={ this.props.target }
      >
        { this.props.children }
      </a>
    );
  }
}

export default A;
