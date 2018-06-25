import React from 'react';
import Link from 'gatsby-link';
import '../styles/tagPills.css'

export default function Tags({ list = [] }) {
  return (
    <span className="tag-list">
      {list.map(tag =>
        <span key={tag}>
          &nbsp;
          <Link to={`/tags/${tag.toLowerCase()}/`}>
            <span className="tagPill" data-cat={tag} style={{
            }}>{tag}</span>
          </Link>
        </span>
      )}
    </span>
  );
}
