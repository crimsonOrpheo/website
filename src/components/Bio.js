import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'
import '../styles/animations.css'
import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'
import linkedIn from './linkedin.svg'
import twitter from './twitter.svg'
import { simpleEvent } from '../utils/digital-analytics'
import Link from 'gatsby-link';

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
          <a href="/cv" onClick={() => simpleEvent('Bio','CV')}>I</a> beat the drums & crunch <Link to={`/tags/data/`} onClick={() => simpleEvent('Bio','Data')}>data</Link>.
        <br/>
          <a href="https://twitter.com/BovetJulien" onClick={() => simpleEvent('Bio','Twitter')}>
            <img
              src={twitter}
              style={{
                borderRadius: 5,
                marginRight: rhythm(1 / 3),
                height: 24,
                width: 24
              }}
            />
          </a>
          <a href="https://www.linkedin.com/in/julienbovet" onClick={() => simpleEvent('Bio','Linkedin')}>
            <img
              src={linkedIn}
              style={{
                borderRadius: 5,
                marginRight: rhythm(1 / 3),
                height: 24,
                width: 24
              }}
            />
          </a>
          <a href="mailto:julien@julienbovet.com" onClick={() => simpleEvent('Bio','Mail')}>
            <small
              style={{
                position: 'relative',
                top: -7,
                zIndex: -1
              }}
            >julien@julienbovet.com</small>
          </a>
        </p>
      </div>
    )
  }
}

export default Bio
