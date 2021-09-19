import React from 'react';
import PropTypes from 'prop-types';
import styles from './Home.module.css';

const Home = () => (
  <div className="row-fluid">
    <div className="col col-md-6 offset-md-3">
      <h1 className="text-center">
        Welcome to Home page
      </h1>
    </div>
  </div>
);

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
