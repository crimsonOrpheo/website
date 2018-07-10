import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import get from 'lodash/get'
import kebabCase from "lodash/kebabCase";


import Tags from '../components/Taglist';
import Bio from '../components/Bio'
import Layout from '../components/layout'
import { rhythm, scale } from '../utils/typography'
import '../styles/tagPills.css'

import { DiscussionEmbed } from "disqus-react"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const { previous, next } = this.props.pathContext
    const disqusShortname = "julienbovet";
    const disqusConfig = {
      identifier: post.id,
      title: post.frontmatter.title,
    };
    const fullPublicURL = "https://julienbovet.com".concat(post.frontmatter.featuredImage.publicURL)
    const fullPostURL = "https://julienbovet.com".concat(post.frontmatter.path)
    const ogDescription = (post.frontmatter.subtitle).concat(' ').concat(post.excerpt)
    return (
      <div>
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`}>
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@BovetJulien" />
          <meta name="twitter:creator" content="@BovetJulien" />
          <meta property="og:url" content={fullPostURL} />
          <meta property="og:title" content={post.frontmatter.title} />
          <meta property="og:type" content="article" />
          <meta property="og:description" content={ogDescription} />
          <meta name="description" content={ogDescription} />
          <meta property="og:image" content={fullPublicURL}/>
          <link rel="canonical" href={fullPostURL} />
        </Helmet>
        <h1>{post.frontmatter.title}</h1>
        <h5
          style={{
            marginTop: rhythm(-0.5),
            marginBottom: rhythm(1),
            color:'#7f8c8d'
          }}
        >{post.frontmatter.subtitle}</h5>
        <p
          style={{
            ...scale(-1 / 5),
            display: 'block',
            marginBottom: rhythm(2),
            marginTop: rhythm(-0.5),
          }}
        >
        {post.frontmatter.date} in<Tags list={post.frontmatter.tags || []}/> by Julien Bovet.
        </p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
      <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
      </div>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      excerpt
      frontmatter {
        title
        subtitle
        path
        date(formatString: "MMMM DD, YYYY")
        tags
        featuredImage {
          publicURL
        }
      }
    }
  }
`
