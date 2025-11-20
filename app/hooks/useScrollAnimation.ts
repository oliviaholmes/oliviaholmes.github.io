import { useEffect, useRef, useState } from 'react'

interface UseScrollAnimationOptions {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const [isVisible, setIsVisible] = useState(false)
  const [hasTriggered, setHasTriggered] = useState(false)
  const ref = useRef<HTMLElement>(null)

  const { threshold = 0.1, rootMargin = '0px', triggerOnce = true } = options

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && (!triggerOnce || !hasTriggered)) {
          setIsVisible(true)
          if (triggerOnce) {
            setHasTriggered(true)
          }
        } else if (!triggerOnce && !entry.isIntersecting) {
          setIsVisible(false)
        }
      },
      { threshold, rootMargin }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [threshold, rootMargin, triggerOnce, hasTriggered])

  return { ref, isVisible }
}

export const useStaggeredAnimation = (itemsCount: number, delay = 100) => {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const { ref, isVisible } = useScrollAnimation()

  useEffect(() => {
    if (isVisible) {
      const timeouts: NodeJS.Timeout[] = []
      
      for (let i = 0; i < itemsCount; i++) {
        const timeout = setTimeout(() => {
          setVisibleItems(prev => [...prev, i])
        }, i * delay)
        timeouts.push(timeout)
      }

      return () => {
        timeouts.forEach(clearTimeout)
      }
    }
  }, [isVisible, itemsCount, delay])

  return { ref, visibleItems, isVisible }
}