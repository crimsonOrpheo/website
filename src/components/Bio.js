import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'
import '../styles/animations.css'
import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

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
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
            borderRadius: 10
          }}
        />
        <p>
          I beat the drums & crunch data.<br/>
          <a href="https://twitter.com/BovetJulien">Follow me on Twitter!
        </a>
        </p>
      </div>
    )
  }
}

export default Bio
