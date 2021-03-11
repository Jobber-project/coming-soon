import { useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'

const root = document?.getElementById?.('portal')

export default function Portal({ children }) {
  const elementRef = useRef(document?.createElement?.('div'))

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
