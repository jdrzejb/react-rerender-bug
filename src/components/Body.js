import React from 'react';
import styles from './Body.css';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

const Body = ({ children }) => <div>{children}</div>


Body.propTypes = {
  children: PropTypes.node
};

export default CSSModules(Body, styles);
