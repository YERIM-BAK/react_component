import { useEffect, useRef, useState } from "react"
import cx from "./cx"
import data from "./data"
import { measureLines } from "@/service/util"

const LineClampText = ({text}: {text: string}) => {
  const elemRef = useRef<HTMLDivElement>(null)
  const [isClamped, toggleClamped] = useState(true)

  useEffect(() => {
    if (text && elemRef.current) {
      const measuredLines = measureLines(elemRef.current, text)
      toggleClamped(measuredLines > 3)
    }
  }, [text])

  return (
    <div className={cx('content', { clamped: isClamped })}>
      <div className={cx('text')} ref={elemRef} style={{ WebkitLineClamp: 3 }}>{text}</div>
      {isClamped && <button className={cx('buttonMore')} onClick={() => toggleClamped(false)} />}
    </div>
  )
}

const LineClamp1 = () => {
  return (
    <>
      <h3>#1<sub>canvas - 3줄말줄임</sub></h3>
      {data.map((text, i) => <LineClampText text={text} key={i} />)}
    </>
  )
}

export default LineClamp1
