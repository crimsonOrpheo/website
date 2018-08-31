import React from "react";
import PropTypes from "prop-types";
import '../styles/tagPills.css'
import { rhythm, scale } from '../utils/typography'
// Utilities
import kebabCase from "lodash/kebabCase";

// Components
import Helmet from "react-helmet";
import Link from "gatsby-link";

class TagsPage extends React.Component {

  componentDidMount(){
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'virtualPageView',
        pagePath: '/tags/',
        pageTitle: 'All tags | julienbovet.com'
      });
    }
  }

  render(){
  const {group} = this.props.data.allMarkdownRemark;
  return (
  <div>
    <Helmet title='All tags | julienbovet.com' />
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
)};}

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
