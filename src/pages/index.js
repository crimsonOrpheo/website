import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import graphql from 'graphql-tag';

import Tags from '../components/Taglist';
import Bio from '../components/Bio'
import { rhythm } from '../utils/typography'
import VerticalNavigationList from '../components/search/VerticalNavigationList';

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')
    const siteSearchIndex = get(this, 'props.data.siteSearchIndex')
    const imageURL = get(this,'props.data.allFile.edges[0].node.publicURL')
    const fullImageURL = "https://julienbovet.com".concat(imageURL)
    // Analytics
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'virtualPageView',
      pagePath: '/',
      pageTitle: siteTitle
    });
    //
    return (
      <div>
        <Helmet title={siteTitle}>
          <meta name="twitter:site" content="@BovetJulien" />
          <link rel="canonical" href="https://julienbovet.com" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="julienbovet.com" />
          <meta name="twitter:creator" content="@BovetJulien" />
          <meta property="og:url" content="https://julienbovet.com" />
          <meta property="og:description" content="I beat the drums & crunch data. You can expect articles about dataviz, Tableau, Google Analytics, or drumming exercices." />
          <meta property="og:image" content={fullImageURL}/>
          <meta name="description" content="I beat the drums & crunch data. You can expect articles about dataviz, Tableau, Google Analytics, or drumming exercices." />
          <meta name="google-site-verification" content="-2r67eEaDRT2H2gB99413hHXQhV1L-gYTBxohuMsvcY" />
        </Helmet>
        <Bio />
        {posts.map(({ node }) => {
          const title = get(node, 'frontmatter.title') || node.fields.slug
          return (
            <div style={{
              marginBottom: rhythm(2)
            }} key={node.fields.slug}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: 'none' }} to={node.frontmatter.path}>
                  {title}
                </Link>
              </h3>
              <h4 style={{
                  marginTop : 0,
                  color:'#7f8c8d'
              }}>{node.frontmatter.subtitle}</h4>
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
    allFile(filter:
        {name: {eq:"sharepic"}}
      ) {
        edges {
          node {
            name
            publicURL
          }
        }
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
            path
            title
            subtitle
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
