import React, { Component } from 'react';
import NavigationItem from './NavigationItem';
import Search from './Search';
import '../../styles/animations.css'
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import { simpleEvent } from '../../utils/digital-analytics'


class VerticalNavigationList extends Component {
  constructor(...rest) {
    super(...rest);
    this.state = {
      hits: null,
    };
  }

  render() {
    const { currentSlug, edges, searchData } = this.props;
    const { hits } = this.state;
    return (
        <div
          style={{
            backgroundColor : 'rgba(0, 0, 0, 0.85)',
            color: 'White',
            position: 'fixed',
            left: '0',
            right: '0',
            top: '0',
            bottom: '0',
            overflowY:'auto',
            zIndex: 10000,
          }}>
          <Search
            data={searchData}
            onSearch={(text, hits) =>
              this.setState({
                hits: text !== '' ? hits : null,
              })
            }
          />
          <nav>
            <dl>
              {edges.slice(0,-1)
                .filter(
                  ({ node }) =>
                    !hits || hits.filter(hit => hit.id === node.id).length > 0,
                )
                .map(({ node }, index) => (
                  <div key={`nav-header-wrapper-${index}`}>
                    <NavigationItem
                      depth={1}
                      value={node.frontmatter.title}
                      extract={node.excerpt}
                      key={`nav-item-${index}-${node.fields.slug}`}
                      href={`${node.frontmatter.path}`}
                      tags={node.frontmatter.tags}
                      date={node.frontmatter.date}
                      subtitle={node.frontmatter.subtitle}
                    />
                    <hr
                      style={{
                        backgroundColor:"#BDC3C7",
                        width:"300px",
                        marginLeft:"auto",
                        marginRight:"auto"
                      }}
                    />
                  </div>
                ))}
                {edges.slice(-1)
                  .filter(
                    ({ node }) =>
                      !hits || hits.filter(hit => hit.id === node.id).length > 0,
                  )
                  .map(({ node }, index) => (
                    <div key={`nav-header-wrapper-${index}`}>
                      <NavigationItem
                        depth={1}
                        value={node.frontmatter.title}
                        extract={node.excerpt}
                        key={`nav-item-${index}-${node.fields.slug}`}
                        href={`${node.frontmatter.path}`}
                        tags={node.frontmatter.tags}
                        date={node.frontmatter.date}
                        subtitle={node.frontmatter.subtitle}
                      />
                    </div>
                  ))}
            </dl>
          </nav>
        </div>
    );
  }
}

export default VerticalNavigationList;
