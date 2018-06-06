import React from 'react';
import Link from 'gatsby-link';

export default function Tags({ list = [] }) {
  return (
    <span className="tag-list">
      {list.map(tag =>
        <span key={tag}>
          &nbsp;
          <Link to={`/tags/${tag}`}>
            <span data-cat={tag} style={{
              paddingLeft : 4,
              paddingRight : 4,
              paddingTop : 2,
              paddingBottom : 2,
              // background : '#4078c0',
              color : '#FFFFFF',
              borderRadius: 5
            }}>{tag}</span>
          </Link>
        </span>
      )}
    </span>
  );
}
