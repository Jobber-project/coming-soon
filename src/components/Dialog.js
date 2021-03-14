import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const MARKS = {
  0: '?',
  1: '!',
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #56bd66;
  width: 158px;
  height: 55px;
  box-shadow: 15px 14px 28px 8px rgba(0, 0, 0, 0.25);
  border-radius: ${p =>
    p.right ? '20px 20px 20px 0px' : '20px 20px 0px 20px'};
  margin: ${p => (p.right ? '-5px 10px' : '-5px 10px')};
`
const Comment = styled.p`
  font-weight: 300;
  font-size: 1.2rem;
  color: white;
  padding: 15px;
`

const TagSection = styled.div`
  display: flex;
  width: 100%;
  justify-content: ${p => (p.right ? 'flex-end' : 'flex-start')};
  position: absolute;
  bottom: -7px;
  ${p => (p.right ? 'padding-right: 20px' : 'padding-left: 20px')};
`

const HashTag = styled.div`
  padding: 3px;
  background: #c4c4c4;
  border-radius: 3px;
  ${p => (p.right ? 'margin-right: 5px' : 'margin-left: 5px')};
`

const Mark = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 14px;
  height: 14px;
  background: #c4c4c4;
  border-radius: 50%;
`

const TagText = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 1rem;

  text-align: center;

  color: #ffffff;
`

export default function Dialog({ comment, hashtags, mark, right }) {
  return (
    <Wrapper right={right}>
      <Comment>{comment}</Comment>
      <TagSection right={right}>
        {right ? (
          <>
            {hashtags.map(hashtag => (
              <HashTag right={right}>
                <TagText>#{hashtag}</TagText>
              </HashTag>
            ))}
            <Mark>
              <TagText>{MARKS[mark]}</TagText>
            </Mark>
          </>
        ) : (
          <>
            <Mark>
              <TagText>{MARKS[mark]}</TagText>
            </Mark>
            {hashtags.map(hashtag => (
              <HashTag right={right}>
                <TagText>#{hashtag}</TagText>
              </HashTag>
            ))}
          </>
        )}
      </TagSection>
    </Wrapper>
  )
}

Dialog.propTypes = {
  comment: PropTypes.string,
  hashtags: PropTypes.arrayOf(PropTypes.string),
  mark: PropTypes.number,
  right: PropTypes.bool,
}

Dialog.defaultProps = {
  comment: '',
  hashtags: [],
  mark: 0,
  right: false,
}
