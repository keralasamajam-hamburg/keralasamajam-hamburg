import React from 'react';
import styles from './Header.module.scss';
import ksh from '../../assets/images/ksh.png';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <Link to="/">
      <div className={styles.header}>
        <img src={ksh} alt="" />
        <div className={styles.text}>
          <h1>{process.env.REACT_APP_NAME}</h1>
          <h3>Kerala Samajam e.V., Hamburg</h3>
        </div>
      </div>
    </Link>
  );
};
export default Header;
