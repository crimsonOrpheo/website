import Link from 'gatsby-link';
import React from 'react';
import Tags from '../../components/Taglist';

const NavigationItem = ({ depth, href, value, extract, tags, date, subtitle }) => (
  <dd
  style={{
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    maxWidth: 540,
    margin: 'auto'
  }}
  className={`depth-${depth}`}>
    <Link
      style={{
        color: 'white',
        fontWeight: 600
      }}
      to={href}>{value}</Link><br/>
      <small
      style={{
        color:'#bdc3c7'
        }}
      ><b>{subtitle}</b></small><br/>
      <small>{date} in<Tags list={tags}/></small>
    <small
    style={{
      color:'#bdc3c7'
      }}
    ><p><i>"{extract}"</i></p></small>
  </dd>
);

NavigationItem.defaultProps = {
  depth: 0,
};

export default NavigationItem;
