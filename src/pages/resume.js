import React, { useState, useEffect } from 'react'
import { Link /* , navigate */ } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/Layout'
import Resume from '../features/Resume/Resume'

const Preloader = styled.div`
  display: ${props => (props.hidden ? 'none' : 'block')};
  visibility: hidden;
`

export default function ResumePage() {
  const [hidePreload, setHidePreload] = useState(false)

  useEffect(() => {
    setHidePreload(true)

    // const timeout = setTimeout(() => {
    //   navigate('/earlybird')
    // }, 10000)

    // return () => {
    //   clearTimeout(timeout)
    // }
  }, [])

  return (
    <Layout title="Resume">
      <Resume />
      <Preloader hidden={hidePreload}>
        <Link to="/earlybird" rel="preload">
          Earlybird
        </Link>
      </Preloader>
    </Layout>
  )
}
