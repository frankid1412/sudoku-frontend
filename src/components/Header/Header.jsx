import React from 'react';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoBox}>
        <h1>Toolsmart</h1>
      </div>
    </header>
  );
}


export default Header;
