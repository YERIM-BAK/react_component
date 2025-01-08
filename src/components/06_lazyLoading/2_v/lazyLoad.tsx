import vanillaIntersectObserver from '@/hook/vanilla/intersectionObserver';
import React from 'react';

const lazyLoad = ($elem: HTMLImageElement, src: string) => {
  const handleIntersect = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.setAttribute('src', src)
        observer.disconnect()
      }
    })
  }

  const observer = vanillaIntersectObserver($elem, { threshold: 0 }, handleIntersect)
}

export default lazyLoad
