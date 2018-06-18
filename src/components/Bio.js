import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'
import '../styles/animations.css'
import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'
import linkedIn from './linkedin.png'
import mail from './envelope.png'
import twitter from './twitter.png'



class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Julien Bovet`}
          style={{
            marginRight: rhythm(1 / 3),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
            borderRadius: 10
          }}
        />
        <p>
          I beat the <a href="/tags/drums">drums</a> & crunch <a href="/tags/data">data</a>.
        <br/>
          <a href="https://twitter.com/BovetJulien">
            <img
              src={twitter}
              style={{
                borderRadius: 5,
                marginRight: rhythm(1 / 3),
              }}
            />
          </a>
          <a href="https://www.linkedin.com/in/julienbovet">
            <img
              src={linkedIn}
              style={{
                borderRadius: 5,
                marginRight: rhythm(1 / 3),
              }}
            />
          </a>
          <a href="mailto:julien@julienbovet.com">
            <small
              style={{
                position: 'relative',
                top: -7
              }}
            >julien@julienbovet.com</small>
          </a>
        </p>
      </div>
    )
  }
}

export default Bio
