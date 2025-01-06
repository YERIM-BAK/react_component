import { SyntheticEvent, useState } from "react"
import cx from "./cx"
import { measureLines } from "@/service/util"

const TextBox1 = () => {
  const [text, setText] = useState('')
  const [lines, setLines] = useState(3)

  const handleChange = (e: SyntheticEvent) => {
    const elem = e.target as HTMLTextAreaElement
    const val = elem.value
    const lines = Math.min(Math.max(measureLines(elem, val), 3), 15)
    console.log(lines)
    setText(val)
    setLines(lines)
  }

  return (
    <>
      <h3>#1<sub>controlled(react가 상태관리). canvas</sub></h3>
      <div className={cx('container')}>
        <textarea className={cx('textarea')} onChange={handleChange} rows={lines} value={text} />
      </div>
    </>
  )
}

export default TextBox1
