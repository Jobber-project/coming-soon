import React from 'react'
import PropTypes from 'prop-types'

import LogoImg from '../images/jobello-logo.png'

const LOGO_SIZE = {
  small: 50,
  medium: 100,
  large: 150,
}

export default function Logo({ size }) {
  return <img height={LOGO_SIZE[size]} src={LogoImg} alt="Jobello logo" />
}

Logo.propTypes = {
  size: PropTypes.string,
}

Logo.defaultProps = {
  size: 'medium',
}
