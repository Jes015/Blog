import { useEffect } from 'react'

export const useNearElement = (element: React.MutableRefObject<HTMLDivElement | undefined>, onScrollAction: () => void) => {
  useEffect(() => {
    if (element.current == null) return

    const handleOnScroll: IntersectionObserverCallback = (entries) => {
      const element = entries[0]

      if (element == null) {
        console.error('infinity scroll: element not found')
      }

      if (element.isIntersecting) {
        onScrollAction()
      }
    }

    const observer = new IntersectionObserver(handleOnScroll, { rootMargin: '20px' })

    observer.observe(element.current)

    return () => {
      if (element != null) {
        observer.disconnect()
      }
    }
  }, [element])
}
