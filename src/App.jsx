import React from 'react';
import styles from './App.module.scss';
import pokemon from './assets/images/1.png';

function App() {
  return (
    <div className={styles.main}>
      <h2 className={`${styles.header}`}>Welcome to React Template with Webpack5</h2>
      <img className={styles.image} src={pokemon} alt="" />
    </div>
  );
}

export default App;
