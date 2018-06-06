import React from 'react';
import Link from 'gatsby-link';

export default function Tags({ list = [] }) {
  return (
    <span className="tag-list">
      {list.map(tag =>
        <span key={tag}>
          <Link to={`/tags/${tag}`}>
            <span style={{
              paddingLeft : 5,
              paddingRight : 5,
              paddingTop : 2.5,
              paddingBottom : 2.5,
              background : '#4078c0',
              color : '#FFFFFF',
              borderRadius: 5
            }}>{tag}</span>
          </Link>&nbsp;
        </span>
      )}
    </span>
  );
}
