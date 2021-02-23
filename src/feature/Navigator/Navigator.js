import React, { useState, useEffect } from 'react'

import Welcome from '../Confetti/Confetti'
import EarlyBird from '../EarlyBird/EarlyBird'

const TRANSITION = 10000
const PAGES = 2

export default function Navigator() {
  const [page, setPage] = useState(1)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (page < PAGES) setPage(page + 1)
    }, TRANSITION)
    return () => clearTimeout(timer)
  }, [page])

  return (
    <>
      {page === 1 && <Welcome />}
      {page === 2 && <EarlyBird />}
    </>
  )
}
