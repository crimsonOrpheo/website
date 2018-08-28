import React from 'react';
import Link from 'gatsby-link';
import '../styles/tagPills.css'
import { simpleEvent } from '../utils/digital-analytics'

export default function Tags({ list = [] }) {
  return (
    <span className="tag-list">
      {list.map(tag =>
        <span key={tag}>
          &nbsp;
          <Link to={`/tags/${tag.toLowerCase()}/`} onClick={() => simpleEvent('Tags',tag)}>
            <span className="tagPill" data-cat={tag}>{tag}</span>
          </Link>
        </span>
      )}
    </span>
  );
}
