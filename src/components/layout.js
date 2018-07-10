import React from 'react'
<<<<<<< HEAD:src/layouts/index.js
import Link from 'gatsby-link'
import VerticalNavigationList from '../components/search/VerticalNavigationList';
=======
import { Link } from 'gatsby'

>>>>>>> 4a3683b9e2b0383ae71d1aaae771d4fd0831ca5f:src/components/layout.js
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
<<<<<<< HEAD:src/layouts/index.js
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')
    const siteSearchIndex = get(this, 'props.data.siteSearchIndex')
=======
    const rootPath = `${__PATH_PREFIX__}/`
>>>>>>> 4a3683b9e2b0383ae71d1aaae771d4fd0831ca5f:src/components/layout.js
    let header

    if (location.pathname === rootPath) {
      header = (
        <span>
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1),
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
        {children}
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
            subtitle
            tags
            path
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
