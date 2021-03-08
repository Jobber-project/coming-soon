import React, { useState, useEffect } from 'react'
import { Link, navigate } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/Layout'
import Welcome from '../features/Confetti/Confetti'

const Preloader = styled.div`
  display: ${props => (props.hidden ? 'none' : 'block')};
  visibility: hidden;
`

export default function IndexPage() {
  const [hidePreload, setHidePreload] = useState(false)

  useEffect(() => {
    setHidePreload(true)

    const timeout = setTimeout(() => {
      navigate('/earlybird')
    }, 10000)

    return () => {
      clearTimeout(timeout)
    }
  }, [])

  return (
    <Layout title="Jobelo">
      <Welcome />
      <Preloader hidden={hidePreload}>
        <Link to="/earlybird" rel="preload">
          Earlybird
        </Link>
      </Preloader>
    </Layout>
  )
}
