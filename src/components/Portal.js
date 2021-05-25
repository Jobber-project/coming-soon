import { useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'

const root =
  typeof document !== 'undefined'
    ? document.getElementById?.('portal')
    : undefined

export default function Portal({ children }) {
  const elementRef = useRef(
    typeof document !== 'undefined' ? document.createElement('div') : null,
  )

  useEffect(() => {
    const { current: element } = elementRef

    if (root && element) {
      root.appendChild(element)

      return () => {
        root.removeChild(element)
      }
    }

    return undefined
  }, [])

  return elementRef.current ? createPortal(children, elementRef.current) : null
}
