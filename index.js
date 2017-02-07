import React from 'react'

const img = require('./ieframe.png') //1280x944
console.log('ie6frame')

const IE6Frame = ({ title, url, children, size }) => (
  <div
    style={{
      width: 1280 * size + 'px',
      height: 944 * size + 'px',
      backgroundImage: `url(${img})`,
      position: 'relative',
      backgroundSize: 'cover'
    }}
    ref={(e) => { console.log(title, url, children, size) }}>
    <span
      style={{
        position: 'absolute',
        top: 3 * size + 'px',
        left: 24 * size + 'px',
        fontSize: 16 * size + 'px',
        color: 'white'
      }}>{title} - Internet Explorer 6</span>
    <span
      style={{
        position: 'absolute',
        top: 93 * size + 'px',
        left: 75 * size + 'px',
        fontSize: 13 * size + 'px'
      }}>{url}</span>
    <div
      style={{
        position: 'absolute',
        top: 114 * size + 'px',
        left: 1 * size + 'px',
        width: 1259 * size + 'px',
        height: 806 * size + 'px',
        overflow: 'scroll'
      }}>{children}</div>
  </div>
)

IE6Frame.defaultProps = {
  title: 'Welcome to IE6',
  url: 'http://example.com',
  size: 1
}

export default IE6Frame
