import React from 'react'
import nothing from './404.gif'
import Link from 'gatsby-link';

class NotFoundPage extends React.Component {
  render() {
    console.log('I was triggered during render');
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'virtualPageView',
        pagePath: '/404/',
        pageTitle: '404 | julienbovet.com'
      });
    }
    //
    return (
    <div>
      <h1>What are you lookin&#39; for? There&#39;s nothing here! </h1>
      <p>Click on this confused Travolta gif to get back home!</p>
      <Link  to={`/`}>
        <img
          src={nothing}
          alt={`Nothing!`}
          // style={{
          //   marginRight: rhythm(1 / 3),
          //   marginBottom: 0,
          //   width: rhythm(2),
          //   height: rhythm(2),
          //   borderRadius: 10
          // }}
        />
      </Link>
    </div>
  )};
}

export default NotFoundPage;
