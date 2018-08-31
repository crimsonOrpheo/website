import React from "react";
import PropTypes from "prop-types";
import { rhythm } from '../utils/typography'
import Tags from '../components/Taglist';
import Helmet from "react-helmet";
import Link from "gatsby-link";
import { complexEvent } from '../utils/digital-analytics'

class Tags2 extends React.Component {
  componentDidMount(){
    const { tag } = this.props.pathContext;
    const pageTitle = `Posts in ${tag} | julienbovet.com`
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'virtualPageView',
        pagePath: `/tags/${tag.toLowerCase()}/`,
        pageTitle: pageTitle
      });
    }
  }
  render(){
// const Tags2 = ({ pathContext, data }) => {
    const { tag } = this.props.pathContext;
    const { edges, totalCount } = this.props.data.allMarkdownRemark;
    const pageTitle = `Posts in ${tag} | julienbovet.com`
    const tagHeader = `${totalCount} post${
      totalCount === 1 ? "" : "s"
    } tagged with "${tag}"`;
    //
    return (
      <div>
      <Helmet title={pageTitle} />
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
                  <Link style={{ boxShadow: 'none' }}  to={path} onClick={() => complexEvent('Article','Reach from tags',node.frontmatter.path)}>{title}</Link>
              </h3>
              <h4 style={{
                  marginTop : 0
              }}>{node.frontmatter.subtitle}</h4>
              <small>{node.frontmatter.date} in<Tags list={node.frontmatter.tags || []}/></small>
              <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </div>
            );
          })}
        <Link to="/tags/">All tags</Link>
      </div>
    );
  };
}

// Tags2.propTypes = {
//   pathContext: PropTypes.shape({
//     tag: PropTypes.string.isRequired,
//   }),
//   data: PropTypes.shape({
//     allMarkdownRemark: PropTypes.shape({
//       totalCount: PropTypes.number.isRequired,
//       edges: PropTypes.arrayOf(
//         PropTypes.shape({
//           node: PropTypes.shape({
//             frontmatter: PropTypes.shape({
//               path: PropTypes.string.isRequired,
//               title: PropTypes.string.isRequired,
//             }),
//           }),
//         }).isRequired
//       ),
//     }),
//   }),
// };

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
