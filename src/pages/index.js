import React, { useEffect } from 'react'
import { navigate } from 'gatsby'

import Layout from '../components/Layout'
import Welcome from '../feature/Confetti/Confetti'

export default function IndexPage() {
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate('/earlybird')
    }, 10000)

    return () => {
      clearTimeout(timeout)
    }
  }, [])

  return (
    <Layout>
      <Welcome />
    </Layout>
  )
}
