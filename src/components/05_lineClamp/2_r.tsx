import { useEffect, useRef, useState } from "react"
import cx from "./cx"
import data from "./data"
import { measureLines } from "@/service/util"

const LineClampText = ({text, lines}: {text: string, lines: number}) => {
  const cloneRef = useRef<HTMLDivElement>(null)
  const elemRef = useRef<HTMLDivElement>(null)
  const [isClamped, toggleClamped] = useState(true)

  useEffect(() => {
    if (text && elemRef.current && cloneRef.current) {
      // console.log(Math.floor(cloneRef.current.offsetHeight / parseInt(getComputedStyle(elemRef.current).lineHeight)))
      toggleClamped(Math.floor(cloneRef.current.offsetHeight / parseInt(getComputedStyle(elemRef.current).lineHeight)) > (lines || 0))
    }
  }, [lines])

  return (
    <div className={cx('content', { clamped: isClamped })}>
      <div className={cx('text-clone')} ref={cloneRef}>{text}</div>
      <div className={cx('text')} ref={elemRef} style={{ WebkitLineClamp: lines }}>{text}</div>
      {isClamped && <button className={cx('buttonMore')} onClick={() => toggleClamped(false)} />}
    </div>
  )
}

const LineClamp2 = () => {
  return (
    <>
      <h3>#2<sub>clone - 3줄말줄임</sub></h3>
      {data.map((text, i) => <LineClampText text={text} lines={5-i} key={i} />)}
    </>
  )
}

export default LineClamp2
