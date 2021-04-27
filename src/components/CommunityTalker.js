import React from 'react'
import styled, { keyframes, css } from 'styled-components'
import PropTypes from 'prop-types'

import { device } from './Punchline'
import Avatar from './Avatar'
import Dialog from './Dialog'

const Wrapper = styled.div`
  display: flex;
  padding: 20px;
  @media ${device.laptop} {
    padding: 40px;
    margin-bottom: 60px;
  }
  ${p => (p.right ? 'align-self: flex-start' : 'align-self: flex-end')}
`

const animation = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`

const Container = styled.figure`
  display: flex;
  ${p => (p.right ? 'align-self: flex-end' : 'justify-self: flex-start')}
  transform: translateY(50%);
  opacity: 0;
  ${props =>
    css`
      animation: ${animation} 1s ease forwards;
      animation-delay: ${(props.index + 3) * 700}ms;
    `}
`

export default function CommunityTalker({
  image,
  comment,
  hashtags,
  mark,
  right,
  small,
  index,
}) {
  return (
    <Wrapper right={right}>
      <Container right={right} index={index} small={small}>
        {right ? (
          <>
            <Avatar image={image} small={small} />
            <Dialog
              right={right}
              comment={comment}
              hashtags={hashtags}
              mark={mark}
            />
          </>
        ) : (
          <>
            <Dialog
              right={right}
              comment={comment}
              hashtags={hashtags}
              mark={mark}
            />
            <Avatar image={image} small={small} />
          </>
        )}
      </Container>
    </Wrapper>
  )
}

CommunityTalker.propTypes = {
  small: PropTypes.bool,
  image: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  hashtags: PropTypes.string.isRequired,
  mark: PropTypes.string.isRequired,
  right: PropTypes.bool.isRequired,
  index: PropTypes.string.isRequired,
}

CommunityTalker.defaultProps = {
  small: false,
}
