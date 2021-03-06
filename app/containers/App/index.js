/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';

import Img from 'Img';
import Footer from 'Footer';
import Logo from './logo.png';
import A from 'A';

import styles from './styles.css';

class App extends React.Component {
    render() {
        return (
      <div className={ styles.wrapper }>
        <A
          className={ styles.logoWrapper }
          href="https://twitter.com/mxstbr"
        >
          <Img
            className={styles.logo}
            src={Logo}
            alt="Max Stoiber - Logo"
          />
        </A>
        { this.props.children }
        <Footer />
      </div>
    );
    }
}

export default App;
