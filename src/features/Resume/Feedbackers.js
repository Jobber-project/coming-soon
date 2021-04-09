import React from 'react'
import PropTypes from 'prop-types'

import FeedbackAvatarOne from '../../images/feedback-avatar-one.png'
import FeedbackAvatarTwo from '../../images/feedback-avatar-two.png'
import FeedbackAvatarThree from '../../images/feedback-avatar-three.png'

import Feedback from './Feedback'

export default function Feedbackers({ className }) {
  return (
    <div className={className}>
      <Feedback
        img={FeedbackAvatarOne}
        comment="Ändra denna mening, formulera dig med ett tydligare mål. Ta in min redigering genom godkänna."
      />
    </div>
  )
}

Feedbackers.propTypes = {
  className: PropTypes.string,
}

Feedbackers.defaultProps = {
  className: undefined,
}
