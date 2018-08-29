import React from 'react'
import nothing from './404.gif'
import Link from 'gatsby-link';

class NotFoundPage extends React.Component {
  render() {
    console.log("I'm in")
    return (
    <div>
      <h1>What are you lookin&#39; for? There&#39;s nothing here! </h1>
    </div>
  )};
}

export default NotFoundPage;

// componentDidMount(){
//   if (typeof window !== 'undefined') {
//     window.dataLayer = window.dataLayer || [];
//     window.dataLayer.push({
//       event: 'virtualPageView',
//       pagePath: '/404/',
//       pageTitle: '404 | julienbovet.com'
//     });
//   }
//   //
// }

// <p>Click on this confused Travolta gif to get back home!</p>
// <Link  to={`/`}>
//   <img
//     src={nothing}
//     alt={`Nothing!`}
//   />
// </Link>
