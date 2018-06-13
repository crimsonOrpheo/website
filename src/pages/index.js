import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import graphql from 'graphql-tag';

import Tags from '../components/Taglist';
import Bio from '../components/Bio'
import { rhythm } from '../utils/typography'
import VerticalNavigationList from '../components/search/VerticalNavigationList';
import wallp from "../../static/wallp.jpg";

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')
    const siteSearchIndex = get(this, 'props.data.siteSearchIndex')
    return (
      <div>
        <Helmet title={siteTitle}>
          <meta name="twitter:site" content="@BovetJulien" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="julienbovet.com" />
          <meta name="twitter:creator" content="@BovetJulien" />
          <meta property="og:url" content="https://julienbovet.com" />
          <meta property="og:description" content="I beat the drums & crunch data." />
          <meta property="twitter:image" content={wallp} />
          <meta property="og:image" content={wallp} />
        </Helmet>
        <Bio />
        {posts.map(({ node }) => {
          const title = get(node, 'frontmatter.title') || node.fields.slug
          return (
            <div key={node.fields.slug}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date} in<Tags list={node.frontmatter.tags || []}/></small>
              <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </div>
          )
        })}
      </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    siteSearchIndex {
      index
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            tags
          }
          internal {
            content
          }
          headings {
            depth
            value
          }
        }
      }
    }
  }
`
