import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Img = styled.img`
  width: ${p => (p.small ? 68 : 135)}px;
  height: ${p => (p.small ? 68 : 135)}px;
  box-shadow: 15px 14px 28px 8px rgba(0, 0, 0, 0.25);
  border-radius: 50%;
  object-fit: cover;
`

export default function Avatar({ small, image }) {
  return <Img small={small} src={image} />
}

Avatar.propTypes = {
  small: PropTypes.bool,
  image: PropTypes.string.isRequired,
}

Avatar.defaultProps = {
  small: false,
}
