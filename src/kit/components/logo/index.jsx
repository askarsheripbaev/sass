import React from 'react';
import LogoIcon from './../../shared/images/ozon-logo.png'
import styles from "./style.module.css";

const Logo = () => {
  return (
    <a href="/" className={styles.logo}>
      <img src={LogoIcon} alt="Ozon Logo" className="logo-icon" />
    </a>
  );
};

export default Logo;