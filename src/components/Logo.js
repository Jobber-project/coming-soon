import React from 'react'

import LogoImg from '../images/inverted-logo.png'

export default function Logo() {
  return (
    <img
      style={{
        width: '100%',
        height: 'auto',
        maxWidth: '300px',
      }}
      src={LogoImg}
      alt="Jobello logo"
    />
  )
}
