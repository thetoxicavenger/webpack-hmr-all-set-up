import React from 'react';
import styles from './App.css';

import {load} from 'webfontloader'
// https://github.com/typekit/webfontloader
import Button from 'react-md/lib/Buttons/Button'; // TODO this isn't working

const App = () => {
  load({
    google: {
      families: ['Roboto:300,400,500,700,400italic', 'Material Icons']
    }
  })
  return (
    <div className={styles.app}>
      <h2>Hello, Mike!</h2>
      <Button raised primary label="Spock" iconClassName="fa fa-hand-spock-o" />
    </div>
  )
}

export default App;
