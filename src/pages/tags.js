import React from "react";
import PropTypes from "prop-types";
import '../styles/tagPills.css'
import { rhythm, scale } from '../utils/typography'
// Utilities
import kebabCase from "lodash/kebabCase";

// Components
import Helmet from "react-helmet";
import Link from "gatsby-link";

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <div>
    <Helmet title={title} />
    <div>
      <h1
        style={{
        marginBottom: rhythm(2)
      }}
      >Tags</h1>
      <div>
        {group.map(tag => (
          <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
            <span className="tagPill" data-cat={tag.fieldValue} key={tag.fieldValue} style={{marginRight: 10, marginBottom: 10, display:'inline-block'}}>
              {tag.fieldValue} ({tag.totalCount})
              </span>
          </Link>))}
      </div>
    </div>
  </div>
);

TagsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
};

export default TagsPage;

export const pageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 2000

    ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;

// was in line 55 : filter: { frontmatter: { published: { ne: false } } }
