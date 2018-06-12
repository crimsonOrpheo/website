import React from 'react'
import Link from 'gatsby-link'
import VerticalNavigationList from '../components/search/VerticalNavigationList';
import { rhythm, scale } from '../utils/typography'
import get from 'lodash/get'
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
require("prismjs/themes/prism-solarizedlight.css");

class Template extends React.Component {
  constructor () {
    super()
    this.state = {
      isHidden: true
    }
  }
  toggleHidden (event) {
    if (!event.target.matches('input'))
    this.setState({
      isHidden: !this.state.isHidden
    })
  }
  render() {
    const { location, children } = this.props
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')
    const siteSearchIndex = get(this, 'props.data.siteSearchIndex')
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    if (location.pathname === rootPath) {
      header = (
        <span>
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 22,
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            julienbovet.com
          </Link>
          <img onClick={this.toggleHidden.bind(this)}
            style={{
              float: 'right',
              marginBottom : 0,
              marginTop : 6,
              cursor: 'pointer'
            }}
            src={ require('../../static/magnifying-glass.png') } />
        </h1>

        <div onClick={this.toggleHidden.bind(this)}><ReactCSSTransitionGroup transitionName="thing">
          {!this.state.isHidden &&
            <VerticalNavigationList
                    className="searchOverlay"
                    currentSlug={'/'}
                    edges={posts}
                    searchData={siteSearchIndex}
                  />}
                  </ReactCSSTransitionGroup>
        </div>
        </span>
      )
    } else {
      header = (
        <h3
          style={{
            marginTop: 0,
            marginBottom: rhythm(-1),
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            julienbovet.com
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        {header}
        {children()}
      </div>
    )
  }
}

export default Template

export const pageQuery = graphql`
  query IndexQuery2 {
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
