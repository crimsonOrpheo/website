import React from "react";
import PropTypes from "prop-types";
import { rhythm } from '../utils/typography'
import Tags from '../components/Taglist';

// Components
import Link from "gatsby-link";

const Tags2 = ({ pathContext, data }) => {
  const { tag } = pathContext;
  const { edges, totalCount } = data.allMarkdownRemark;
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`;

  return (
    <div>
      <h1
        style={{
          marginBottom: rhythm(2)
        }}
      >{tagHeader}</h1>
        {edges.map(({ node }) => {
          const { path, title } = node.frontmatter;
          return (
          <div>
            <h3
              style={{
                marginBottom: rhythm(1 / 4),
              }}>
                <Link style={{ boxShadow: 'none' }}  to={path}>{title}</Link>
            </h3>
            <h4 style={{
                marginTop : 0
            }}>{node.frontmatter.subtitle}</h4>
            <small>{node.frontmatter.date} in<Tags list={node.frontmatter.tags || []}/></small>
            <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
          </div>
          );
        })}
      <Link to="/tags">All tags</Link>
    </div>
  );
};

Tags2.propTypes = {
  pathContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              path: PropTypes.string.isRequired,
              title: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
};

export default Tags2;

export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          excerpt
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            subtitle
            path
            tags
          }
        }
      }
    }
  }
`;
