import { SyntheticEvent, useEffect, useState } from 'react'
import cx from './cx'
import { data } from './data'
import SingleOpenContextProvider, { useSingleOpen } from '../../context/singleOpenContext'

const Tooltip = ({
  id,
  title,
  description
}: {
  id: string
  title: string
  description: string
}) => {
  return (
    <details className={cx('details')} data-tooltip={id}>
      <summary className={cx('trigger')} data-tooltip-summary>{title}</summary>
      <div className={cx('tooltip')} onClick={(e) => e.stopPropagation()}>
        {description}
      </div>
    </details>
  )
}

const Tooltip3 = () => {
  useEffect(() => {
    const closeAllTooltip = (e: Event) => {
      const target = e.target as HTMLElement
      document.querySelectorAll('[data-tooltip]').forEach(elem => {
        if (elem !== target.parentElement) elem.removeAttribute('open')
      })
    }

    window.addEventListener('click', closeAllTooltip)
    return () => {
      window.removeEventListener('click', closeAllTooltip)
    }
  }, [])

  return (
    <>
      <h3>
        #3. React<sub>html details 태그 사용</sub>
      </h3>
      <SingleOpenContextProvider>
        {data.map((d) => (
          <Tooltip {...d} key={d.id} />
        ))}
      </SingleOpenContextProvider>
    </>
  )
}

export default Tooltip3
