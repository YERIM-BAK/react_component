const vanillaIntersectObserver = ($elem: HTMLElement, options: IntersectionObserverInit, callback: (entries: IntersectionObserverEntry[]) => void) => {
  const handleIntersect = (entries: IntersectionObserverEntry[]) => {
    // console.log(entries)
    if (!$elem) return
    callback(entries)
  }
  const observer = new IntersectionObserver(handleIntersect, options)
  observer.observe($elem)

  return observer
}

export default vanillaIntersectObserver
