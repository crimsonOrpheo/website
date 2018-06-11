import Link from 'gatsby-link';
import React from 'react';

const NavigationItem = ({ depth, href, value, extract }) => (
  <dd
  style={{
    paddingLeft: 10,
    paddingRight: 10,
    maxWidth: 540,
    margin: 'auto'
  }}
  className={`depth-${depth}`}>
    <Link
      style={{
        color: 'white',
        fontWeight: 600
      }}
      to={href}>{value}</Link>
    <small><p>"{extract}"</p></small>
  </dd>
);

NavigationItem.defaultProps = {
  depth: 0,
};

export default NavigationItem;
