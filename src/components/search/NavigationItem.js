import Link from 'gatsby-link';
import React from 'react';

const NavigationItem = ({ depth, href, value, extract }) => (
  <dd className={`depth-${depth}`}>
    <Link to={href}>{value}</Link>
    <small><p>"{extract}"</p></small>
  </dd>
);

NavigationItem.defaultProps = {
  depth: 0,
};

export default NavigationItem;
