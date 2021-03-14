import React from 'react'
import styled from 'styled-components'

import CommunityTalker from '../../components/CommunityTalker'
import Avatar1 from '../../images/avatar1.jpg'
import Avatar2 from '../../images/avatar2.jpg'
import Avatar3 from '../../images/avatar3.jpg'
import Avatar4 from '../../images/avatar4.jpg'

const DUDES = [
  {
    id: 1,
    image: Avatar1,
    comment: 'Blivit av med jobbet, tar emot alla tips som finns.',
    hashtags: ['jobbsök', 'covid'],
    mark: 0,
  },
  {
    id: 2,
    image: Avatar2,
    comment: 'Blivit av med jobbet, tar emot alla tips som finns.',
    hashtags: ['jobbsök'],
    mark: 0,
  },
  {
    id: 3,
    image: Avatar3,
    comment: 'Blivit av med jobbet, tar emot alla tips som finns.',
    hashtags: ['jobbsök'],
    mark: 0,
  },
  {
    id: 4,
    image: Avatar4,
    comment: 'Blivit av med jobbet, tar emot alla tips som finns.',
    hashtags: ['jobbsök'],
    mark: 0,
  },
]

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`

export default function Talkers() {
  return (
    <Wrapper>
      {DUDES.map(({ image, comment, hashtags, id, mark }, index) => (
        <CommunityTalker
          key={id}
          index={index}
          image={image}
          right={index % 2}
          comment={comment}
          hashtags={hashtags}
          mark={mark}
        />
      ))}
    </Wrapper>
  )
}
