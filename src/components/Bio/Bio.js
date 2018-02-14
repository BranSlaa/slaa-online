import React from 'react'
import profilePic from './portrait.jpg'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
        }}
      >
        <img
          src={profilePic}
          alt={`Brandon Slaa`}
          style={{
            marginBottom: 0,
            height: '3rem',
            width: 'auto',
          }}
        />
        <p
          style={{
            verticalAlign: 'middle',
          }}
        >
          Written by <strong>Brandon Slaa</strong>.
        </p>
      </div>
    )
  }
}

export default Bio
