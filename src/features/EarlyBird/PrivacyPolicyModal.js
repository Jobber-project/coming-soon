import React from 'react'

import Modal from '../../components/Modal'

const PrivacyPolicyModal = React.forwardRef((props, ref) => {
  return (
    <Modal ref={ref} labelledBy="privacy-policy">
      Hello
      <></>
    </Modal>
  )
})

export default PrivacyPolicyModal
